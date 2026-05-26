import Image from "next/image"

export function Hero() {
  return (
    <section className="sh-hero" id="top">
      <Image
        className="sh-hero-img"
        src="/images/hero1.jpg"
        alt=""
        aria-hidden={true}
        fill
        priority
        sizes="100vw"
      />
      <div className="sh-hero-text">
        <h1>
          Människor som växer.{" "}
          <em>Affärer som följer.</em>
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(245, 242, 236, 0.55)",
          margin: "0 0 28px",
        }}>
          Kvalitet <span style={{ color: "var(--brass-light)", margin: "0 10px" }}>·</span>
          Kompetens <span style={{ color: "var(--brass-light)", margin: "0 10px" }}>·</span>
          Förtroende
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="sh-btn sh-btn-primary" href="#kontakt">
            Kontakta oss<span className="arrow">&#8594;</span>
          </a>
          <a className="sh-btn sh-btn-secondary" href="#tjanster">
            Våra tjänster
          </a>
        </div>
      </div>
    </section>
  )
}
