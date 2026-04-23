import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface AboutPage {
  title: string;
  subtitle: string;
  mission: string;
  body: string;
}

const ABOUT_FILE = path.join(process.cwd(), "docs/about.md");

export function getAboutPage(): AboutPage {
  const raw = fs.readFileSync(ABOUT_FILE, "utf-8");
  const { data, content } = matter(raw);
  return {
    title: String(data.title ?? "Über uns"),
    subtitle: String(data.subtitle ?? ""),
    mission: String(data.mission ?? ""),
    body: content.trim(),
  };
}
