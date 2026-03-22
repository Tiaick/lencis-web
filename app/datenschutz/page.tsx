import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-40 pb-28" style={{ background: "var(--espresso)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <p className="section-label mb-5">Rechtliches</p>
        <h1
          className="font-display text-4xl mb-12"
          style={{ color: "var(--cream)", fontWeight: 400 }}
        >
          Datenschutzerklärung
        </h1>
        <div className="flex flex-col gap-8" style={{ color: "var(--warm-grey-light)" }}>
          <div>
            <p className="section-label mb-3">Verantwortliche Stelle</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Lenci&apos;s Restaurant – Bar – Event<br />
              Rathausallee 35, 22846 Norderstedt<br />
              Telefon: <a href="tel:04088366884" style={{ color: "var(--gold)", textDecoration: "none" }}>040 88366884</a>
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Datenerhebung</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Diese Website erhebt beim Aufruf automatisch technische Daten (IP-Adresse,
              Browsertyp, Zeitstempel) zur technischen Bereitstellung des Dienstes.
              Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Ihre Rechte</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierzu
              an die oben genannte Kontaktadresse.
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Google Maps</p>
            <p className="font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Diese Website nutzt Google Maps zur Darstellung von Karteninhalten.
              Beim Aufruf der Karte werden Daten an Google LLC übertragen.
              Datenschutzhinweise von Google: privacy.google.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
