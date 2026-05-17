const tjanster = [
  {
    num: "01",
    title: "Rekrytering",
    desc: "Vi hittar rätt kompetens till rätt roll — från specialister till ledande befattningar.",
  },
  {
    num: "02",
    title: "Ledarskap & utveckling",
    desc: "Coaching, ledarprogram och stöd för chefer som vill utvecklas i sin roll.",
  },
  {
    num: "03",
    title: "Arbetsrätt & HR-stöd",
    desc: "Skräddarsytt stöd i förändringsarbete, kompetensförsörjning och dagligt HR-arbete.",
  },
]

export function Services() {
  return (
    <section className="sh-section" id="tjanster" style={{ background: "var(--navy)", borderTop: "none" }}>
      <div className="sh-section-inner">
        <div style={{ display: "grid", gridTemplateColumns: "fit-content(60%) 1fr", alignItems: "end", gap: "20px", marginBottom: 56 }}>
          <div>
            <p className="sh-section-eye" style={{ marginBottom: 16, color: "var(--brass-light)" }}>Tjänster</p>
            <h2 className="sh-section-title" style={{ color: "var(--bone)" }}>
              HR som stärker både människor och affär.
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "rgba(245, 242, 236, 0.55)", margin: 0, maxWidth: "32ch" }}>
            Strategiskt och operativt HR-stöd — på era villkor, i ert tempo.
          </p>
        </div>

        <div className="sh-practices" style={{ background: "rgba(245, 242, 236, 0.07)", borderColor: "rgba(245, 242, 236, 0.07)" }}>
          {tjanster.map((t) => (
            <article key={t.num} className="sh-practice" style={{ background: "var(--navy)", borderColor: "rgba(245,242,236,0.08)" }}>
              <h3 style={{ color: "var(--bone)" }}>{t.title}</h3>
              <p style={{ color: "rgba(245, 242, 236, 0.65)" }}>{t.desc}</p>
              <a className="sh-practice-link" href="#kontakt" style={{ color: "var(--bone)" }}>
                Kontakta oss<span style={{ marginLeft: 6 }}>&#8594;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
