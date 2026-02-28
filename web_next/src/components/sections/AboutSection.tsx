import Image from "next/image";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title">THE FAT TATTについて</h2>
            <p className="section-subtitle">
              一生残るアートだからこそ、妥協しない。
              <br />
              お客様の想いを形にするため、デザインから施術まで一貫してこだわり抜きます。
            </p>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="about-content">
            <div className="about-image-wrapper">
              <Image
                src="/images/nakamura_design.jpg"
                alt="スタジオ内観"
                width={600}
                height={500}
                className="about-image"
                priority
              />
            </div>

            <div className="about-text">
              <div>
                <div className="concept-badge">コンセプト</div>
                <h3 className="about-heading">世界に一つだけのアートを</h3>
                <p className="about-description">
                  THE FAT
                  TATTは、広島県尾道市を拠点とするニュースクールタトゥースタジオです。THE
                  FAT
                  TATTでは、タトゥーを単なる装飾ではなく、お客様の人生の一部となる芸術作品として捉えています。
                </p>
              </div>

              <div className="about-features">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <h4 className="feature-title">安全性</h4>
                  <p className="feature-text">
                    使い捨て器具の使用と徹底した衛生管理
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="ri-palette-line"></i>
                  </div>
                  <h4 className="feature-title">芸術性</h4>
                  <p className="feature-text">
                    高い技術力と豊富な経験による美しい仕上がり
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
