"use client"

import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: "Hem", href: "#top" },
    { label: "Tjänster", href: "#tjanster" },
    { label: "Om oss", href: "#om-oss" },
  ]

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace("#", "")
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <header className="sh-header">
        <a
          className="sh-brand"
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          style={{ lineHeight: 0 }}
        >
          <Image
            src="/images/logotest.png"
            alt="Sterner & Henriksson"
            height={48}
            width={240}
            style={{ objectFit: "contain", objectPosition: "left" }}
            priority
          />
        </a>

        <div className="sh-right">
          <nav className="sh-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="sh-contact-btn"
            href="#kontakt"
            onClick={(e) => scrollTo(e, "#kontakt")}
          >
            Kontakt
          </a>

          <button
            className="sh-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--ink)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="sh-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => scrollTo(e, "#kontakt")}
            style={{ color: "var(--brass-deep)" }}
          >
            Kontakt
          </a>
        </nav>
      )}

    </>
  )
}
