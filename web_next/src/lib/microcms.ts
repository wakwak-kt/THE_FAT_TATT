import { createClient } from "microcms-js-sdk";
import type { Artwork, Announcement } from "./types";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getArtworks(): Promise<Artwork[]> {
  const res = await client.getList<Artwork>({
    endpoint: "artwork",
    queries: {
      orders: "-createdAt",
    },
  });
  return res.contents;
}

export async function getGalleryArtworks(): Promise<Artwork[]> {
  const res = await client.getList<Artwork>({
    endpoint: "artwork",
    queries: {
      orders: "-createdAt",
    },
  });
  return res.contents;
}

export async function getArtDropArtworks(): Promise<Artwork[]> {
  const res = await client.getList<Artwork>({
    endpoint: "artwork",
    queries: {
      filters: "category[contains]アートドロップ",
      orders: "-createdAt",
    },
  });
  return res.contents;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const res = await client.getList<Announcement>({
    endpoint: "announcement",
    queries: {
      filters: "isPublished[equals]true",
      orders: "-publishDate",
    },
  });
  return res.contents;
}
