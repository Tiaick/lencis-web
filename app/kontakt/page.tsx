import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt & Reservierung",
  description:
    "Lenci's Restaurant Norderstedt kontaktieren – Reservierungen, Event-Anfragen, Adresse, Öffnungszeiten. Rathausallee 35, 22846 Norderstedt.",
};

const HP = "clamp(40px, 7vw, 120px)";

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--espresso)", padding: `clamp(120px, 14vw, 180px) ${HP} clamp(64px, 8vw, 100px)` }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Kontakt & Reservierung</p>
        <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.1, marginBottom: "20px" }}>
          Wir freuen uns<br />
          <span style={{ color: "var(--gold)" }}>auf Sie.</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, maxWidth: "44ch", lineHeight: 1.8 }}>
          Reservierungen, Event-Anfragen, Seminarräume – sprechen Sie uns direkt an.
        </p>
      </section>

      {/* Contact Grid */}
      <section style={{ background: "var(--espresso)", padding: `clamp(48px, 6vw, 80px) ${HP} clamp(80px, 10vw, 130px)` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(16px, 2vw, 24px)" }}
          className="max-lg:grid-cols-1"
        >
          {/* Phone – primary CTA */}
          <div style={{ background: "var(--espresso-mid)", border: "1px solid var(--gold)", padding: "clamp(32px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ color: "var(--gold)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "12px" }}>Telefon</p>
              <p className="font-display" style={{ fontSize: "1.5rem", color: "var(--cream)", fontWeight: 400, marginBottom: "12px" }}>Für alle Anfragen</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.7, marginBottom: "28px" }}>
                Reservierungen, Event-Anfragen, Fragen zu Seminaren – rufen Sie uns direkt an.
              </p>
              <a href="tel:04088366884" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>040 88366884</a>
            </div>
          </div>

          {/* Address + Hours */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 2vw, 24px)" }}
            className="max-md:grid-cols-1"
          >
            {/* Address */}
            <div style={{ background: "var(--espresso-mid)", border: "1px solid var(--border-gold)", padding: "clamp(28px, 3vw, 40px)" }}>
              <div style={{ color: "var(--gold)", marginBottom: "16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Adresse</p>
              <p className="font-display" style={{ fontSize: "1.3rem", color: "var(--cream)", fontWeight: 400, lineHeight: 1.7, marginBottom: "20px" }}>
                Rathausallee 35<br />22846 Norderstedt
              </p>
              <div style={{ borderTop: "1px solid rgba(242,237,228,0.08)", paddingTop: "16px" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "8px" }}>Parken</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.7 }}>
                  Kostenlose Tiefgarage in der<br />
                  <strong style={{ color: "var(--cream)", fontWeight: 400 }}>Moorbek Passage</strong><br />
                  mit direktem Zugang zum Restaurant
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div style={{ background: "var(--espresso-mid)", border: "1px solid var(--border-gold)", padding: "clamp(28px, 3vw, 40px)" }}>
              <div style={{ color: "var(--gold)", marginBottom: "16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Öffnungszeiten</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { day: "Mo – Do", time: "16:00 – 24:00" },
                  { day: "Fr & Sa", time: "16:00 – 02:00" },
                  { day: "Sonntag", time: "Ruhetag" },
                ].map((item) => (
                  <div key={item.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "12px", borderBottom: "1px solid rgba(242,237,228,0.06)" }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: "var(--warm-grey-light)", fontWeight: 300 }}>{item.day}</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", fontWeight: 400, color: item.day === "Sonntag" ? "var(--warm-grey)" : "var(--gold)" }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Note */}
            <div style={{ background: "var(--espresso-mid)", border: "1px solid var(--border-gold)", padding: "clamp(28px, 3vw, 40px)", gridColumn: "1 / -1" }}
              className="max-md:col-span-1"
            >
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Für Gruppen & Events</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 3vw, 40px)" }}
                className="max-md:grid-cols-1"
              >
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8 }}>
                  Für Gruppen ab <strong style={{ color: "var(--cream)", fontWeight: 500 }}>15 Personen</strong> bieten wir freitags und samstags ausschließlich Menüs an. Bitte kontaktieren Sie uns für individuelle Absprachen.
                </p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8 }}>
                  Für <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Events und Seminare</strong> stehen zwei Veranstaltungsräume bis zu 30 und 60 Personen zur Verfügung. Gerne erstellen wir Ihnen ein individuelles Angebot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ position: "relative", height: "384px", overflow: "hidden", background: "var(--espresso-mid)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.5!2d10.0!3d53.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRathausallee+35%2C+22846+Norderstedt!5e0!3m2!1sde!2sde!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.9)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lenci's Restaurant Norderstedt Standort"
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", border: "1px solid var(--border-gold)" }} />
      </section>

      {/* Quick Links */}
      <section style={{ background: "var(--espresso)", borderTop: "1px solid var(--border-gold)", padding: `clamp(48px, 6vw, 80px) ${HP}` }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link href="/events" className="btn-ghost">Event anfragen</Link>
          <Link href="/seminare" className="btn-ghost">Seminarraum buchen</Link>
          <Link href="/speisekarte" className="btn-ghost">Speisekarte</Link>
          <Link href="/cocktailkarte" className="btn-ghost">Cocktailkarte</Link>
        </div>
      </section>
    </>
  );
}
