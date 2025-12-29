import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ContentMeta {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  [key: string]: unknown;
}

export interface Content {
  meta: ContentMeta;
  content: string;
}

export function getContent(slug: string): Content {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as ContentMeta,
    content,
  };
}

export function getSiteConfig() {
  const filePath = path.join(contentDirectory, "site.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
