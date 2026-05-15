import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sterner & Henriksson</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              HR-konsulter som hjälper företag att skapa hållbara, framgångsrika arbetsplatser.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="#start"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Start
              </Link>
              <Link
                href="#om-oss"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Om oss
              </Link>
              <Link
                href="#tjanster"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Tjänster
              </Link>
              <Link
                href="#kontakt"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>info@sternerhenriksson.se</p>
              <p>+46 70 123 45 67</p>
              <p>Stockholm, Sverige</p>
            </div>
            <div className="mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sterner & Henriksson AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
