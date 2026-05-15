import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="start" className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/testBg.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-balance">
            Strategiskt HR-stöd för framgångsrika arbetsplatser
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl text-pretty">
            Vi hjälper företag att skapa hållbara, framgångsrika arbetsplatser genom strategiskt och operativt HR-stöd. Med lång erfarenhet inom rekrytering, ledarskap, arbetsrätt och organisationsutveckling erbjuder vi skräddarsydda lösningar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium"
            >
              <Link href="#kontakt">
                Kontakta oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white bg-transparent hover:bg-white/10"
            >
              <Link href="#om-oss">Läs mer om oss</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
