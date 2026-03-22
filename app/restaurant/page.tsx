import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Lenci's Restaurant Norderstedt – saisonale Küche, regionale Zutaten, Terrasse am Park.",
};

const HP = "clamp(40px, 7vw, 120px)";

export default function RestaurantPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "75vh", minHeight: "520px", overflow: "hidden" }}>
        <Image src={IMAGES.ambiente} alt="Restaurant Lenci's" fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.35) 60%, rgba(15,13,11,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: `clamp(40px, 8vw, 100px) ${HP}` }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Das Restaurant</p>
          <h1 className="font-display" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1, marginBottom: "20px" }}>
            Immer frisch.<br /><span style={{ color: "var(--gold)" }}>Immer lecker.</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ maxWidth: "760px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Feine Küche & Cocktailbar</p>
          <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}>
            Küche, die man spürt –<br />nicht nur schmeckt.
          </h2>
          <div className="divider-gold-left" style={{ marginBottom: "32px" }} />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.95, maxWidth: "56ch" }}>
            Im Lenci&apos;s ist die Küche keine Kulisse, sondern die Hauptrolle.
            Wir kaufen täglich frisch ein, kochen mit den besten Zutaten der Saison
            und gestalten unsere Karte jede Woche neu – weil gute Küche lebendig bleiben muss.
          </p>
        </div>
      </section>

      {/* Four Values – alternating layout */}
      {[
        {
          img: IMAGES.frischeZutaten,
          label: "Täglich neu",
          title: "Frisch eingekauft",
          text: "Unsere Speisekarte wechselt wöchentlich – denn wir kochen nur mit dem, was gerade wirklich gut ist. Kein aufgewärmter Standard, sondern ehrliche tagesfrische Küche.",
          reverse: false,
          bg: "var(--espresso-mid)",
        },
        {
          img: IMAGES.regional,
          label: "Aus der Region",
          title: "Regionale Zutaten",
          text: "Wir setzen auf Produkte aus der Region. Das bedeutet kürzere Wege, mehr Frische und Geschmack, den man wirklich merkt – und ein gutes Gewissen dazu.",
          reverse: true,
          bg: "var(--espresso)",
        },
        {
          img: IMAGES.essen,
          label: "Für Sie",
          title: "Individuell wie Sie",
          text: "Besondere Ernährungswünsche, Unverträglichkeiten oder ein ganz persönlicher Lieblingswunsch? Sprechen Sie uns an – wir finden gemeinsam das Richtige.",
          reverse: false,
          bg: "var(--espresso-mid)",
        },
        {
          img: IMAGES.bar,
          label: "Das Besondere",
          title: "Cocktails zum Dinner",
          text: "Unsere Cocktailbar ist kein Anhang – sie ist fester Bestandteil Ihres Abends. Der perfekte Aperitif, ein Digestif oder der Cocktail zum Dessert.",
          reverse: true,
          bg: "var(--espresso)",
        },
      ].map((item) => (
        <section key={item.title} style={{ background: item.bg }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }}
            className="max-md:grid-cols-1"
          >
            <div
              style={{ position: "relative", minHeight: "380px", order: item.reverse ? 2 : 1 }}
              className="img-zoom-container max-md:order-1"
            >
              <Image src={item.img} alt={item.title} fill className="object-cover" sizes="50vw" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: `clamp(48px, 7vw, 88px) ${HP}`, order: item.reverse ? 1 : 2 }}
              className="max-md:order-2"
            >
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>{item.label}</p>
              <h3 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "24px" }}>{item.title}</h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, maxWidth: "44ch" }}>{item.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Full-width ambient */}
      <section style={{ position: "relative", height: "clamp(300px, 40vw, 560px)", overflow: "hidden" }}>
        <Image src={IMAGES.gallery[5]} alt="Terrasse am Park" fill className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(15,13,11,0.65)", padding: `0 ${HP}` }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Direkt am Park · Am Bachlauf</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.2 }}>
              Norderstedts schönster<br />Platz zum Genießen.
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--espresso)", padding: `clamp(80px, 10vw, 130px) ${HP}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", maxWidth: "1200px" }}
          className="max-md:grid-cols-1"
        >
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "32px" }}>Wann wir für Sie da sind</p>
            {[
              { day: "Montag – Donnerstag", time: "16:00 – 24:00 Uhr" },
              { day: "Freitag & Samstag", time: "16:00 – 02:00 Uhr" },
              { day: "Sonntag", time: "Ruhetag" },
            ].map((item) => (
              <div key={item.day} style={{ display: "flex", justifyContent: "space-between", padding: "18px 0", borderBottom: "1px solid rgba(242,237,228,0.07)" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", color: "var(--warm-grey-light)", fontWeight: 300 }}>{item.day}</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", color: item.day === "Sonntag" ? "var(--warm-grey)" : "var(--gold)", fontWeight: 400 }}>{item.time}</span>
              </div>
            ))}
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "var(--warm-grey)", fontStyle: "italic", marginTop: "16px" }}>Für Gruppen ab 15 Personen freitags und samstags ausschließlich Menüs.</p>
          </div>
          <div style={{ border: "1px solid var(--border-gold)", padding: "clamp(32px, 4vw, 56px)", background: "var(--espresso-mid)" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Ihr Tisch wartet</p>
            <p className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.3, marginBottom: "20px" }}>
              Reservieren Sie jetzt Ihren Wunschtermin.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, marginBottom: "32px" }}>
              Telefonisch erreichbar während der Öffnungszeiten oder über unser Kontaktformular.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:04088366884" className="btn-primary" style={{ justifyContent: "center" }}>040 88366884</a>
              <Link href="/speisekarte" className="btn-ghost" style={{ justifyContent: "center" }}>Speisekarte ansehen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
