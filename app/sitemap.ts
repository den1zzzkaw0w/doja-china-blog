import { articles } from "@/data/articles";

export default function sitemap() {
  const articleUrls = articles.map((article) => ({
    url: `https://doja-china-blog.vercel.app/articles/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://doja-china-blog.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://doja-china-blog.vercel.app/articles",
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}