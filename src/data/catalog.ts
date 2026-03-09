import {
  csvCatalogBrands,
  csvCatalogModels,
  csvCatalogVehicles
} from "./catalogCsv";

export type DetailPair = readonly [string, string];

export interface SeoContentBlock {
  eyebrow: string;
  title: string;
  introduction: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
}

export interface CatalogBrand {
  slug: string;
  name: string;
  badge: string;
  country: string;
  headline: string;
  description: string;
}

export interface CatalogModel {
  slug: string;
  brandSlug: string;
  name: string;
  bodyStyle: string;
  years: string;
  summary: string;
  image: string;
  alt: string;
}

export interface CatalogVehicle {
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
  basics: readonly DetailPair[];
  features: readonly DetailPair[];
}

export const catalogSeo = {
  title: "Catalogo | Coches diesel Grupo VAG de Alemania",
  description:
    "Catalogo modular preparado por marca, modelo y variante para Volkswagen, SEAT, Audi y Skoda.",
  canonical: "https://cochesalemiavag.es/catalogo"
} as const;

export const catalogSeoContent: SeoContentBlock = {
  eyebrow: "Importacion VAG desde Alemania",
  title: "Catalogo preparado para SEO por marca, modelo y ficha individual",
  introduction:
    "La estructura del catalogo replica la forma en la que busca un comprador real: primero fabricante, despues familia de modelo y por ultimo unidad concreta con kilometraje, motor, cambio y estado general.",
  paragraphs: [
    "Trabajamos el mercado aleman de Volkswagen, Audi, SEAT y Skoda con foco en mecanicas diesel habituales, historiales mantenidos y unidades que tengan sentido para importar a Espana.",
    "Cada ficha queda orientada a contacto y asesoria, no a compra inmediata. Asi podemos confirmar disponibilidad real, documentacion, costes de transporte, matriculacion y revision tecnica antes de cerrar nada."
  ],
  highlights: [
    "URLs limpias por marca, modelo y version",
    "Relevancia SEO para busquedas tipo 'Volkswagen Golf diesel Alemania'",
    "Arquitectura lista para crecer desde CSV o inventario externo"
  ]
};

export const catalogHero = {
  title: "Catalogo Grupo VAG",
  backgroundImage: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohome023.png"
} as const;

const fallbackCatalogBrands = [
  {
    slug: "volkswagen",
    name: "Volkswagen",
    badge: "VW",
    country: "Alemania",
    headline: "Compactos y familiares diesel con muchisima oferta en Alemania.",
    description: "Polo, Golf y Passat suelen ser los mas buscados por equilibrio entre recambio, consumo y valor de reventa."
  },
  {
    slug: "seat",
    name: "SEAT",
    badge: "S",
    country: "Grupo VAG",
    headline: "Opciones deportivas y racionales con mecanicas VAG conocidas.",
    description: "Ibiza y Leon TDI encajan muy bien para quien quiere mantenimiento sencillo y buen precio de entrada."
  },
  {
    slug: "audi",
    name: "Audi",
    badge: "A",
    country: "Alemania",
    headline: "Acabado premium, plataformas muy probadas y motores TDI solidos.",
    description: "A3 y A4 son referencias claras para importacion con foco en comfort, imagen y tecnologia."
  },
  {
    slug: "skoda",
    name: "Skoda",
    badge: "SK",
    country: "Grupo VAG",
    headline: "Mucho espacio y gran relacion precio-producto en el mercado aleman.",
    description: "Fabia, Octavia y Superb comparten tecnologia VAG con un coste normalmente mas ajustado."
  }
] as const satisfies readonly CatalogBrand[];

