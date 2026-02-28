"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/artdrop", label: "アートドロップ" },
  { href: "/pricing", label: "料金" },
  { href: "/news", label: "お知らせ" },
  { href: "/access", label: "アクセス" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHome = pathname === "/";

  return (
    <header className={`header ${isScrolled || !isHome ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <Link href="/" className="header-logo">
          <Image
            src="/images/the_fat_tatt_logo.png"
            alt="THE FAT TATT"
            width={120}
            height={48}
          />
        </Link>

        <nav className="header-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-nav-link ${pathname === link.href ? "header-nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/booking" className="header-cta">
          <i className="ri-calendar-check-line"></i>
          ご予約
        </Link>

        <button
          className={`header-menu-btn ${isMenuOpen ? "header-menu-btn--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`header-drawer ${isMenuOpen ? "header-drawer--open" : ""}`}
      >
        <nav className="header-drawer-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-drawer-link ${pathname === link.href ? "header-drawer-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="header-drawer-cta">
            <i className="ri-calendar-check-line"></i>
            ご予約はこちら
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="header-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
