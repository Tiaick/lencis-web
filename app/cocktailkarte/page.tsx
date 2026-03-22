import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES, PDFS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cocktailkarte",
  description:
    "Lenci's Cocktailkarte – hausgemachte Cocktails und Getränke in der Cocktailbar Norderstedt.",
};

const sections = [
  {
    category: "Signature Cocktails",
    subtitle: "Unsere Eigenkreationen",
    image: IMAGES.bar,
    items: [
      { name: "Lenci's Sunset", desc: "Aperol, Passionsfrucht, Lemon, Prosecco, frische Minze", price: "12,50" },
      { name: "Norderstedt Negroni", desc: "Gin, hausgemachter Campari-Likör, süßer Wermut, Orange", price: "13,00" },
      { name: "Espresso Passion", desc: "Vodka, Espresso, Passionsfrucht, Vanille-Likör", price: "12,00" },
      { name: "Garden of Eden", desc: "Hendrick's Gin, Gurke, Basilikum, Elderflower, Tonic", price: "13,50" },
      { name: "Dark & Stormy Deluxe", desc: "Dark Rum, hausgemachter Ingwer-Sirup, Lime, Ginger Beer", price: "12,00" },
    ],
  },
  {
    category: "Classic Cocktails",
    subtitle: "Zeitlose Klassiker",
    image: null,
    items: [
      { name: "Aperol Spritz", desc: "Aperol, Prosecco, Soda, Orange", price: "9,50" },
      { name: "Hugo", desc: "Prosecco, Holunderblütensirup, Minze, Limette, Soda", price: "9,00" },
      { name: "Mojito", desc: "Weißer Rum, frische Limette, Minze, Rohrzucker, Soda", price: "11,50" },
      { name: "Old Fashioned", desc: "Bourbon, Angostura Bitters, Rohrzucker, Orange", price: "13,00" },
      { name: "Whisky Sour", desc: "Bourbon, Zitronensaft, Zuckersirup, Eiweiß, Angostura", price: "12,50" },
      { name: "Cosmopolitan", desc: "Vodka Citron, Triple Sec, Cranberry, frische Limette", price: "12,00" },
    ],
  },
  {
    category: "Alkoholfrei",
    subtitle: "Für jeden Abend",
    image: null,
    items: [
      { name: "Virgin Garden", desc: "Gurke, Basilikum, Elderflower, Tonic, Lime", price: "8,50" },
      { name: "Passion Cooler", desc: "Passionsfrucht, Mango, Ingwer, Limette, Ginger Beer", price: "7,50" },
      { name: "Sunset Lemonade", desc: "Frische Zitrone, Erdbeere, Minze, Soda", price: "7,00" },
      { name: "Mocktail Negroni", desc: "Alkoholfreier Gin, Campari-Sirup, süßer Wermut 0%, Orange", price: "9,50" },
    ],
  },
  {
    category: "Longdrinks & Spirits",
    subtitle: "Klassisch & erfrischend",
    image: IMAGES.gallery[10],
    items: [
      { name: "Gin & Tonic", desc: "Premium Gin, Tonic Water, Garnitur nach Wahl", price: "10,50" },
      { name: "Vodka Lemon", desc: "Premium Vodka, frische Zitrone, Soda", price: "9,50" },
      { name: "Rum & Cola", desc: "Havana Club, Cola", price: "9,00" },
      { name: "Whisky & Ginger", desc: "Jameson, Ginger Beer, Lime", price: "10,00" },
    ],
  },
  {
    category: "Weine & Sekt",
    subtitle: "Zum Anstoßen",
    image: null,
    items: [
      { name: "Prosecco", desc: "Glas · Venetien, fruchtig-frisch", price: "7,50" },
      { name: "Roséwein", desc: "Glas · Provence, trocken, fruchtig", price: "7,00" },
      { name: "Rotwein", desc: "Glas · Chianti Classico, vollmundig", price: "7,50" },
      { name: "Weißwein", desc: "Glas · Pinot Grigio, trocken, elegant", price: "7,00" },
    ],
  },
];

