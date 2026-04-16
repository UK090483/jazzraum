import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Concert {
  id: string;
  title: string;
  artist: string;
  date: Date;
  time: string;
  venue: string;
  description: string;
  image: string;
  price: string;
  lineup?: string[];
  longDescription?: string;
  genre?: string;
  duration?: string;
}

const CONCERTS_DIR = path.join(process.cwd(), "docs/concerts");

export function getAllConcerts(): Concert[] {
  if (!fs.existsSync(CONCERTS_DIR)) return [];

  return fs
    .readdirSync(CONCERTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONCERTS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        id: filename.replace(".md", ""),
        title: String(data.title ?? ""),
        artist: String(data.artist ?? ""),
        date: new Date(String(data.date ?? "")),
        time: String(data.time ?? ""),
        venue: String(data.venue ?? ""),
        description: String(data.description ?? ""),
        image: String(data.image ?? ""),
        price: String(data.price ?? ""),
        lineup: Array.isArray(data.lineup)
          ? data.lineup.map(String)
          : undefined,
        longDescription: content.trim() || undefined,
        genre: data.genre ? String(data.genre) : undefined,
        duration: data.duration ? String(data.duration) : undefined,
      };
    });
}

export function getCurrentConcerts(): Concert[] {
  const now = new Date();
  return getAllConcerts()
    .filter((c) => c.date >= now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function getPastConcerts(): Concert[] {
  const now = new Date();
  return getAllConcerts()
    .filter((c) => c.date < now)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getConcertById(id: string): Concert | undefined {
  return getAllConcerts().find((c) => c.id === id);
}
