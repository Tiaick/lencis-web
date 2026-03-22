import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, PDFS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Lenci's Speisekarte – saisonale, frische Küche mit regionalen Zutaten. Wöchentlich wechselnd. Norderstedt.",
};

const menuCategories = [
  {
    category: "Vorspeisen",
    image: IMAGES.frischeZutaten,
    items: [
      { name: "Bruschetta al Pomodoro", desc: "Geröstetes Brot, frische Tomaten, Basilikum, Olivenöl", price: "8,50" },
      { name: "Carpaccio vom Rind", desc: "Hauchdünn aufgeschnitten, Rucola, Parmesan, Kapern", price: "13,90" },
      { name: "Garnelen in Knoblauchbutter", desc: "Frische Kräuter, Ciabatta", price: "14,90" },
      { name: "Burrata fresca", desc: "Heirloom-Tomaten, frisches Basilikum, Aceto balsamico", price: "12,50" },
    ],
  },
  {
    category: "Salate",
    image: null,
    items: [
      { name: "Lenci's Signature Salat", desc: "Blattsalate, Walnüsse, Birne, Blauschimmelkäse, Honig-Senf-Dressing", price: "14,90" },
      { name: "Caesar Salad", desc: "Römersalat, Parmesanspäne, Croûtons, Caesar-Dressing", price: "12,90" },
      { name: "Gegrillter Ziegenkäse", desc: "Rucola, Walnüsse, Feigen, Balsamico-Reduktion", price: "15,50" },
    ],
  },
  {
    category: "Pasta",
    image: IMAGES.essen,
    items: [
      { name: "Spaghetti Aglio e Olio", desc: "Knoblauch, Olivenöl, Chili, Petersilie", price: "13,90" },
      { name: "Tagliatelle al Ragù", desc: "Hausgemachtes Rindfleisch-Ragù, frische Pasta, Parmesan", price: "17,90" },
      { name: "Linguine ai Frutti di Mare", desc: "Meeresfrüchte, Weißwein, Knoblauch, Chili, Tomaten", price: "21,90" },
      { name: "Penne all'Arrabbiata", desc: "Pikante Tomatensauce, Knoblauch, Chili, frisches Basilikum", price: "13,50" },
    ],
  },
  {
    category: "Pizza",
    image: null,
    items: [
      { name: "Margherita", desc: "Tomatensauce, Mozzarella fior di latte, Basilikum", price: "12,50" },
      { name: "Diavola", desc: "Tomatensauce, Mozzarella, scharfe Salami, Chili", price: "14,90" },
      { name: "Tartufo", desc: "Trüffelcreme, Mozzarella, Champignons, Parmesan", price: "17,90" },
      { name: "Prosciutto & Rucola", desc: "Tomatensauce, Mozzarella, Parmaschinken, Rucola", price: "16,50" },
    ],
  },
  {
    category: "Burger",
    image: null,
    items: [
      { name: "Lenci's Classic", desc: "200g Angus-Beef-Patty, Cheddar, Salat, Tomate, Zwiebeln, hausgemachte Sauce", price: "16,90" },
      { name: "Mushroom Burger", desc: "Portobello, Ziegenfrischkäse, Rucola, Trüffelmayonnaise", price: "15,90" },
      { name: "BBQ Bacon Burger", desc: "200g Beef-Patty, knuspriger Bacon, BBQ-Sauce, Cheddar, Pickles", price: "17,90" },
    ],
  },
  {
    category: "Fleisch",
    image: IMAGES.regional,
    items: [
      { name: "Entrecôte (200g)", desc: "Gegrilltes Rinderkotelett, Café de Paris Butter, Thymian-Jus, saisonales Gemüse", price: "28,90" },
      { name: "Hähnchenbrust provenzalisch", desc: "Ratatouille-Gemüse, Kräutersauce, Risotto", price: "22,90" },
      { name: "Lammkotelett", desc: "Kräuterkruste, Rosmarin-Jus, Grillgemüse, Polenta", price: "29,90" },
    ],
  },
  {
    category: "Fisch",
    image: null,
    items: [
      { name: "Lachs auf Blattspinat", desc: "Aus dem Ofen, Dillsauce, Kartoffelpüree", price: "24,90" },
      { name: "Dorade royal", desc: "Ganz gebraten, Oliven, Kapern, Tomaten, Limetten-Butter", price: "27,90" },
      { name: "Garnelen-Risotto", desc: "Mediterrane Garnelen, Weißwein-Safran-Risotto, Parmesan", price: "23,90" },
    ],
  },
  {
    category: "Desserts",
    image: null,
    items: [
      { name: "Tiramisu classico", desc: "Hausgemacht, Mascarpone, Espresso, Amaretto", price: "7,50" },
      { name: "Panna Cotta", desc: "Vanille, Beerenkompott der Saison", price: "7,00" },
      { name: "Schokoladensoufflé", desc: "Flüssiger Kern, Vanilleeis, Schlagsahne", price: "9,50" },
      { name: "Käseauswahl", desc: "Drei europäische Käsesorten, Feigensenf, Walnussbrot", price: "13,90" },
    ],
  },
];

