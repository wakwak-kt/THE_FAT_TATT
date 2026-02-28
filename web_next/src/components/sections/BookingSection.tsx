"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export default function BookingSection() {
  return (
    <section id="booking" className="booking-section">
      <div className="container">

        <ScrollFadeUp>
          <div className="booking-content booking-content--dm-only">
            <div className="booking-side">
              <div className="booking-card">
                <div className="booking-icon">
                  <i className="ri-instagram-line"></i>
                </div>
                <h3 className="booking-card-title">InstagramのDMで予約</h3>
                <p className="booking-card-description">
                  InstagramのDMでご予約を承っております。
                  <br />
                  問い合わせや相談もお気軽にどうぞ。
                </p>
                <a
                  href="https://instagram.com/the_fat_tatt"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="booking-button"
                >
                  <i className="ri-instagram-line"></i>
                  <span>InstagramでDMを送る</span>
                </a>
                <p className="booking-note">
                  @the_fat_tatt をフォローして最新作品もチェック！
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
