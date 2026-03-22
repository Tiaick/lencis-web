import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events & Feiern",
  description: "Lenci's Eventlocation Norderstedt – individuelle Feiern, außergewöhnliche Buffets, Räume bis 60 Personen.",
};

const HP = "clamp(40px, 7vw, 120px)";

export default function EventsPage() {
  return (
    <>
      <section style={{ position: "relative", height: "80vh", minHeight: "560px", overflow: "hidden" }}>
        <Image src={IMAGES.buffet} alt="Events Lenci's" fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.93) 0%, rgba(15,13,11,0.4) 60%, rgba(15,13,11,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: `clamp(40px, 8vw, 100px) ${HP}` }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Events & Feiern</p>
          <h1 className="font-display" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1, marginBottom: "28px" }}>
            Ihr Event.<br /><span style={{ color: "var(--gold)" }}>Unser Herzstück.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, maxWidth: "44ch", lineHeight: 1.9, marginBottom: "36px" }}>
            Wir machen Ihre Feier zu einem unvergesslichen Erlebnis – ganz nach Ihren Wünschen.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:04088366884" className="btn-primary">Event anfragen</a>
            <Link href="/kontakt" className="btn-ghost">Kontakt</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ maxWidth: "760px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Für besondere Momente</p>
          <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}>
            Jede Feier ist einmalig –<br />und sollte das auch sein.
          </h2>
          <div className="divider-gold-left" style={{ marginBottom: "32px" }} />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.95, maxWidth: "56ch" }}>
            Im Lenci&apos;s sind Events nicht Standard, sondern Herzensangelegenheit.
            Ob kleiner Geburtstag oder große Betriebsfeier – wir planen gemeinsam mit Ihnen
            und sorgen dafür, dass über Ihren Abend noch lange gesprochen wird.
          </p>
        </div>
      </section>

      {/* Capacities */}
      <section style={{ background: "var(--espresso-mid)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }}
          className="max-md:grid-cols-1"
        >
          <div style={{ position: "relative", minHeight: "400px" }} className="img-zoom-container">
            <Image src={IMAGES.seminar} alt="Eventbereich" fill className="object-cover" sizes="50vw" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: `clamp(48px, 7vw, 88px) ${HP}` }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "32px" }}>Kapazitäten</p>
            <div style={{ display: "flex", gap: "32px", marginBottom: "40px", flexWrap: "wrap" }}>
              {[{ n: "30", label: "Kleiner Raum" }, { n: "60", label: "Großer Raum" }].map((r) => (
                <div key={r.n} style={{ border: "1px solid var(--border-gold)", padding: "28px 36px", textAlign: "center", background: "var(--espresso)" }}>
                  <span className="font-display" style={{ fontSize: "4.5rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1, display: "block" }}>{r.n}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "var(--warm-grey-light)", textTransform: "uppercase", display: "block", marginTop: "8px" }}>Personen</span>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "var(--warm-grey)", fontWeight: 300, marginTop: "12px" }}>{r.label}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, maxWidth: "44ch", marginBottom: "40px" }}>
              Außergewöhnliche Buffets, individuelle Menügestaltung und ein Team, das mit Leidenschaft dabei ist – von der ersten Planung bis zum letzten Gast.
            </p>
            <a href="tel:04088366884" className="btn-primary" style={{ width: "fit-content" }}>Jetzt anfragen</a>
          </div>
        </div>
      </section>

      {/* Types */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Anlässe</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", marginBottom: "clamp(48px, 6vw, 72px)" }}>
          Für jeden Anlass der richtige Rahmen.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(16px, 2vw, 24px)" }}
          className="max-md:grid-cols-1 max-lg:grid-cols-2"
        >
          {[
            { title: "Geburtstage", text: "Von der intimen Runde bis zur großen Party – ganz wie Sie es sich vorstellen." },
            { title: "Firmenveranstaltungen", text: "Teamabende, Jahresfeier, Kundenevents – professionell und persönlich." },
            { title: "Familienfeiern", text: "Kommunion, Jubiläum, Traufeier – Feiern, die zusammenbringen." },
            { title: "Hochzeitsgesellschaften", text: "Ein Rahmen so besonders wie der Anlass – wir unterstützen Ihre Planung." },
            { title: "Gruppenevents", text: "Für Gruppen ab 15 Personen mit individuellen Menüs und Buffet-Lösungen." },
            { title: "Ganz nach Wunsch", text: "Sie haben eine Idee, die nicht in eine Kategorie passt? Genau dafür sind wir da." },
          ].map((item) => (
            <div key={item.title} style={{ border: "1px solid var(--border-gold)", padding: "clamp(28px, 3vw, 40px)", background: "var(--espresso-mid)" }}>
              <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--cream)", marginBottom: "16px" }}>{item.title}</h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--espresso-mid)", padding: `clamp(80px, 10vw, 130px) ${HP}`, textAlign: "center" }}>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", marginBottom: "24px" }}>
          Lassen Sie uns Ihren nächsten besonderen Moment planen.
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, maxWidth: "52ch", margin: "0 auto 40px" }}>
          Wir freuen uns auf Ihre Anfrage. Telefonisch oder per Formular – Ihr Event beginnt mit einem ersten Gespräch.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:04088366884" className="btn-primary">040 88366884</a>
          <Link href="/kontakt" className="btn-ghost">Anfrage senden</Link>
        </div>
      </section>
    </>
  );
}
