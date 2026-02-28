import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

const facilities = [
  {
    icon: "ri-calendar-check-line",
    title: "完全予約制",
    description:
      "プライベートな空間で、リラックスして施術を受けていただけます",
    delay: 0,
  },
  {
    icon: "ri-shield-check-line",
    title: "衛生管理",
    description: "使い捨て器具の使用と徹底した消毒で、安全性を最優先",
    delay: 0.1,
  },
  {
    icon: "ri-tools-line",
    title: "最新設備",
    description: "高品質な機材と厳選されたインクで、美しい仕上がりを実現",
    delay: 0.2,
  },
  {
    icon: "ri-heart-pulse-line",
    title: "アフターケア",
    description: "施術後のケア方法を詳しくご説明し、長期的にサポート",
    delay: 0.3,
  },
];

export default function FacilitySection() {
  return (
    <section id="facility" className="facility-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title">安心の環境</h2>
            <p className="section-subtitle">
              初めての方でも安心してご来店いただけます
            </p>
          </div>
        </ScrollFadeUp>

        <div className="facility-grid">
          {facilities.map((item) => (
            <ScrollFadeUp key={item.title} delay={item.delay}>
              <div className="facility-item">
                <div className="facility-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="facility-title">{item.title}</h3>
                <p className="facility-description">{item.description}</p>
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
