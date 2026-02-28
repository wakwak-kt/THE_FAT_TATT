import type { Metadata } from "next";
import { Poppins, Outfit, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE FAT TATT - タトゥースタジオ | 広島県尾道市",
  description:
    "THE FAT TATTは広島県尾道市を拠点とするタトゥースタジオです。完全予約制で一生残るアートを創り上げます。",
  keywords:
    "タトゥースタジオ,尾道,カスタムデザイン,カラー,細密タトゥー,THE FAT TATT",
  openGraph: {
    title: "THE FAT TATT",
    description:
      "唯一無二のアートを、あなたの肌に。ニュースクールスタイルのタトゥースタジオです。",
    type: "website",
    url: "https://thefattatt.com/",
    images: ["https://thefattatt.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE FAT TATT",
    description:
      "唯一無二のアートを、あなたの肌に。ニュースクールスタイルのタトゥースタジオです。",
  },
  alternates: {
    canonical: "https://thefattatt.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${poppins.variable} ${outfit.variable} ${notoSansJP.variable}`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
