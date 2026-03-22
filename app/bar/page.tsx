import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, PDFS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cocktailbar",
  description:
    "Die Cocktailbar im Lenci's Norderstedt – hausgemachte Cocktails mit Leidenschaft, elegante Bar-Atmosphäre, stilvolle Abende.",
};

const HP = "clamp(40px, 7vw, 120px)";

export default function BarPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "85vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={IMAGES.bar} alt="Lenci's Cocktailbar Norderstedt" fill priority className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.98) 0%, rgba(15,13,11,0.5) 55%, rgba(15,13,11,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(201,100,20,0.06), transparent)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, padding: `clamp(40px, 8vw, 100px) ${HP}` }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "24px" }}>Die Cocktailbar</p>
          <h1 className="font-display" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.05, marginBottom: "24px" }}>
            Drinks mit<br />
            <span style={{ color: "var(--gold)" }}>Leidenschaft.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, maxWidth: "44ch", marginBottom: "40px" }}>
            Hausgemachte Cocktails, die man so schnell nicht vergisst. Kreiert mit Hingabe, serviert mit Stil.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/cocktailkarte" className="btn-primary">Cocktailkarte ansehen</Link>
            <a href="tel:04088366884" className="btn-ghost">Tisch reservieren</a>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "clamp(48px, 6vw, 88px)", alignItems: "center" }}
          className="max-lg:grid-cols-1"
        >
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "24px" }}>Unsere Philosophie</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}>
              Jeder Drink<br />ein Unikat.
            </h2>
            <div className="divider-gold-left" style={{ marginBottom: "32px" }} />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "20px" }}>
              An der Lenci&apos;s Bar entstehen keine Massenware-Cocktails. Hier wird jeder Drink einzeln und mit echter Sorgfalt zubereitet – mit frischen Zutaten, eigenem Sirup und der Freude daran, Sie zu überraschen.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9 }}>
              Ob klassischer Negroni, fruchtiger Signature-Drink oder ganz nach Ihrem Geschmack – sprechen Sie unsere Barkeeper einfach an.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div className="img-zoom-container" style={{ gridColumn: "1 / -1" }}>
              <Image src={IMAGES.gallery[7]} alt="Cocktail Bar Lenci's" width={800} height={400} className="w-full object-cover" style={{ height: "320px" }} />
            </div>
            <div className="img-zoom-container">
              <Image src={IMAGES.gallery[2]} alt="Lenci's Bar Atmosphäre" width={400} height={300} className="w-full object-cover" style={{ height: "200px" }} />
            </div>
            <div className="img-zoom-container">
              <Image src={IMAGES.gallery[9]} alt="Cocktail Detail" width={400} height={300} className="w-full object-cover" style={{ height: "200px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bar Qualities */}
      <section style={{ background: "var(--espresso-mid)", borderTop: "1px solid var(--border-gold)", padding: `clamp(64px, 8vw, 100px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-gold)" }}
          className="max-md:grid-cols-1"
        >
          {[
            {
              label: "Handcraft",
              title: "Hausgemacht",
              text: "Unsere Sirupe, Infusionen und Mixes entstehen im Haus. Das macht den Unterschied – und den Geschmack.",
            },
            {
              label: "Geduld & Präzision",
              title: "Mit Zeit gemacht",
              text: "Gute Cocktails brauchen Zeit. Wir nehmen sie uns – für jede Bestellung, jeden Gast, jeden Moment.",
            },
            {
              label: "Mit Leidenschaft",
              title: "Aus Überzeugung",
              text: "Jeder Cocktail ist eine persönliche Empfehlung – keine Karte, die abgearbeitet wird, sondern echtes Gastgebertum.",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "var(--espresso)", padding: "clamp(32px, 4vw, 48px)" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>{item.label}</p>
              <h3 className="font-display" style={{ fontSize: "1.6rem", color: "var(--cream)", fontWeight: 400, marginBottom: "16px" }}>{item.title}</h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Width Visual */}
      <section style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <Image src={IMAGES.gallery[11]} alt="Bar Stimmung Lenci's Norderstedt" fill className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(15,13,11,0.72)", padding: `0 ${HP}` }}>
          <p className="font-display" style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", textAlign: "center" }}>
            &ldquo;Die Bar öffnet die Seele<br />
            <span style={{ color: "var(--gold)" }}>des Abends.&rdquo;</span>
          </p>
        </div>
      </section>

      {/* Cocktailkarte CTA */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}`, textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Lenci&apos;s Drinx</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "24px" }}>
          Die Cocktailkarte<br />
          <em style={{ color: "var(--gold)" }}>wartet auf Sie.</em>
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, maxWidth: "52ch", margin: "0 auto 40px" }}>
          Von klassischen Longdrinks bis zu unseren hauseigenen Signature-Drinks – entdecken Sie, was die Nacht besonders macht.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/cocktailkarte" className="btn-primary">Cocktailkarte ansehen</Link>
          <a href={PDFS.getraenkekarte} target="_blank" rel="noopener noreferrer" className="btn-ghost">Als PDF öffnen</a>
        </div>
      </section>
    </>
  );
}
