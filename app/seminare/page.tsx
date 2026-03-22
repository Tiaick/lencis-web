import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Seminare & Schulungen",
  description:
    "Seminarräume in Norderstedt im Lenci's – zwei Veranstaltungsräume bis zu 30 und 60 Personen für Workshops, Schulungen und Firmenveranstaltungen.",
};

const HP = "clamp(40px, 7vw, 120px)";

export default function SeminarePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={IMAGES.seminar} alt="Seminarraum Lenci's Norderstedt" fill priority className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.4) 60%, rgba(15,13,11,0.1) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, padding: `clamp(40px, 8vw, 100px) ${HP}` }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Business & Weiterbildung</p>
          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.05, marginBottom: "24px" }}>
            Räume für<br />
            <span style={{ color: "var(--gold)" }}>große Ideen.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, maxWidth: "44ch", marginBottom: "40px" }}>
            Zwei stimmungsvolle Seminarräume in professionellem Ambiente – mit gastronomischer Begleitung, die den Unterschied macht.
          </p>
          <a href="tel:04088366884" className="btn-primary">Raum anfragen</a>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "24px" }}>Seminare & Schulungen</p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}>
            Lernen in einem Raum,<br />in dem man gerne ist.
          </h2>
          <div className="divider-gold" style={{ margin: "0 auto 32px" }} />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.95 }}>
            Wer gute Ergebnisse will, braucht den richtigen Rahmen. Das Lenci&apos;s bietet Ihnen Räume, die professionell und gleichzeitig angenehm sind – kein steriles Konferenzzimmer, sondern eine Atmosphäre, die Kreativität und Konzentration gleichermaßen fördert.
          </p>
        </div>
      </section>

      {/* Two Rooms */}
      <section style={{ background: "var(--espresso-mid)", padding: `clamp(64px, 8vw, 100px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 2vw, 24px)" }}
          className="max-md:grid-cols-1"
        >
          {[
            {
              capacity: "30",
              title: "Kleiner Seminarraum",
              subtitle: "Für intensive Workshops",
              features: [
                "Bis zu 30 Personen",
                "Ideal für Teamworkshops",
                "Schulungen & Trainings",
                "Ruhige, konzentrierte Atmosphäre",
                "Gastronomische Begleitung optional",
              ],
            },
            {
              capacity: "60",
              title: "Großer Seminarraum",
              subtitle: "Für große Veranstaltungen",
              features: [
                "Bis zu 60 Personen",
                "Unternehmensschulungen",
                "Vorträge & Präsentationen",
                "Kombinierbar mit Catering",
                "Flexible Bestuhlung möglich",
              ],
            },
          ].map((room) => (
            <div key={room.title} style={{ background: "var(--espresso)", border: "1px solid var(--border-gold)", padding: "clamp(32px, 4vw, 48px)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "24px" }}>
                <span className="font-display" style={{ fontSize: "5rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{room.capacity}</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: "var(--warm-grey-light)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Personen</span>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "8px" }}>{room.subtitle}</p>
              <h3 className="font-display" style={{ fontSize: "1.6rem", color: "var(--cream)", fontWeight: 400, marginBottom: "24px" }}>{room.title}</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {room.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontSize: "0.7rem" }}>◆</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:04088366884" className="btn-primary" style={{ width: "fit-content" }}>Jetzt anfragen</a>
            </div>
          ))}
        </div>
      </section>

      {/* Catering Note */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 88px)", alignItems: "center" }}
          className="max-lg:grid-cols-1"
        >
          <div className="img-zoom-container">
            <Image src={IMAGES.frischeZutaten} alt="Catering Seminar Lenci's" width={700} height={500} className="w-full object-cover" style={{ height: "440px" }} />
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "24px" }}>Gastronomie inklusive</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}>
              Seminare, bei denen<br />auch die Verpflegung stimmt.
            </h2>
            <div className="divider-gold-left" style={{ marginBottom: "32px" }} />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "20px" }}>
              Ein gutes Seminar beginnt nicht erst mit dem Vortrag. Es beginnt mit einem guten Kaffee, einem aufmerksamen Service und einem Mittagessen, das Energie gibt statt zu nehmen.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "40px" }}>
              Wir bieten individuelle Catering-Pakete für Ihre Veranstaltung – von kleinen Kaffeepausen bis zum mehrgängigen Businesslunch. Alles frisch, saisonal und direkt aus unserer Küche.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:04088366884" className="btn-primary">040 88366884</a>
              <Link href="/kontakt" className="btn-ghost">Anfrage senden</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "var(--espresso-mid)", borderTop: "1px solid var(--border-gold)", padding: `clamp(64px, 8vw, 100px) ${HP}`, textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Seminarraum Norderstedt</p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.1, marginBottom: "24px" }}>
            Ihr nächstes Seminar verdient den richtigen Ort.
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, marginBottom: "40px" }}>
            Sprechen Sie uns an – wir finden gemeinsam die beste Lösung für Ihre Veranstaltung.
          </p>
          <a href="tel:04088366884" className="btn-primary">040 88366884 · Jetzt anfragen</a>
        </div>
      </section>
    </>
  );
}
