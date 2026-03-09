import brandsCsvRaw from "./csv/catalog-brands.csv?raw";
import modelsCsvRaw from "./csv/catalog-models.csv?raw";
import vehiclesCsvRaw from "./csv/catalog-vehicles.csv?raw";

export interface CsvCatalogBrand {
  slug: string;
  name: string;
  badge: string;
  country: string;
  headline: string;
  description: string;
}

export interface CsvCatalogModel {
  slug: string;
  brandSlug: string;
  name: string;
  bodyStyle: string;
  years: string;
  summary: string;
  image: string;
  alt: string;
}

export interface CsvCatalogVehicle {
  slug: string;
  brandSlug: string;
  modelSlug: string;
  brand: string;
  model: string;
  trim: string;
  meta: string;
  year: string;
  name: string;
  price?: string;
  image: string;
  alt: string;
  mileage: string;
  transmission: string;
  fuel: string;
  engine: string;
  power: string;
  gallery: readonly string[];
  basics: readonly (readonly [string, string])[];
  features: readonly (readonly [string, string])[];
}

const csvFiles = {
  "catalog-brands.csv": brandsCsvRaw,
  "catalog-models.csv": modelsCsvRaw,
  "catalog-vehicles.csv": vehiclesCsvRaw
} as const;

const readCsvFile = (fileName: keyof typeof csvFiles) => csvFiles[fileName].replace(/^\uFEFF/, "");

const parseCsvMatrix = (content: string) => {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let insideQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const nextChar = content[index + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (char === "," && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      currentRow.push(currentCell.trim());
      const hasContent = currentRow.some((cell) => cell.length > 0);
      if (hasContent) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = "";
      continue;
    }

    currentCell += char;
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some((cell) => cell.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
};

const mapCsvRows = (fileName: keyof typeof csvFiles) => {
  const [headerRow = [], ...dataRows] = parseCsvMatrix(readCsvFile(fileName));
  return dataRows.map((row) =>
    headerRow.reduce<Record<string, string>>((record, header, index) => {
      record[header] = row[index] ?? "";
      return record;
    }, {})
  );
};

const splitPipeList = (value: string) =>
  value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

const parseDetailPairs = (value: string) =>
  splitPipeList(value).map((item) => {
    const separatorIndex = item.indexOf(":");
    if (separatorIndex === -1) {
      return [item, ""] as const;
    }

    return [
      item.slice(0, separatorIndex).trim(),
      item.slice(separatorIndex + 1).trim()
    ] as const;
  });

export const csvCatalogBrands: readonly CsvCatalogBrand[] = mapCsvRows("catalog-brands.csv").map((row) => ({
  slug: row.slug,
  name: row.name,
  badge: row.badge,
  country: row.country,
  headline: row.headline,
  description: row.description
}));

export const csvCatalogModels: readonly CsvCatalogModel[] = mapCsvRows("catalog-models.csv").map((row) => ({
  slug: row.slug,
  brandSlug: row.brandSlug,
  name: row.name,
  bodyStyle: row.bodyStyle,
  years: row.years,
  summary: row.summary,
  image: row.image,
  alt: row.alt
}));

export const csvCatalogVehicles: readonly CsvCatalogVehicle[] = mapCsvRows("catalog-vehicles.csv").map((row) => ({
  slug: row.slug,
  brandSlug: row.brandSlug,
  modelSlug: row.modelSlug,
  brand: row.brand,
  model: row.model,
  trim: row.trim,
  meta: row.meta,
  year: row.year,
  name: row.name,
  price: row.price || undefined,
  image: row.image,
  alt: row.alt,
  mileage: row.mileage,
  transmission: row.transmission,
  fuel: row.fuel,
  engine: row.engine,
  power: row.power,
  gallery: splitPipeList(row.gallery),
  basics: parseDetailPairs(row.basics),
  features: parseDetailPairs(row.features)
}));
