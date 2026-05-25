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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? "Något gick fel. Försök igen.")
      }

      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel. Försök igen.")
    } finally {
      setLoading(false)
    }
  }

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
              <a href="mailto:webbsternerhenriksson@gmail.com">
                webbsternerhenriksson@gmail.com
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
                <strong>{form.email}</strong> inom två arbetsdagar.
                Tills dess, ha en fin dag.
              </p>
            </div>
          ) : (
            <form className="sh-form-grid" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="namn">Namn</label>
                <input
                  id="namn"
                  value={form.namn}
                  onChange={set("namn")}
                  placeholder="För- och efternamn"
                  required
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <div className="field-full">
                <label htmlFor="foretag">Företag</label>
                <input
                  id="foretag"
                  value={form.foretag}
                  onChange={set("foretag")}
                  placeholder="Var ni skriver ifrån"
                  disabled={loading}
                />
              </div>
              <div className="field-full">
                <label htmlFor="omrade">Område</label>
                <select
                  id="omrade"
                  value={form.omrade}
                  onChange={set("omrade")}
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              {error && (
                <div className="field-full" style={{ color: "var(--danger)", fontFamily: "var(--font-sans)", fontSize: 14 }}>
                  {error}
                </div>
              )}
              <div className="field-full submit-row">
                <button
                  type="submit"
                  className="sh-btn sh-btn-ink"
                  disabled={loading}
                  style={{ opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Skickar…" : <>Skicka<span className="arrow" style={{ marginLeft: 4 }}>&#8594;</span></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
