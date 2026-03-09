import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { catalogBrands, catalogModels, catalogVehicles } from "../data/catalog";
import { siteUrl } from "../data/site";

const staticPages = [
  "/",
  "/sobre-nosotros",
  "/contacto",
  "/catalogo",
  "/blog",
  "/aviso-legal",
  "/politica-privacidad",
  "/politica-cookies"
] as const;

const buildUrlEntry = (path: string) => {
  const cleanPath = path === "/" ? "" : path;
  return `<url><loc>${siteUrl}${cleanPath}</loc></url>`;
};

export const GET: APIRoute = async () => {
  const brandPages = catalogBrands.map((brand) => `/catalogo/${brand.slug}`);
  const modelPages = catalogModels.map((model) => `/catalogo/${model.brandSlug}/${model.slug}`);
  const vehiclePages = catalogVehicles.map(
    (vehicle) => `/catalogo/${vehicle.brandSlug}/${vehicle.modelSlug}/${vehicle.slug}`
  );
  const blogEntries = await getCollection("blog");
  const blogPages = blogEntries.map((entry) => `/blog/${entry.slug}`);

  const urls = [...staticPages, ...brandPages, ...modelPages, ...vehiclePages, ...blogPages];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(buildUrlEntry).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
