export function Hero() {
  return (
    <section className="sh-hero" id="top">
      <img
        className="sh-hero-img"
        src="/images/testBg.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="sh-hero-text">
        <p className="sh-hero-eye">
          <span className="num">EST. 2026</span>Sterner &amp; Henriksson
        </p>
        <h1>
          Människor som växer.{" "}
          <em>Affärer som följer.</em>
        </h1>
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
