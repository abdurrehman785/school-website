import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export const sanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export const client = sanityConfigured
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2025-03-06",
      useCdn: true,
    })
  : null;

const FALLBACK_PREVIEW = "";

export type NewsListItem = {
  _id: string;
  title: string;
  date: string | null;
  image: SanityImageAsset | null;
  preview?: string | null;
};

export type SanityImageAsset = {
  _type?: string;
  asset?: { _ref: string };
  hotspot?: Record<string, unknown>;
  crop?: Record<string, unknown>;
};

export type NewsDetail = {
  _id: string;
  title: string;
  date: string | null;
  image: SanityImageAsset | null;
  content: PortableTextBlock[];
};

export function urlForSanityImage(source: SanityImageAsset | null): string | null {
  if (!client || !source?.asset?._ref) return null;
  return imageUrlBuilder(client).image(source).fit("crop").auto("format").quality(85).url();
}

export function formatNewsDate(iso: string | null | undefined): string {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

export function truncatePreview(text: string | null | undefined, maxLen = 180): string {
  if (!text) return FALLBACK_PREVIEW;
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLen) return normalized;
  return `${normalized.slice(0, maxLen).trim()}…`;
}

const NEWS_LIST_BODY = `_id,
  title,
  date,
  image,
  "preview": pt::text(content)`;

const GROQ_LATEST_NEWS = `*[_type == "news" && defined(title)] | order(coalesce(date, _createdAt) desc) [0...$limit] {
  ${NEWS_LIST_BODY}
}`;

const GROQ_ALL_NEWS_IDS = `*[_type == "news"]._id`;

const GROQ_ALL_NEWS_LISTING = `*[_type == "news" && defined(title)] | order(coalesce(date, _createdAt) desc) {
  ${NEWS_LIST_BODY}
}`;

const GROQ_NEWS_BY_ID = `*[_type == "news" && _id == $id][0] {
  _id,
  title,
  date,
  image,
  content
}`;

export async function getLatestNews(limit: number): Promise<NewsListItem[]> {
  if (!client) return [];
  return client.fetch<NewsListItem[]>(GROQ_LATEST_NEWS, { limit });
}

export async function getNewsForListing(): Promise<NewsListItem[]> {
  if (!client) return [];
  return client.fetch<NewsListItem[]>(GROQ_ALL_NEWS_LISTING);
}

export async function getNewsIds(): Promise<string[]> {
  if (!client) return [];
  return client.fetch<string[]>(GROQ_ALL_NEWS_IDS);
}

export async function getNewsById(id: string): Promise<NewsDetail | null> {
  if (!client) return null;
  return client.fetch<NewsDetail | null>(GROQ_NEWS_BY_ID, { id });
}
