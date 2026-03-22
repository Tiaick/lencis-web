import Image from "next/image";
import Link from "next/link";
import { IMAGES, PDFS } from "@/lib/images";

const HP = "clamp(24px, 7vw, 120px)";

export default function Home() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-full" style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        <Image src={IMAGES.bar} alt="Lenci's Norderstedt" fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(15,13,11,0.2) 0%, rgba(15,13,11,0.55) 50%, rgba(15,13,11,0.9) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: `clamp(36px, 8vw, 100px) ${HP}` }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Norderstedt · Restaurant · Bar · Event
          </p>
          <h1 className="font-display" style={{ fontSize: "clamp(3.2rem, 11vw, 9.5rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 1, maxWidth: "14ch", marginBottom: "24px" }}>
            Mit Herz &amp;<br /><em style={{ color: "var(--gold)" }}>Leidenschaft.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", color: "var(--warm-grey-light)", fontWeight: 300, maxWidth: "40ch", lineHeight: 1.9, marginBottom: "36px" }}>
            Restaurant. Cocktailbar. Eventlocation. Drei Erlebniswelten unter einem Dach – für Genuss, der bleibt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="tel:04088366884" className="btn-primary">Tisch reservieren</a>
            <Link href="/speisekarte" className="btn-ghost">Speisekarte</Link>
            <Link href="/events" className="btn-ghost">Event anfragen</Link>
          </div>
        </div>
        <div className="hide-mobile" style={{ position: "absolute", right: HP, bottom: "clamp(32px, 5vw, 60px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", letterSpacing: "0.28em", color: "var(--warm-grey)", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--espresso)", padding: `clamp(64px, 12vw, 160px) ${HP}` }}>
        <div className="grid-intro" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "28px" }}>Das ist Lenci&apos;s</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.08, marginBottom: "clamp(24px, 4vw, 44px)" }}>
              Ein Ort, der mehr ist<br />als ein Restaurant.
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.9rem, 1.15vw, 1.05rem)", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.95, maxWidth: "52ch", marginBottom: "36px" }}>
              Im Lenci&apos;s begegnen sich Küche, Bar und Atmosphäre auf eine Art, die man nicht beschreiben, sondern erleben muss. Täglich frische Zutaten, saisonale Gerichte, hausgemachte Cocktails – und ein Raum, der jeden Abend unvergesslich macht.
            </p>
            <Link href="/restaurant" className="btn-primary">Das Restaurant</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", justifyContent: "flex-end" }}>
            {[
              { label: "Seit 2019", text: "Restaurant & Cocktailbar in Norderstedt" },
              { label: "Täglich frisch", text: "Saisonale Küche, regionale Zutaten" },
              { label: "Ihr Anlass", text: "Events, Seminare & private Feiern" },
            ].map((item) => (
              <div key={item.label} style={{ borderLeft: "1px solid var(--border-gold)", paddingLeft: "24px" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "0.22em", color: "var(--warm-grey)", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</p>
                <p className="font-display" style={{ fontSize: "1.1rem", color: "var(--cream)", fontWeight: 400, lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL: Restaurant ─────────────────────────────────── */}
      <section style={{ background: "var(--espresso-mid)" }}>
        <div className="grid-editorial">
          <div className="editorial-img img-zoom-container" style={{ position: "relative", minHeight: "420px" }}>
            <Image src={IMAGES.ambiente} alt="Restaurant" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div className="editorial-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: `clamp(48px, 8vw, 100px) ${HP}` }}>
            <span className="font-display" style={{ fontSize: "clamp(5rem, 12vw, 10rem)", fontWeight: 300, color: "rgba(201,169,110,0.07)", lineHeight: 1, marginBottom: "-12px", display: "block" }}>01</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "18px" }}>Das Restaurant</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "24px" }}>Frische Küche,<br />die man spürt.</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "36px", maxWidth: "40ch" }}>
              Wöchentlich wechselnde Karte, täglich frisch eingekauft. Mediterrane Einflüsse, regionale Zutaten, Terrasse am Bachlauf.
            </p>
            <Link href="/restaurant" className="btn-primary" style={{ width: "fit-content" }}>Das Restaurant</Link>
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL: Bar (reversed) ─────────────────────────────── */}
      <section style={{ background: "var(--espresso)" }}>
        <div className="grid-editorial">
          <div className="editorial-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: `clamp(48px, 8vw, 100px) ${HP}` }}>
            <span className="font-display" style={{ fontSize: "clamp(5rem, 12vw, 10rem)", fontWeight: 300, color: "rgba(201,169,110,0.07)", lineHeight: 1, marginBottom: "-12px", display: "block" }}>02</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "18px" }}>Die Cocktailbar</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "24px" }}>Drinks mit<br />Leidenschaft.</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "36px", maxWidth: "40ch" }}>
              Hausgemachte Cocktails mit frischen Zutaten und eigenem Sirup – jeder Drink ein Unikat.
            </p>
            <Link href="/bar" className="btn-primary" style={{ width: "fit-content" }}>Die Bar</Link>
          </div>
          <div className="editorial-img img-zoom-container" style={{ position: "relative", minHeight: "420px" }}>
            <Image src={IMAGES.bar} alt="Cocktailbar" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL: Events ─────────────────────────────────────── */}
      <section style={{ background: "var(--espresso-mid)" }}>
        <div className="grid-editorial">
          <div className="editorial-img img-zoom-container" style={{ position: "relative", minHeight: "420px" }}>
            <Image src={IMAGES.buffet} alt="Events" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div className="editorial-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: `clamp(48px, 8vw, 100px) ${HP}` }}>
            <span className="font-display" style={{ fontSize: "clamp(5rem, 12vw, 10rem)", fontWeight: 300, color: "rgba(201,169,110,0.07)", lineHeight: 1, marginBottom: "-12px", display: "block" }}>03</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "18px" }}>Events & Feiern</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: "24px" }}>Ihr Event.<br />Unser Herzstück.</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, marginBottom: "36px", maxWidth: "40ch" }}>
              Individuelle Feiern, außergewöhnliche Buffets, separate Räume bis 60 Personen.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/events" className="btn-primary">Events</Link>
              <Link href="/seminare" className="btn-ghost">Seminare</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATEMENT ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--espresso)", padding: `clamp(64px, 12vw, 160px) ${HP}`, textAlign: "center" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div className="divider-gold" style={{ margin: "0 auto 44px" }} />
          <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.2, marginBottom: "32px" }}>
            &ldquo;Frisch eingekauft.<br /><span style={{ color: "var(--gold)" }}>Jeden Tag.&rdquo;</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.9, maxWidth: "52ch", margin: "0 auto 44px" }}>
            Unsere Speisekarte wechselt jede Woche – weil Qualität bedeutet, nur das Beste anzubieten, was die Saison gerade zu geben hat.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/speisekarte" className="btn-primary">Speisekarte</Link>
            <Link href="/cocktailkarte" className="btn-ghost">Cocktailkarte</Link>
          </div>
        </div>
      </section>

      {/* ─── GALLERY EDITORIAL ─────────────────────────────────────── */}
      <section style={{ background: "var(--espresso-mid)" }}>
        <div className="grid-gallery-2">
          {[0, 3].map((i) => (
            <div key={i} style={{ position: "relative", height: "clamp(240px, 35vw, 520px)" }} className="img-zoom-container">
              <Image src={IMAGES.gallery[i]} alt="Lenci's" fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
            </div>
          ))}
        </div>
        <div className="grid-gallery-text">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--espresso)", padding: `clamp(36px, 6vw, 72px) ${HP}` }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "18px" }}>Eindrücke</p>
            <h3 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2, marginBottom: "18px" }}>Das Lenci&apos;s<br />in Bildern.</h3>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: "var(--warm-grey)", fontWeight: 300, marginBottom: "28px" }}>Fotografie: Frank Barnekow</p>
            <Link href="/galerie" className="btn-ghost" style={{ width: "fit-content" }}>Zur Galerie →</Link>
          </div>
          <div style={{ position: "relative", height: "clamp(280px, 38vw, 540px)" }} className="img-zoom-container">
            <Image src={IMAGES.gallery[6]} alt="Galerie" fill className="object-cover" sizes="(max-width:768px) 100vw, 66vw" />
          </div>
        </div>
        <div className="grid-gallery-3">
          {[1, 4, 7].map((i) => (
            <div key={i} style={{ position: "relative", height: "clamp(140px, 18vw, 260px)" }} className="img-zoom-container">
              <Image src={IMAGES.gallery[i]} alt="Lenci's" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT / HOURS ───────────────────────────────────────── */}
      <section style={{ background: "var(--espresso)", padding: `clamp(64px, 10vw, 140px) ${HP}` }}>
        <div className="grid-contact-3" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "32px" }}>Öffnungszeiten</p>
            {[
              { day: "Mo – Do", time: "16:00 – 24:00" },
              { day: "Fr & Sa", time: "16:00 – 02:00" },
              { day: "Sonntag", time: "Ruhetag" },
            ].map((item) => (
              <div key={item.day} style={{ display: "flex", justifyContent: "space-between", padding: "18px 0", borderBottom: "1px solid rgba(242,237,228,0.07)" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", color: "var(--warm-grey-light)", fontWeight: 300 }}>{item.day}</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", color: item.day === "Sonntag" ? "var(--warm-grey)" : "var(--gold)", fontWeight: 400 }}>{item.time}</span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "32px" }}>Adresse & Parken</p>
            <p className="font-display" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.5, marginBottom: "20px" }}>
              Rathausallee 35<br />22846 Norderstedt
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8 }}>
              Kostenlose Tiefgarage<br />Moorbek Passage · Direktzugang
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "32px" }}>Reservierung</p>
            <p className="font-display" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.4, marginBottom: "20px" }}>
              Sichern Sie sich Ihren Wunschtermin.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "var(--warm-grey-light)", fontWeight: 300, lineHeight: 1.8, marginBottom: "28px" }}>
              Wir freuen uns auf Ihren Anruf oder Ihre Nachricht.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:04088366884" className="btn-primary" style={{ justifyContent: "center", textAlign: "center" }}>040 88366884</a>
              <Link href="/kontakt" className="btn-ghost" style={{ justifyContent: "center", textAlign: "center" }}>Kontakt & Anfrage</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING IMAGE ─────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "clamp(240px, 38vw, 540px)", overflow: "hidden" }}>
        <Image src={IMAGES.gallery[11]} alt="Lenci's Atmosphäre" fill className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(15,13,11,0.65)", padding: `0 ${HP}` }}>
          <p className="font-display" style={{ fontSize: "clamp(1.4rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", textAlign: "center", lineHeight: 1.4 }}>
            &ldquo;Einen Tisch reservieren –&nbsp;<span style={{ color: "var(--gold)" }}>und den Abend uns überlassen.&rdquo;</span>
          </p>
        </div>
      </section>
    </>
  );
}
