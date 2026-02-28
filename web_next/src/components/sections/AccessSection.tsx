import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export default function AccessSection() {
  return (
    <section id="access" className="access-section">
      <div className="container">

        <ScrollFadeUp>
          <div className="access-content">
            <div className="access-info">
              <h3 className="access-heading">店舗情報</h3>

              <div className="access-items">
                <div className="access-item">
                  <div className="access-icon">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>住所</h4>
                    <p>
                      〒722-0014
                      <br />
                      広島県尾道市三軒屋家町3-26三軒屋アパートメント東館2F
                    </p>
                  </div>
                </div>

                <div className="access-item">
                  <div className="access-icon">
                    <i className="ri-calendar-check-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>営業時間</h4>
                    <p>
                      完全予約制
                      <br />
                      詳細はInstagramのDMでお問い合わせください
                    </p>
                  </div>
                </div>

                <div className="access-item">
                  <div className="access-icon">
                    <a
                      href="https://instagram.com/the_fat_tatt"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </div>
                  <div className="access-detail">
                    <h4>Instagram</h4>
                    <a
                      href="https://instagram.com/the_fat_tatt"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      @the_fat_tatt
                    </a>
                  </div>
                </div>

                <div className="access-item">
                  <div className="access-icon">
                    <i className="ri-file-text-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>note</h4>
                    <a href="#">noteで最新情報をチェック</a>
                  </div>
                </div>
              </div>

              <div className="access-notice">
                <i className="ri-information-line"></i>
                <div>
                  <h4>ご来店の際の注意</h4>
                  <p>
                    完全予約制となっております。事前にInstagramのDMでご予約をお願いいたします。
                  </p>
                </div>
              </div>
            </div>

            <div className="access-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.838957272248!2d133.18930777604328!3d34.405438998997774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551017f4cbbeecd%3A0x570359b4476ea913!2sTHE%20FAT%20TATT!5e0!3m2!1sja!2sjp!4v1768816720326!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="THE FAT TATT 地図"
              ></iframe>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
