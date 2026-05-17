"use client"

import { useState } from "react"

type FormState = {
  namn: string
  email: string
  foretag: string
  omrade: string
  meddelande: string
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState<FormState>({
    namn: "",
    email: "",
    foretag: "",
    omrade: "Rekrytering",
    meddelande: "",
  })

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value })

return (
    <section className="sh-contactform" id="kontakt">
      <div className="sh-contactform-inner">
        <div>
          <p className="eye">Kontakt</p>
          <h2>
            Hör av <em>er.</em>
          </h2>
          <p className="lede">
            Berätta kort vad ni arbetar med — en mening räcker. Vi återkommer
            inom två arbetsdagar.
          </p>
          <div className="sh-contact-meta">
            <div>
              <span>E-post</span>
              <a href="mailto:hej@sternerhenriksson.se">
                hej@sternerhenriksson.se
              </a>
            </div>
            <div>
              <span>Telefon</span>
              <a href="tel:+46701234567">+46 70 123 45 67</a>
            </div>
            <div>
              <span>Adress</span>
              Stockholm, Sverige
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="sh-form-thanks">
              <h3>Tack — vi hör av oss.</h3>
              <p>
                Marie eller en av kollegorna skriver till{" "}
                <strong>{form.email || "er"}</strong> inom två arbetsdagar.
                Tills dess, ha en fin dag.
              </p>
            </div>
          ) : (
            <form className="sh-form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div>
                <label htmlFor="namn">Namn</label>
                <input
                  id="namn"
                  value={form.namn}
                  onChange={set("namn")}
                  placeholder="För- och efternamn"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">E-post</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="ni@foretag.se"
                  required
                />
              </div>
              <div className="field-full">
                <label htmlFor="foretag">Företag</label>
                <input
                  id="foretag"
                  value={form.foretag}
                  onChange={set("foretag")}
                  placeholder="Var ni skriver ifrån"
                />
              </div>
              <div className="field-full">
                <label htmlFor="omrade">Område</label>
                <select
                  id="omrade"
                  value={form.omrade}
                  onChange={set("omrade")}
                >
                  <option>Rekrytering</option>
                  <option>Ledarskap &amp; utveckling</option>
                  <option>Arbetsrätt &amp; HR-stöd</option>
                  <option>Annat / vet ej än</option>
                </select>
              </div>
              <div className="field-full">
                <label htmlFor="meddelande">Vad arbetar ni med?</label>
                <textarea
                  id="meddelande"
                  value={form.meddelande}
                  onChange={set("meddelande")}
                  placeholder="En mening räcker — en rekrytering, en organisationsförändring, en arbetsrättsfråga."
                />
              </div>
              <div className="field-full submit-row">
                <button type="submit" className="sh-btn sh-btn-ink">
                  Skicka<span className="arrow" style={{ marginLeft: 4 }}>&#8594;</span>
                </button>
                <small>Vi svarar inom två arbetsdagar.</small>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
