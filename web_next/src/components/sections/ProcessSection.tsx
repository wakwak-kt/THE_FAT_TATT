import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

const patterns = [
  {
    icon: "ri-pencil-ruler-2-line",
    title: "オーダー",
    description:
      "お客様の欲しいモチーフをお伝えいただき、アーティストがオリジナルデザインとして描き起こします",
    features: ["完全オリジナル", "世界に一つだけ", "じっくり相談"],
    delay: 0,
  },
  {
    icon: "ri-image-add-line",
    title: "持ち込み",
    description:
      "「このタトゥーを彫りたい」というデザインをお持ちください。ご希望のデザインを忠実に再現します",
    features: ["お気に入りデザイン", "参考画像OK", "細部まで相談"],
    delay: 0.1,
  },
  {
    icon: "ri-gallery-line",
    title: "アートドロップ",
    description:
      "アーティストが事前に描いたデザインの中からお選びいただけます。比較的リーズナブルな価格設定です",
    features: ["既存デザイン", "リーズナブル", "すぐ施術可能"],
    delay: 0.2,
  },
];

const steps = [
  {
    number: "01",
    icon: "ri-calendar-check-line",
    title: "ご予約",
    description:
      "InstagramのDMにてご希望の日時とデザインのイメージをお伝えください",
    delay: 0,
  },
  {
    number: "02",
    icon: "ri-discuss-line",
    title: "カウンセリング",
    description:
      "デザイン、サイズ、配置などを詳しくご相談。不安な点も遠慮なくお聞きください",
    delay: 0.1,
  },
  {
    number: "03",
    icon: "ri-checkbox-circle-line",
    title: "デザイン確定",
    description:
      "ご納得いただけるまでデザインを調整。完全に満足してから施術に進みます",
    delay: 0.2,
  },
  {
    number: "04",
    icon: "ri-hand-heart-line",
    title: "施術",
    description:
      "衛生管理を徹底した環境で、丁寧に施術を行います。痛みへの配慮も万全です",
    delay: 0.3,
  },
  {
    number: "05",
    icon: "ri-heart-pulse-line",
    title: "アフターケア",
    description:
      "施術後のケア方法を詳しくご説明。不安なことがあればいつでもご相談ください",
    delay: 0.4,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title-dark">3つのデザインパターン</h2>
            <p className="section-subtitle-dark">
              お客様のニーズに合わせた施術方法をご用意しています
            </p>
          </div>
        </ScrollFadeUp>

        <div className="patterns-grid">
          {patterns.map((pattern) => (
            <ScrollFadeUp key={pattern.title} delay={pattern.delay}>
              <div className="pattern-card">
                <div className="pattern-icon">
                  <i className={pattern.icon}></i>
                </div>
                <h3 className="pattern-title">{pattern.title}</h3>
                <p className="pattern-description">{pattern.description}</p>
                <div className="pattern-features">
                  {pattern.features.map((feature) => (
                    <div key={feature} className="pattern-feature">
                      <i className="ri-check-line"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeUp>
          ))}
        </div>

        <ScrollFadeUp>
          <div className="section-header" style={{ marginTop: "8rem" }}>
            <h2 className="section-title-dark">施術の流れ</h2>
            <p className="section-subtitle-dark">
              初めての方でも安心してご利用いただけます
            </p>
          </div>
        </ScrollFadeUp>

        <div className="steps-container">
          <div className="steps-line"></div>
          <div className="steps-grid">
            {steps.map((step) => (
              <ScrollFadeUp key={step.number} delay={step.delay}>
                <div className="step-card">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>

        <ScrollFadeUp>
          <a
            href="https://instagram.com/the_fat_tatt"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="process-note"
          >
            <i className="ri-instagram-line"></i>
            ご不明な点がございましたら、お気軽にInstagramのDMでお問い合わせください
          </a>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