const fallbackCatalogModels = [
  {
    slug: "polo",
    brandSlug: "volkswagen",
    name: "Polo",
    bodyStyle: "Urbano",
    years: "2018-2022",
    summary: "Modelo ideal para importacion de acceso, con motores 1.6 TDI y consumos muy contenidos.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
    alt: "Volkswagen Polo diesel preparado como subcategoria del catalogo"
  },
  {
    slug: "golf",
    brandSlug: "volkswagen",
    name: "Golf",
    bodyStyle: "Compacto",
    years: "2017-2023",
    summary: "Uno de los diesel mas tipicos de Alemania, facil de vender, mantener y documentar.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
    alt: "Volkswagen Golf diesel como familia de modelos"
  },
  {
    slug: "passat",
    brandSlug: "volkswagen",
    name: "Passat",
    bodyStyle: "Familiar",
    years: "2018-2023",
    summary: "Muy buscado en carroceria Variant para viajes largos y uso profesional.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
    alt: "Volkswagen Passat Variant diesel"
  },
  {
    slug: "ibiza",
    brandSlug: "seat",
    name: "Ibiza",
    bodyStyle: "Urbano",
    years: "2018-2022",
    summary: "Mecanica VAG sencilla y costes contenidos para importacion de primer presupuesto.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
    alt: "SEAT Ibiza TDI en categoria de modelo"
  },
  {
    slug: "leon",
    brandSlug: "seat",
    name: "Leon",
    bodyStyle: "Compacto",
    years: "2018-2023",
    summary: "Muy interesante en FR y Style diesel por equilibrio entre equipamiento y precio.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
    alt: "SEAT Leon TDI como subcategoria"
  },
  {
    slug: "a3",
    brandSlug: "audi",
    name: "A3",
    bodyStyle: "Compacto premium",
    years: "2018-2023",
    summary: "Sportback TDI muy demandado por imagen premium y coste de uso razonable.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
    alt: "Audi A3 Sportback TDI como familia de modelo"
  },
  {
    slug: "a4",
    brandSlug: "audi",
    name: "A4",
    bodyStyle: "Berlina/Familiar",
    years: "2018-2023",
    summary: "Especialmente interesante en carroceria Avant y con 2.0 TDI quattro.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
    alt: "Audi A4 Avant TDI como subcategoria"
  },
  {
    slug: "fabia",
    brandSlug: "skoda",
    name: "Fabia",
    bodyStyle: "Urbano",
    years: "2018-2022",
    summary: "Acceso racional a mecanica VAG diesel con buena disponibilidad en mercado aleman.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
    alt: "Skoda Fabia TDI preparado como subcategoria"
  },
  {
    slug: "octavia",
    brandSlug: "skoda",
    name: "Octavia",
    bodyStyle: "Compacto/Familiar",
    years: "2018-2023",
    summary: "Octavia Combi TDI es de los mejores coches para importar por maletero, consumo y precio.",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
    alt: "Skoda Octavia Combi TDI como familia de modelo"
  }
] as const satisfies readonly CatalogModel[];

