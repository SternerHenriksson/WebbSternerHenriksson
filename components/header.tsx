"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#start", label: "Start" },
    { href: "#om-oss", label: "Om oss" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-primary-foreground font-semibold text-lg tracking-tight">
            Sterner & Henriksson
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="#kontakt">Kontakta oss</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary w-fit"
              >
                <Link href="#kontakt" onClick={() => setIsMenuOpen(false)}>
                  Kontakta oss
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
