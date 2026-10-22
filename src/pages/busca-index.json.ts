
import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const artigos = await getCollection("posts");

  const indice = artigos.map((artigo) => ({
    title: artigo.data.title,
    description: artigo.data.description,
    category: artigo.data.category,
    pubDate: artigo.data.pubDate.toISOString(),
    href: `/posts/${artigo.id}/`,
  }));

  return new Response(JSON.stringify(indice), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