const fallbackCatalogVehicles = [
  {
    slug: "polo-life-16-tdi",
    brandSlug: "volkswagen",
    modelSlug: "polo",
    brand: "Volkswagen",
    model: "Polo",
    trim: "Life 1.6 TDI",
    meta: "Urbano diesel",
    year: "2021",
    name: "POLO LIFE 1.6 TDI",
    price: "17.900 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
    alt: "Volkswagen Polo Life 1.6 TDI importado desde Alemania",
    mileage: "84.200 km",
    transmission: "Manual",
    fuel: "Diesel",
    engine: "1.6 TDI",
    power: "95 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei06.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg"
    ],
    basics: [
      ["Exterior color", "Blanco"],
      ["Interior color", "Gris antracita"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.2 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "Manual 5 vel."]
    ],
    features: [
      ["Convenience", "Control de crucero"],
      ["Entertainment", "Apple CarPlay"],
      ["Exterior", "Faros LED"],
      ["Safety", "Sensor trasero"],
      ["Seating", "Asientos comfort"]
    ]
  },
  {
    slug: "polo-r-line-tdi-dsg",
    brandSlug: "volkswagen",
    modelSlug: "polo",
    brand: "Volkswagen",
    model: "Polo",
    trim: "R-Line 2.0 TDI DSG",
    meta: "Urbano sport diesel",
    year: "2022",
    name: "POLO R-LINE 2.0 TDI DSG",
    price: "21.400 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei06.jpg",
    alt: "Volkswagen Polo R-Line TDI DSG de importacion",
    mileage: "61.800 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "150 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei06.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg"
    ],
    basics: [
      ["Exterior color", "Azul metalizado"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.7 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Acceso sin llave"],
      ["Entertainment", "Digital cockpit"],
      ["Exterior", "Paquete R-Line"],
      ["Safety", "Camara trasera"],
      ["Seating", "Asientos deportivos"]
    ]
  },
  {
    slug: "golf-style-20-tdi",
    brandSlug: "volkswagen",
    modelSlug: "golf",
    brand: "Volkswagen",
    model: "Golf",
    trim: "Style 2.0 TDI",
    meta: "Compacto diesel",
    year: "2021",
    name: "GOLF STYLE 2.0 TDI",
    price: "24.900 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
    alt: "Volkswagen Golf Style 2.0 TDI",
    mileage: "72.500 km",
    transmission: "Manual",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "115 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg"
    ],
    basics: [
      ["Exterior color", "Negro"],
      ["Interior color", "Negro/tela"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.5 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "Manual 6 vel."]
    ],
    features: [
      ["Convenience", "ACC"],
      ["Entertainment", "Navegacion"],
      ["Exterior", "Llantas 17"],
      ["Safety", "Lane assist"],
      ["Seating", "Calefaccion delantera"]
    ]
  },
  {
    slug: "golf-gtd-dsg",
    brandSlug: "volkswagen",
    modelSlug: "golf",
    brand: "Volkswagen",
    model: "Golf",
    trim: "GTD 2.0 TDI DSG",
    meta: "Compacto sport diesel",
    year: "2022",
    name: "GOLF GTD 2.0 TDI DSG",
    price: "31.800 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
    alt: "Volkswagen Golf GTD 2.0 TDI DSG",
    mileage: "48.300 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "200 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg"
    ],
    basics: [
      ["Exterior color", "Rojo"],
      ["Interior color", "Negro/cuadros"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "5.0 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Adaptive chassis"],
      ["Entertainment", "Virtual cockpit"],
      ["Exterior", "Paquete GTD"],
      ["Safety", "Front assist"],
      ["Seating", "Asientos deportivos"]
    ]
  },
  {
    slug: "passat-variant-business-tdi",
    brandSlug: "volkswagen",
    modelSlug: "passat",
    brand: "Volkswagen",
    model: "Passat",
    trim: "Variant Business 2.0 TDI",
    meta: "Familiar diesel",
    year: "2020",
    name: "PASSAT VARIANT BUSINESS 2.0 TDI",
    price: "23.600 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
    alt: "Volkswagen Passat Variant Business 2.0 TDI",
    mileage: "96.700 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "150 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg"
    ],
    basics: [
      ["Exterior color", "Plata"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.9 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Porton electrico"],
      ["Entertainment", "Navegacion"],
      ["Exterior", "Barras de techo"],
      ["Safety", "Travel assist"],
      ["Seating", "Asientos ergoComfort"]
    ]
  },
  {
    slug: "ibiza-style-16-tdi",
    brandSlug: "seat",
    modelSlug: "ibiza",
    brand: "SEAT",
    model: "Ibiza",
    trim: "Style 1.6 TDI",
    meta: "Urbano diesel",
    year: "2021",
    name: "IBIZA STYLE 1.6 TDI",
    price: "16.500 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
    alt: "SEAT Ibiza Style 1.6 TDI",
    mileage: "78.400 km",
    transmission: "Manual",
    fuel: "Diesel",
    engine: "1.6 TDI",
    power: "95 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei06.jpg"
    ],
    basics: [
      ["Exterior color", "Gris"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.3 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "Manual 5 vel."]
    ],
    features: [
      ["Convenience", "Sensor lluvia"],
      ["Entertainment", "Android Auto"],
      ["Exterior", "Llantas 16"],
      ["Safety", "Detector fatiga"],
      ["Seating", "Tapiceria mixta"]
    ]
  },
  {
    slug: "leon-fr-20-tdi-dsg",
    brandSlug: "seat",
    modelSlug: "leon",
    brand: "SEAT",
    model: "Leon",
    trim: "FR 2.0 TDI DSG",
    meta: "Compacto diesel",
    year: "2022",
    name: "LEON FR 2.0 TDI DSG",
    price: "27.400 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
    alt: "SEAT Leon FR 2.0 TDI DSG",
    mileage: "52.900 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "150 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg"
    ],
    basics: [
      ["Exterior color", "Rojo oscuro"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.8 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Keyless"],
      ["Entertainment", "Pantalla 10 pulgadas"],
      ["Exterior", "Kit FR"],
      ["Safety", "Control angulo muerto"],
      ["Seating", "Asientos deportivos"]
    ]
  },
  {
    slug: "leon-style-16-tdi",
    brandSlug: "seat",
    modelSlug: "leon",
    brand: "SEAT",
    model: "Leon",
    trim: "Style 1.6 TDI",
    meta: "Compacto diesel",
    year: "2021",
    name: "LEON STYLE 1.6 TDI",
    price: "21.900 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
    alt: "SEAT Leon Style 1.6 TDI",
    mileage: "88.100 km",
    transmission: "Manual",
    fuel: "Diesel",
    engine: "1.6 TDI",
    power: "115 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg"
    ],
    basics: [
      ["Exterior color", "Negro"],
      ["Interior color", "Gris"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.4 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "Manual 6 vel."]
    ],
    features: [
      ["Convenience", "ACC"],
      ["Entertainment", "Apple CarPlay"],
      ["Exterior", "Faros Full LED"],
      ["Safety", "Lane assist"],
      ["Seating", "Asientos comfort"]
    ]
  },
  {
    slug: "a3-sportback-20-tdi",
    brandSlug: "audi",
    modelSlug: "a3",
    brand: "Audi",
    model: "A3",
    trim: "Sportback 35 TDI",
    meta: "Compacto premium diesel",
    year: "2022",
    name: "A3 SPORTBACK 35 TDI",
    price: "31.900 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
    alt: "Audi A3 Sportback 35 TDI",
    mileage: "58.300 km",
    transmission: "S tronic",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "150 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg"
    ],
    basics: [
      ["Exterior color", "Gris Daytona"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.7 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "S tronic"]
    ],
    features: [
      ["Convenience", "Audi drive select"],
      ["Entertainment", "Virtual cockpit"],
      ["Exterior", "Paquete S line"],
      ["Safety", "Camara trasera"],
      ["Seating", "Asientos deportivos"]
    ]
  },
  {
    slug: "a4-avant-40-tdi-quattro",
    brandSlug: "audi",
    modelSlug: "a4",
    brand: "Audi",
    model: "A4",
    trim: "Avant 40 TDI quattro",
    meta: "Familiar premium diesel",
    year: "2021",
    name: "A4 AVANT 40 TDI QUATTRO",
    price: "36.800 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
    alt: "Audi A4 Avant 40 TDI quattro",
    mileage: "69.400 km",
    transmission: "S tronic",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "204 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg"
    ],
    basics: [
      ["Exterior color", "Azul Navarra"],
      ["Interior color", "Negro cuero"],
      ["Drivetrain", "quattro"],
      ["Consumo mixto", "5.2 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "S tronic"]
    ],
    features: [
      ["Convenience", "Porton electrico"],
      ["Entertainment", "MMI Navegacion Plus"],
      ["Exterior", "Faros Matrix LED"],
      ["Safety", "Audi pre sense"],
      ["Seating", "Asientos electricos"]
    ]
  },
  {
    slug: "fabia-style-16-tdi",
    brandSlug: "skoda",
    modelSlug: "fabia",
    brand: "Skoda",
    model: "Fabia",
    trim: "Style 1.6 TDI",
    meta: "Urbano diesel",
    year: "2020",
    name: "FABIA STYLE 1.6 TDI",
    price: "15.700 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
    alt: "Skoda Fabia Style 1.6 TDI",
    mileage: "92.000 km",
    transmission: "Manual",
    fuel: "Diesel",
    engine: "1.6 TDI",
    power: "95 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei05.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei06.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei09.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg"
    ],
    basics: [
      ["Exterior color", "Blanco"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.1 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "Manual 5 vel."]
    ],
    features: [
      ["Convenience", "Start/Stop"],
      ["Entertainment", "Bluetooth"],
      ["Exterior", "Llantas 15"],
      ["Safety", "Control de presion"],
      ["Seating", "Tapiceria tela"]
    ]
  },
  {
    slug: "octavia-combi-20-tdi",
    brandSlug: "skoda",
    modelSlug: "octavia",
    brand: "Skoda",
    model: "Octavia",
    trim: "Combi 2.0 TDI DSG",
    meta: "Familiar diesel",
    year: "2022",
    name: "OCTAVIA COMBI 2.0 TDI DSG",
    price: "28.600 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
    alt: "Skoda Octavia Combi 2.0 TDI DSG",
    mileage: "54.600 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "150 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei08.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg"
    ],
    basics: [
      ["Exterior color", "Gris plata"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "4.6 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Porton manos libres"],
      ["Entertainment", "Navegacion Columbus"],
      ["Exterior", "Faros LED"],
      ["Safety", "Travel assist"],
      ["Seating", "Asientos calefactados"]
    ]
  },
  {
    slug: "octavia-rs-20-tdi",
    brandSlug: "skoda",
    modelSlug: "octavia",
    brand: "Skoda",
    model: "Octavia",
    trim: "RS 2.0 TDI DSG",
    meta: "Compacto sport diesel",
    year: "2021",
    name: "OCTAVIA RS 2.0 TDI DSG",
    price: "30.900 EUR",
    image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
    alt: "Skoda Octavia RS 2.0 TDI DSG",
    mileage: "63.100 km",
    transmission: "DSG",
    fuel: "Diesel",
    engine: "2.0 TDI",
    power: "200 CV",
    gallery: [
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei011.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei03.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei010.jpg",
      "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohomeei07.jpg"
    ],
    basics: [
      ["Exterior color", "Rojo Velvet"],
      ["Interior color", "Negro"],
      ["Drivetrain", "Delantera"],
      ["Consumo mixto", "5.1 l/100 km"],
      ["Combustible", "Diesel"],
      ["Transmision", "DSG 7"]
    ],
    features: [
      ["Convenience", "Selector de modos"],
      ["Entertainment", "Virtual cockpit"],
      ["Exterior", "Paquete RS"],
      ["Safety", "Camara 360"],
      ["Seating", "Asientos RS"]
    ]
  }
] as const satisfies readonly CatalogVehicle[];

