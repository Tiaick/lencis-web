import Link from "next/link";

const HP = "clamp(40px, 7vw, 120px)";

export default function Footer() {
  return (
    <footer style={{ background: "var(--espresso-mid)", borderTop: "1px solid rgba(201,169,110,0.12)" }}>
      <div style={{ padding: `clamp(64px, 8vw, 100px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(40px, 5vw, 64px)", maxWidth: "1400px", margin: "0 auto" }}
          className="max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {/* Brand */}
          <div>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", display: "block", fontSize: "2rem", fontWeight: 500, color: "var(--gold)", letterSpacing: "0.18em", marginBottom: "4px" }}>
              LENCI&apos;S
            </span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", display: "block", fontSize: "9px", letterSpacing: "0.3em", color: "var(--warm-grey)", textTransform: "uppercase", marginBottom: "24px" }}>
              Restaurant · Bar · Event
            </span>
            <p className="font-display" style={{ fontSize: "1.1rem", color: "var(--warm-grey-light)", fontStyle: "italic", fontWeight: 300, lineHeight: 1.6 }}>
              &ldquo;Mit Herz &amp; Leidenschaft.&rdquo;
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Navigation</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { href: "/restaurant", label: "Restaurant" },
                { href: "/bar", label: "Cocktailbar" },
                { href: "/events", label: "Events & Feiern" },
                { href: "/seminare", label: "Seminare" },
                { href: "/speisekarte", label: "Speisekarte" },
                { href: "/cocktailkarte", label: "Cocktailkarte" },
                { href: "/galerie", label: "Galerie" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.875rem", color: "var(--warm-grey)", textDecoration: "none", fontWeight: 300, transition: "color 0.3s", letterSpacing: "0.03em" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Öffnungszeiten</p>
            {[
              { day: "Mo – Do", time: "16:00 – 24:00 Uhr" },
              { day: "Fr & Sa", time: "16:00 – 02:00 Uhr" },
              { day: "Sonntag", time: "Ruhetag" },
            ].map((item) => (
              <div key={item.day} style={{ marginBottom: "18px" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "var(--warm-grey)", fontWeight: 300, letterSpacing: "0.04em", marginBottom: "4px" }}>{item.day}</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", color: item.day === "Sonntag" ? "var(--warm-grey)" : "var(--cream-light)", fontWeight: 400 }}>{item.time}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Besuchen Sie uns</p>
            <p className="font-display" style={{ fontSize: "1.2rem", fontWeight: 400, color: "var(--cream)", lineHeight: 1.7, marginBottom: "20px" }}>
              Rathausallee 35<br />22846 Norderstedt
            </p>
            <a href="tel:04088366884" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--gold)", textDecoration: "none", display: "block", marginBottom: "20px" }}>
              040 88366884
            </a>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.7, marginBottom: "28px" }}>
              Tiefgarage Moorbek Passage<br />kostenlos & Direktzugang
            </p>
            <Link href="/kontakt" className="btn-primary">Tisch reservieren</Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: `20px ${HP}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", maxWidth: "1400px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "var(--warm-grey)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Lenci&apos;s Restaurant – Bar – Event
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[{ href: "/impressum", label: "Impressum" }, { href: "/datenschutz", label: "Datenschutz" }].map((l) => (
              <Link key={l.href} href={l.href}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "var(--warm-grey)", textDecoration: "none", letterSpacing: "0.06em" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