export default function SpeisekartePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "60vh", minHeight: "400px" }}>
        <Image src={IMAGES.essen} alt="Speisekarte Lenci's" fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.95) 0%, rgba(15,13,11,0.4) 60%, rgba(15,13,11,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(32px, 6vw, 80px)" }}>
          <p className="font-body" style={{ fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Täglich frisch · Wöchentlich wechselnd
          </p>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 300, color: "var(--cream)", fontStyle: "italic", lineHeight: 1, marginBottom: "28px" }}
          >
            Speisekarte
          </h1>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={PDFS.speisekarte} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Als PDF öffnen
            </a>
            <a href="tel:04088366884" className="btn-ghost">
              Reservieren
            </a>
          </div>
        </div>
      </section>

      {/* Notice */}
      <div style={{ background: "var(--espresso-mid)", borderBottom: "1px solid var(--border-gold)", padding: "20px clamp(24px, 8vw, 140px)" }}>
        <p className="font-body" style={{ fontSize: "0.8rem", color: "var(--warm-grey)", fontStyle: "italic", fontWeight: 300 }}>
          Unsere Karte wechselt wöchentlich. Diese Auswahl ist repräsentativ – die aktuelle Karte erhalten Sie vor Ort oder als PDF.
        </p>
      </div>

      {/* Sticky category nav */}
      <nav
        className="sticky z-30"
        style={{ top: "80px", background: "rgba(15,13,11,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border-gold)", padding: "18px clamp(24px, 8vw, 140px)" }}
      >
        <div className="flex gap-6 md:gap-10 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {menuCategories.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase()}`}
              className="font-body"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm-grey-light)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.3s" }}
            >
              {cat.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu – single column, Michelin style */}
      <div style={{ background: "var(--espresso)" }}>
        {menuCategories.map((cat, ci) => (
          <div key={cat.category}>
            {/* Optional image break between categories */}
            {cat.image && ci > 0 && (
              <div className="relative" style={{ height: "clamp(200px, 25vw, 360px)" }}>
                <Image src={cat.image} alt={cat.category} fill className="object-cover" sizes="100vw" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(15,13,11,0.55)" }} />
              </div>
            )}

            <section
              id={cat.category.toLowerCase()}
              style={{ padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 140px)" }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-8 mb-16">
                <h2
                  className="font-display"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--cream)", flexShrink: 0 }}
                >
                  {cat.category}
                </h2>
                <div style={{ flex: 1, height: "1px", background: "var(--border-gold)" }} />
              </div>

              {/* Items – 1 column, generous spacing */}
              <div style={{ maxWidth: "780px" }}>
                {cat.items.map((item, ii) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "clamp(24px, 6vw, 80px)",
                      paddingTop: ii === 0 ? 0 : "clamp(24px, 3vw, 36px)",
                      paddingBottom: "clamp(24px, 3vw, 36px)",
                      borderBottom: ii < cat.items.length - 1 ? "1px solid rgba(242,237,228,0.07)" : "none",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        className="font-body"
                        style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "var(--cream)", fontWeight: 400, marginBottom: "8px", letterSpacing: "0.01em" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="font-body"
                        style={{ fontSize: "0.875rem", color: "var(--warm-grey)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6 }}
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

      {/* Footer CTA */}
      <section
        style={{
          background: "var(--espresso-mid)",
          borderTop: "1px solid var(--border-gold)",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 140px)",
          textAlign: "center",
        }}
      >
        <p className="font-body" style={{ fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "24px" }}>Bereit?</p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", marginBottom: "40px" }}
        >
          Ihren Tisch reservieren.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:04088366884" className="btn-primary">040 88366884</a>
          <a href={PDFS.speisekarte} target="_blank" rel="noopener noreferrer" className="btn-ghost">Karte als PDF</a>
        </div>
      </section>
    </>
  );
}
