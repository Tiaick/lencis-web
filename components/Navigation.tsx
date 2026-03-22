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

const HP = "clamp(40px, 7vw, 120px)";

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
          height: scrolled ? "72px" : "88px",
          background: scrolled ? "rgba(15,13,11,0.97)" : "linear-gradient(to bottom, rgba(15,13,11,0.72), transparent)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: `0 ${HP}`,
          }}
        >
          {/* Brand */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 500, color: "var(--gold)", letterSpacing: "0.22em" }}>
              LENCI&apos;S
            </span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "var(--warm-grey)", textTransform: "uppercase", marginTop: "4px" }}>
              Restaurant · Bar · Event
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 2.5vw, 40px)" }}
            className="hidden xl:flex"
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
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Phone + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a
              href="tel:04088366884"
              className="hidden lg:block"
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}
            >
              040 88366884
            </a>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden"
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: "8px" }}
              aria-label="Menü"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: "1px",
                    width: i === 1 ? (menuOpen ? "24px" : "16px") : "24px",
                    background: "var(--cream)",
                    transition: "all 0.35s ease",
                    transform: menuOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                        : i === 2 ? "translateY(-7px) rotate(-45deg)"
                        : ""
                      : "",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="xl:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(15,13,11,0.99)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `120px ${HP} clamp(40px,8vw,80px)`,
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: pathname === link.href ? "var(--gold)" : "var(--cream)",
                textDecoration: "none",
                padding: "clamp(10px, 2vw, 16px) 0",
                borderBottom: "1px solid rgba(242,237,228,0.05)",
                transition: "color 0.3s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(242,237,228,0.08)" }}>
          <a href="tel:04088366884" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.1rem", color: "var(--gold)", textDecoration: "none" }}>
            040 88366884
          </a>
        </div>
      </div>
    </>
  );
}
