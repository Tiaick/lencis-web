"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const allImages = IMAGES.gallery;
const HP = "clamp(40px, 7vw, 120px)";

export default function GaleriePage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + allImages.length) % allImages.length);
  };
  const next = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % allImages.length);
  };

  return (
    <>
      {/* Header */}
      <section style={{ background: "var(--espresso)", padding: `clamp(120px, 14vw, 180px) ${HP} clamp(48px, 6vw, 80px)` }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "20px" }}>Eindrücke</p>
        <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 400, color: "var(--cream)", fontStyle: "italic", lineHeight: 1.1, marginBottom: "16px" }}>
          Das Lenci&apos;s<br />
          <span style={{ color: "var(--gold)" }}>in Bildern.</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "var(--warm-grey-light)", fontWeight: 300, maxWidth: "44ch" }}>
          Fotografiert von Frank Barnekow – authentische Einblicke in Restaurant, Bar, Cuisine und Atmosphäre.
        </p>
      </section>

      {/* Gallery */}
      <section style={{ background: "var(--espresso)", paddingBottom: "clamp(64px, 8vw, 100px)" }}>
        <div style={{ padding: `0 ${HP}` }}>

          {/* Featured Row */}
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "3px", marginBottom: "3px" }}
            className="max-md:grid-cols-1"
          >
            <div className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(0)}>
              <Image src={allImages[0]} alt="Lenci's Restaurant Atmosphäre" width={900} height={600} className="w-full object-cover" style={{ height: "clamp(280px, 40vw, 520px)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "3px" }}>
              {[1, 2].map((i) => (
                <div key={i} className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(i)}>
                  <Image src={allImages[i]} alt={`Lenci's ${i + 1}`} width={600} height={400} className="w-full object-cover" style={{ height: "clamp(140px, 19vw, 254px)" }} />
                </div>
              ))}
            </div>
          </div>

          {/* 3-column row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px", marginBottom: "3px" }}
            className="max-md:grid-cols-1"
          >
            {[3, 4, 5].map((i) => (
              <div key={i} className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(i)}>
                <Image src={allImages[i]} alt={`Lenci's ${i + 1}`} width={600} height={400} className="w-full object-cover" style={{ height: "clamp(220px, 25vw, 340px)" }} />
              </div>
            ))}
          </div>

          {/* Wide + Narrow row */}
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "3px", marginBottom: "3px" }}
            className="max-md:grid-cols-1"
          >
            <div className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(6)}>
              <Image src={allImages[6]} alt="Lenci's 7" width={600} height={500} className="w-full object-cover" style={{ height: "clamp(280px, 35vw, 460px)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
              {[7, 8, 9, 10].map((i) => (
                <div key={i} className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(i)}>
                  <Image src={allImages[i]} alt={`Lenci's ${i + 1}`} width={400} height={300} className="w-full object-cover" style={{ height: "clamp(110px, 16vw, 220px)" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Full-width single */}
          <div className="img-zoom-container" style={{ cursor: "pointer", marginBottom: "3px" }} onClick={() => setLightboxIdx(11)}>
            <Image src={allImages[11]} alt="Lenci's Ambiente" width={1400} height={600} className="w-full object-cover" style={{ height: "clamp(220px, 30vw, 440px)" }} />
          </div>

          {/* 4-column grid for the rest */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3px" }}
            className="max-sm:grid-cols-2"
          >
            {allImages.slice(12).map((src, i) => (
              <div key={i} className="img-zoom-container" style={{ cursor: "pointer" }} onClick={() => setLightboxIdx(i + 12)}>
                <Image src={src} alt={`Lenci's ${i + 13}`} width={400} height={400} className="w-full object-cover" style={{ height: "clamp(160px, 18vw, 260px)" }} />
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "var(--warm-grey)", fontStyle: "italic", letterSpacing: "0.08em", textAlign: "center", marginTop: "32px" }}>
            Fotografie: Frank Barnekow — Alle Rechte vorbehalten
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(15,13,11,0.96)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxIdx(null)}
        >
          <button
            style={{ position: "absolute", top: "24px", right: "24px", zIndex: 10, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm-grey-light)", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setLightboxIdx(null)}
          >
            Schließen ✕
          </button>
          <button
            style={{ position: "absolute", left: "clamp(16px, 3vw, 32px)", zIndex: 10, padding: "12px 16px", color: "var(--cream)", background: "rgba(201,169,110,0.1)", border: "1px solid var(--border-gold)", cursor: "pointer", fontSize: "1.2rem" }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ←
          </button>
          <div style={{ position: "relative", maxWidth: "1200px", maxHeight: "85vh", margin: "0 clamp(48px, 6vw, 80px)" }} onClick={(e) => e.stopPropagation()}>
            <Image src={allImages[lightboxIdx]} alt={`Lenci's ${lightboxIdx + 1}`} width={1200} height={900} className="object-contain" style={{ width: "auto", height: "auto", maxHeight: "85vh" }} />
            <p style={{ position: "absolute", bottom: "-32px", left: 0, right: 0, textAlign: "center", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "var(--warm-grey)", letterSpacing: "0.1em" }}>
              {lightboxIdx + 1} / {allImages.length} · Foto: Frank Barnekow
            </p>
          </div>
          <button
            style={{ position: "absolute", right: "clamp(16px, 3vw, 32px)", zIndex: 10, padding: "12px 16px", color: "var(--cream)", background: "rgba(201,169,110,0.1)", border: "1px solid var(--border-gold)", cursor: "pointer", fontSize: "1.2rem" }}
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
