import { getCollection } from "astro:content";
import { siteUrl } from "./site";

export interface BlogPostPreview {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishDate: Date;
  updatedDate?: Date;
  image: string;
  imageAlt: string;
  author: string;
  tags: readonly string[];
  featured: boolean;
  canonical: string;
}

const sortPosts = (a: BlogPostPreview, b: BlogPostPreview) =>
  b.publishDate.getTime() - a.publishDate.getTime();

export const getAllBlogPosts = async (): Promise<BlogPostPreview[]> => {
  const entries = await getCollection("blog");

  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      excerpt: entry.data.excerpt,
      publishDate: entry.data.publishDate,
      updatedDate: entry.data.updatedDate,
      image: entry.data.image,
      imageAlt: entry.data.imageAlt,
      author: entry.data.author,
      tags: entry.data.tags,
      featured: entry.data.featured,
      canonical: entry.data.canonical ?? `${siteUrl}/blog/${entry.slug}`
    }))
    .sort(sortPosts);
};

export const getLatestBlogPosts = async (limit = 3) => {
  const posts = await getAllBlogPosts();
  return posts.slice(0, limit);
};

export const blogSeo = {
  title: "Blog | Importacion de coches diesel Grupo VAG desde Alemania",
  description:
    "Guias SEO sobre importacion de Volkswagen, Audi, SEAT y Skoda diesel desde Alemania, con foco en revision mecanica, documentacion y seleccion de unidades.",
  canonical: `${siteUrl}/blog`
} as const;

export const blogHero = {
  title: "Blog de importacion y compra inteligente",
  backgroundImage: "http://demo2.strongtheme.com/autocar/wp-content/uploads/sites/3/2021/07/autohome023.png"
} as const;
