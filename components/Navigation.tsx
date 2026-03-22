"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/bar", label: "Bar" },
  { href: "/events", label: "Events" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/cocktailkarte", label: "Cocktails" },
  { href: "/galerie", label: "Galerie" },
  { href: "/seminare", label: "Seminare" },
  { href: "/kontakt", label: "Kontakt" },
];

const HP = "clamp(24px, 6vw, 120px)";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? "64px" : "80px",
          background: scrolled ? "rgba(15,13,11,0.97)" : "linear-gradient(to bottom, rgba(15,13,11,0.72), transparent)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", padding: `0 ${HP}` }}>

          {/* Brand */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1, flexShrink: 0 }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 500, color: "var(--gold)", letterSpacing: "0.22em" }}>
              LENCI&apos;S
            </span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", letterSpacing: "0.28em", color: "var(--warm-grey)", textTransform: "uppercase", marginTop: "3px" }}>
              Restaurant · Bar · Event
            </span>
          </Link>

          {/* Desktop Nav — uses .nav-desktop class (display:none below 1280px) */}
          <nav
            className="nav-desktop"
            style={{ alignItems: "center", gap: "clamp(20px, 2.5vw, 40px)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: pathname === link.href ? "var(--gold)" : "var(--warm-grey-light)",
                  textDecoration: "none",
                  fontWeight: 400,
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: phone + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexShrink: 0 }}>
            {/* Phone — hidden below lg via .nav-phone class */}
            <a
              href="tel:04088366884"
              className="nav-phone"
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "var(--gold)", textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" }}
            >
              040 88366884
            </a>

            {/* Burger — hidden above xl via .nav-burger class */}
            <button
              className="nav-burger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "6px", padding: "8px", alignItems: "flex-end" }}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <span style={{
                display: "block", height: "1px", width: "24px", background: "var(--cream)",
                transition: "all 0.35s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", height: "1px", width: "16px", background: "var(--cream)",
                transition: "all 0.35s ease",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }} />
              <span style={{
                display: "block", height: "1px", width: "24px", background: "var(--cream)",
                transition: "all 0.35s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — uses .nav-mobile-overlay class (display:none above 1280px) */}
      <div
        className="nav-mobile-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(15,13,11,0.99)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
          flexDirection: "column",
          justifyContent: "center",
          padding: `100px ${HP} clamp(40px,8vw,80px)`,
          overflowY: "auto",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: pathname === link.href ? "var(--gold)" : "var(--cream)",
                textDecoration: "none",
                padding: "clamp(10px, 2.5vw, 18px) 0",
                borderBottom: "1px solid rgba(242,237,228,0.05)",
                transition: "color 0.3s",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid rgba(242,237,228,0.08)" }}>
          <a href="tel:04088366884" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.1rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.05em" }}>
            040 88366884
          </a>
        </div>
      </div>
    </>
  );
}
