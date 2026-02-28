import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import type { Announcement } from "@/lib/types";

function formatDate(dateStr: string) {
  const parts = dateStr.split("-");
  if (parts.length < 3) return { month: "", day: "" };
  const months = [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月",
  ];
  const monthIndex = parseInt(parts[1], 10) - 1;
  return {
    month: months[monthIndex],
    day: `${parseInt(parts[2], 10)}日`,
  };
}

export default function NewsSection({
  announcements,
}: {
  announcements: Announcement[];
}) {
  return (
    <section id="news" className="news-section">
      <div className="container">

        <ScrollFadeUp>
          {announcements.length > 0 ? (
            <div className="news-list">
              {announcements.map((item) => {
                const date = formatDate(item.publishDate);
                return (
                  <div key={item.id} className="news-card">
                    <div className="news-date-badge">
                      <span className="news-date-month">{date.month}</span>
                      <span className="news-date-day">{date.day}</span>
                    </div>
                    <div className="news-body">
                      <h3 className="news-title">{item.title}</h3>
                      <p className="news-content">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="news-empty">
              <i className="ri-newspaper-line"></i>
              <p>現在お知らせはありません</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
