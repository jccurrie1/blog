import { getAllPosts } from "@/lib/api";
import { Feed } from "feed";

export async function GET() {
  const posts = getAllPosts();
  const siteURL = "https://jaredcurrie.com";
  const date = new Date();
  const author = {
    name: "Jared Currie",
    email: "jccurrie0@gmail.com",
    link: siteURL,
  };

  const feed = new Feed({
    title: "Jared Currie",
    description: "My personal blog.",
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/posts/${post.slug}`,
      link: `${siteURL}/posts/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [author],
      date: new Date(post.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}
