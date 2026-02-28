import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-bg">
        <div className="footer-bg-circle footer-bg-circle-1"></div>
        <div className="footer-bg-circle footer-bg-circle-2"></div>
      </div>

      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tagline">
              あなただけのアートを一生の宝物に。
              <br />
              お客様一人ひとりの想いを大切に、
              <br />
              世界に一つだけのタトゥーを創り上げます。
            </p>
            <div className="footer-social">
              <a
                href="https://instagram.com/the_fat_tatt"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="social-link">
                <i className="ri-file-text-line"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>MENU</h3>
              <ul>
                <li>
                  <Link href="/">ホーム</Link>
                </li>
                <li>
                  <Link href="/gallery">ギャラリー</Link>
                </li>
                <li>
                  <Link href="/artdrop">アートドロップ</Link>
                </li>
                <li>
                  <Link href="/pricing">料金</Link>
                </li>
                <li>
                  <Link href="/news">お知らせ</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>CONTACT</h3>
              <ul>
                <li>
                  <Link href="/booking">ご予約</Link>
                </li>
                <li>
                  <a
                    href="https://instagram.com/the_fat_tatt"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Instagram DM
                  </a>
                </li>
                <li>
                  <Link href="/access">アクセス</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 THE FAT TATT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
