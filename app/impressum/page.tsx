import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-40 pb-28" style={{ background: "var(--espresso)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <p className="section-label mb-5">Rechtliches</p>
        <h1
          className="font-display text-4xl mb-12"
          style={{ color: "var(--cream)", fontWeight: 400 }}
        >
          Impressum
        </h1>
        <div className="flex flex-col gap-8" style={{ color: "var(--warm-grey-light)" }}>
          <div>
            <p className="section-label mb-3">Betreiber</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Lenci&apos;s Restaurant – Bar – Event<br />
              Rathausallee 35<br />
              22846 Norderstedt
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Kontakt</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Telefon: <a href="tel:04088366884" style={{ color: "var(--gold)", textDecoration: "none" }}>040 88366884</a>
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Hinweis</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Alle Inhalte dieser Website sind urheberrechtlich geschützt.
              Alle Rechte vorbehalten. Reproduktion nur mit ausdrücklicher Genehmigung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