export const catalogBrands: readonly CatalogBrand[] =
  csvCatalogBrands.length > 0 ? csvCatalogBrands : fallbackCatalogBrands;

export const catalogModels: readonly CatalogModel[] =
  csvCatalogModels.length > 0 ? csvCatalogModels : fallbackCatalogModels;

export const catalogVehicles: readonly CatalogVehicle[] =
  csvCatalogVehicles.length > 0 ? csvCatalogVehicles : fallbackCatalogVehicles;

export const catalogPromo = {
  title: "Como trabajamos para encontrar tu VAG diesel en Alemania?",
  buttonLabel: "Ver proceso",
  image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohome029.png",
  backgroundImage: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohome010.png"
} as const;

export const vehicleTypes = [
  { title: "Urbano", image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autolisting01.png" },
  { title: "Compacto", image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autolisting02.png" },
  { title: "Familiar", image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autolisting003.png" },
  { title: "Premium", image: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autolisting04.png" }
] as const;

export const detailHero = {
  title: "Ficha de vehiculo",
  backgroundImage: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohome023.png"
} as const;

export const detailSidebar = {
  title: "Contactar por este vehiculo",
  subtitle: "No se compra online. Te confirmamos disponibilidad, historial y coste final de importacion.",
  submitLabel: "Enviar",
  buttonId: "cta-contacto-vehiculo"
} as const;

export const detailPopularCars = [
  "golf-gtd-dsg",
  "a3-sportback-20-tdi",
  "octavia-combi-20-tdi"
] as const;

export const detailQuestionCard = {
  title: "Tienes preguntas?",
  body:
    "Nuestro equipo revisa la unidad, resuelve dudas mecanicas y te acompana hasta la matriculacion en Espana.",
  buttonLabel: "Contactar asesor"
} as const;

export const getCatalogVehiclePath = (vehicle: Pick<CatalogVehicle, "brandSlug" | "modelSlug" | "slug">) =>
  `/catalogo/${vehicle.brandSlug}/${vehicle.modelSlug}/${vehicle.slug}`;

export const getBrandBySlug = (slug: string) =>
  catalogBrands.find((brand) => brand.slug === slug);

export const getModelsByBrand = (brandSlug: string) =>
  catalogModels.filter((model) => model.brandSlug === brandSlug);

export const getModelBySlugs = (brandSlug: string, modelSlug: string) =>
  catalogModels.find((model) => model.brandSlug === brandSlug && model.slug === modelSlug);

export const getVehiclesByBrand = (brandSlug: string) =>
  catalogVehicles.filter((vehicle) => vehicle.brandSlug === brandSlug);

export const getVehiclesByModel = (brandSlug: string, modelSlug: string) =>
  catalogVehicles.filter((vehicle) => vehicle.brandSlug === brandSlug && vehicle.modelSlug === modelSlug);

export const getCatalogVehicleBySlug = (slug: string) =>
  catalogVehicles.find((vehicle) => vehicle.slug === slug);

export const getCatalogVehicleByPath = (brandSlug: string, modelSlug: string, slug: string) =>
  catalogVehicles.find(
    (vehicle) =>
      vehicle.brandSlug === brandSlug && vehicle.modelSlug === modelSlug && vehicle.slug === slug
  );

export const featuredVehicleSlugs = [
  "golf-gtd-dsg",
  "leon-fr-20-tdi-dsg",
  "a4-avant-40-tdi-quattro",
  "octavia-combi-20-tdi",
  "polo-r-line-tdi-dsg",
  "a3-sportback-20-tdi",
  "passat-variant-business-tdi",
  "ibiza-style-16-tdi"
] as const;

export const featuredVehicles = featuredVehicleSlugs.flatMap((slug) => {
  const vehicle = getCatalogVehicleBySlug(slug);
  return vehicle ? [vehicle] : [];
});

export const getBrandSeoContent = (
  brand: CatalogBrand,
  modelCount: number,
  vehicleCount: number
): SeoContentBlock => ({
  eyebrow: `${brand.name} diesel de importacion`,
  title: `${brand.name}: modelos TDI con mejor encaje para importar desde Alemania`,
  introduction: `${brand.headline} En esta seccion agrupamos ${modelCount} modelos y ${vehicleCount} variantes para que la navegacion sea util al usuario y semantica para buscadores.`,
  paragraphs: [
    `${brand.description} Esto permite atacar busquedas transaccionales e informativas relacionadas con ${brand.name} diesel de segunda mano en Alemania y su importacion a Espana.`,
    `Nuestro enfoque no es vender sin contexto, sino filtrar unidades con historial coherente, equipamiento interesante y margen real para que el coche llegue bien a nivel documental y mecanico.`
  ],
  highlights: [
    `${modelCount} modelos indexables bajo la marca ${brand.name}`,
    `${vehicleCount} fichas listas para generar leads`,
    "Contacto, revision tecnica y presupuesto final antes de reservar"
  ]
});

export const getModelSeoContent = (
  brand: CatalogBrand,
  model: CatalogModel,
  variantCount: number
): SeoContentBlock => ({
  eyebrow: `${brand.name} ${model.name} diesel`,
  title: `${brand.name} ${model.name}: versiones recomendables para importar`,
  introduction: `${model.summary} Hemos preparado ${variantCount} variantes dentro de esta familia para cubrir busquedas de acabado, motor y tipo de cambio sin mezclar modelos distintos en una misma URL.`,
  paragraphs: [
    `La pagina de ${brand.name} ${model.name} esta pensada para captar consultas muy especificas, por ejemplo usuarios que buscan una unidad TDI concreta, con kilometraje razonable y configuracion tipica del mercado aleman.`,
    `Cada vehiculo enlaza a una ficha individual con datos tecnicos y formulario de contacto para validar disponibilidad, mantenimiento, inspeccion previa y coste real de importacion antes de avanzar.`
  ],
  highlights: [
    `${variantCount} variantes publicadas de ${model.name}`,
    `${model.bodyStyle} con anos ${model.years}`,
    "Enlace interno limpio hacia cada unidad concreta"
  ]
});
