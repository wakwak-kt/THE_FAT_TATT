import type { Metadata } from "next";
import Link from "next/link";
import { getGalleryArtworks } from "@/lib/microcms";
import type { Artwork } from "@/lib/types";
import ArtDropSection from "@/components/sections/ArtDropSection";

export const metadata: Metadata = {
  title: "ギャラリー | THE FAT TATT",
  description:
    "THE FAT TATTの作品ギャラリー。これまでの施術作品やデザインをご覧いただけます。",
};

export const revalidate = 60;

export default async function GalleryPage() {
  let artworks: Artwork[] = [];

  try {
    artworks = await getGalleryArtworks();
  } catch (e) {
    console.error("gallery artworks error:", e);
  }

  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">ギャラリー</h1>
          <p className="page-hero-subtitle">これまでの作品をご覧ください</p>
        </div>
      </div>
      <ArtDropSection artworks={artworks} showPrice={false} showSoldOut={false} />
    </main>
  );
}
