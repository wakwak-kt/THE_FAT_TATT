import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export const metadata: Metadata = {
  title: "料金 | THE FAT TATT",
  description:
    "THE FAT TATTの料金表。ワンポイントから大型デザインまで、サイズ別の参考価格をご案内します。",
};

const PRICE_LIST = [
  {
    label: "One Point",
    size: "〜5cm",
    price: "¥10,000〜",
    icon: "ri-drop-line",
  },
  {
    label: "名刺サイズ",
    size: "〜10cm",
    price: "¥17,000〜",
    icon: "ri-rectangle-line",
  },
  {
    label: "はがきサイズ",
    size: "〜15cm",
    price: "¥28,000〜",
    icon: "ri-image-line",
  },
  {
    label: "それ以上のサイズ",
    size: "15cm〜",
    price: "¥10,000 / 1h",
    icon: "ri-fullscreen-line",
  },
];

export default function PricingPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">料金</h1>
          <p className="page-hero-subtitle">サイズ別の参考価格のご案内</p>
        </div>
      </div>

      <section className="pricing-section">
        <div className="container">
          <ScrollFadeUp>
            <div className="pricing-grid">
              {PRICE_LIST.map((item) => (
                <div key={item.label} className="pricing-card">
                  <div className="pricing-card-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="pricing-card-label">{item.label}</h3>
                  <p className="pricing-card-size">{item.size}</p>
                  <p className="pricing-card-price">{item.price}</p>
                </div>
              ))}
            </div>
          </ScrollFadeUp>

          <ScrollFadeUp>
            <div className="pricing-artdrop">
              <div className="pricing-artdrop-icon">
                <i className="ri-gallery-line"></i>
              </div>
              <div className="pricing-artdrop-info">
                <h3 className="pricing-artdrop-title">Art Drop</h3>
                <p className="pricing-artdrop-description">
                  アーティストが描き下ろしたデザインは固定価格で施術いただけます。
                  詳しくはアートドロップページをご覧ください。
                </p>
              </div>
              <Link href="/artdrop" className="pricing-artdrop-link">
                アートドロップを見る
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </ScrollFadeUp>

          <ScrollFadeUp>
            <div className="pricing-notice">
              <i className="ri-information-line"></i>
              <div>
                <h4>料金について</h4>
                <p>
                  上記の価格はすべて参考価格です。デザインのサイズ、カラーの有無、作業工数によって変動いたします。
                  正確なお見積もりはカウンセリング時にご案内いたしますので、お気軽にご相談ください。
                </p>
              </div>
            </div>
          </ScrollFadeUp>

          <ScrollFadeUp>
            <div className="gallery-cta">
              <p className="gallery-cta-text">
                まずはお気軽にご相談ください
              </p>
              <Link href="/booking" className="gallery-cta-btn">
                <i className="ri-calendar-check-line"></i>
                ご予約・お問い合わせ
              </Link>
            </div>
          </ScrollFadeUp>
        </div>
      </section>
    </main>
  );
}
