import type { Metadata } from "next";
import { getAnnouncements } from "@/lib/microcms";
import type { Announcement } from "@/lib/types";
import NewsSection from "@/components/sections/NewsSection";

export const metadata: Metadata = {
  title: "お知らせ | THE FAT TATT",
  description:
    "THE FAT TATTの最新ニュースとお知らせ。営業情報やイベント情報をお届けします。",
};

export const revalidate = 60;

export default async function NewsPage() {
  let announcements: Announcement[] = [];

  try {
    announcements = await getAnnouncements();
  } catch (e) {
    console.error("announcements error:", e);
  }

  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">お知らせ</h1>
          <p className="page-hero-subtitle">最新のニュースとお知らせ</p>
        </div>
      </div>
      <NewsSection announcements={announcements} />
    </main>
  );
}