export default function CocktailkartePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "75vh", minHeight: "500px" }}>
        <Image src={IMAGES.bar} alt="Cocktailkarte Lenci's" fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,13,11,0.75)" }} />
        {/* Warm amber glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(201,100,20,0.09), transparent)" }} />

        <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: "clamp(32px, 6vw, 80px)" }}>
          <p className="font-body" style={{ fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Lenci&apos;s Drinx · Hausgemacht mit Leidenschaft
          </p>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 0.95, marginBottom: "40px" }}
          >
            Cocktail&shy;karte.
          </h1>
          <div className="flex flex-wrap gap-4">
            <a href={PDFS.getraenkekarte} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Als PDF öffnen
            </a>
            <a href="tel:04088366884" className="btn-ghost">
              Tisch reservieren
            </a>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <nav
        className="sticky z-30"
        style={{ top: "80px", background: "rgba(15,13,11,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border-gold)", padding: "18px clamp(24px, 8vw, 140px)" }}
      >
        <div className="flex gap-6 md:gap-10 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {sections.map((s) => (
            <a
              key={s.category}
              href={`#${s.category.toLowerCase().replace(/[\s&]/g, "-")}`}
              className="font-body"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm-grey-light)", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              {s.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Drink Sections */}
      <div style={{ background: "var(--espresso)" }}>
        {sections.map((section, si) => (
          <div key={section.category}>
            {/* Full-width image break */}
            {section.image && si > 0 && (
              <div className="relative" style={{ height: "clamp(180px, 22vw, 320px)" }}>
                <Image src={section.image} alt={section.category} fill className="object-cover" sizes="100vw" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(15,13,11,0.6)" }} />
              </div>
            )}

            <section
              id={section.category.toLowerCase().replace(/[\s&]/g, "-")}
              style={{ padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 140px)" }}
            >
              {/* Section header */}
              <div style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
                <p className="font-body" style={{ fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>
                  {section.subtitle}
                </p>
                <div className="flex items-center gap-8">
                  <h2
                    className="font-display"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--cream)", flexShrink: 0 }}
                  >
                    {section.category}
                  </h2>
                  <div style={{ flex: 1, height: "1px", background: "var(--border-gold)" }} />
                </div>
              </div>

              {/* Items – single column, generous */}
              <div style={{ maxWidth: "780px" }}>
                {section.items.map((item, ii) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "clamp(24px, 6vw, 80px)",
                      paddingTop: ii === 0 ? 0 : "clamp(24px, 3vw, 36px)",
                      paddingBottom: "clamp(24px, 3vw, 36px)",
                      borderBottom: ii < section.items.length - 1 ? "1px solid rgba(242,237,228,0.07)" : "none",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        className="font-body"
                        style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "var(--cream)", fontWeight: 400, marginBottom: "8px" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="font-body"
                        style={{ fontSize: "0.875rem", color: "var(--warm-grey)", fontWeight: 300, fontStyle: "italic" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <p
                      className="font-display"
                      style={{ fontSize: "1.2rem", color: "var(--gold)", fontWeight: 400, flexShrink: 0, paddingTop: "2px" }}
                    >
                      {item.price} €
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section
        style={{
          background: "var(--espresso-mid)",
          borderTop: "1px solid var(--border-gold)",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 140px)",
          textAlign: "center",
        }}
      >
        <p className="font-body" style={{ fontSize: "0.85rem", color: "var(--warm-grey)", fontStyle: "italic", fontWeight: 300, marginBottom: "40px", maxWidth: "60ch", margin: "0 auto 40px" }}>
          Die vollständige Getränkekarte inkl. Biere, Softdrinks und Heißgetränke als PDF.
        </p>
        <a href={PDFS.getraenkekarte} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Vollständige Karte als PDF
        </a>
      </section>
    </>
  );
}
