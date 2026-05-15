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
    <section className="sh-section" id="tjanster" style={{ background: "var(--bone)" }}>
      <div className="sh-section-inner">
        <div className="sh-section-head">
          <p className="sh-section-eye">
            <span className="num">01</span>Tjänster
          </p>
          <h2 className="sh-section-title">
            HR som stärker både människor och affär.
          </h2>
          <p className="sh-section-lede">
            Strategiskt och operativt HR-stöd — på era villkor, i ert tempo.
          </p>
        </div>

        <div className="sh-practices">
          {tjanster.map((t) => (
            <article key={t.num} className="sh-practice">
              <span className="sh-practice-num">{t.num}</span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <a className="sh-practice-link" href="#kontakt">
                Kontakta oss<span style={{ marginLeft: 6 }}>&#8594;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
