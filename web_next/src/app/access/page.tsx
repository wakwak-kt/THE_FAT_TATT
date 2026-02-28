import type { Metadata } from "next";
import AccessSection from "@/components/sections/AccessSection";

export const metadata: Metadata = {
  title: "アクセス | THE FAT TATT",
  description:
    "THE FAT TATTへのアクセス情報。広島県尾道市三軒屋家町3-26三軒屋アパートメント東館2F。完全予約制。",
};

export default function AccessPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">アクセス</h1>
          <p className="page-hero-subtitle">店舗情報とアクセス方法</p>
        </div>
      </div>
      <AccessSection />
    </main>
  );
}
