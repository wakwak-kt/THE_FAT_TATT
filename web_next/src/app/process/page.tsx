import type { Metadata } from "next";
import ProcessSection from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "施術の流れ | THE FAT TATT",
  description:
    "THE FAT TATTの3つのデザインパターン（オーダー・持ち込み・アートドロップ）と施術の流れをご紹介。初めての方でも安心してご利用いただけます。",
};

export default function ProcessPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">施術の流れ</h1>
          <p className="page-hero-subtitle">
            デザインパターンと施術プロセスのご案内
          </p>
        </div>
      </div>
      <ProcessSection />
    </main>
  );
}
