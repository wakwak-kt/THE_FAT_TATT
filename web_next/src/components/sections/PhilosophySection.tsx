import Image from "next/image";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="philosophy-card">
            <div className="philosophy-content">
              <div className="philosophy-text">
                <div className="philosophy-label">tattoo type</div>
                <h2 className="philosophy-title">
                  new school tattoo
                </h2>
                <p className="philosophy-description">
                  ニュースクールタトゥーは、ポップカルチャーやストリートアートの影響を受けた、カラフルで立体感のある現代的なタトゥースタイルです。
                  大胆なアウトライン、鮮やかな色使い、デフォルメされたキャラクター表現が特徴で、まるでイラストやアニメの世界から飛び出してきたようなインパクトがあります。
                  従来のトラディショナルタトゥーとは異なり、自由度が高く、個性を最大限に表現できるスタイルです。
                </p>
                <p className="philosophy-description">
                  THE FAT TATTでは、カウンセリングを通して、あなたの好きな世界観・価値観・ストーリーを丁寧にヒアリングし、あなたの個性に合わせた唯一無二のタトゥーを彫り上げます。
                </p>
              </div>

              <div className="philosophy-image-wrapper">
                <Image
                  src="/images/nakamura_tatt.jpg"
                  alt="デザインスケッチ"
                  width={600}
                  height={400}
                  className="philosophy-image"
                />
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
