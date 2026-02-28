import type { Metadata } from "next";
import BookingSection from "@/components/sections/BookingSection";

export const metadata: Metadata = {
  title: "ご予約 | THE FAT TATT",
  description:
    "THE FAT TATTのご予約ページ。オーダー・持ち込み・アートドロップの施術予約はInstagramのDMから承っております。",
};

export default function BookingPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">ご予約</h1>
          <p className="page-hero-subtitle">
            Instagram DMからご予約ください
          </p>
        </div>
      </div>
      <BookingSection />
    </main>
  );
}
