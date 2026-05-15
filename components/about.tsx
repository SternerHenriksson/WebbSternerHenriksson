import { Award, GraduationCap, Shield } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Award,
      title: "Kvalitet",
      description: "Vi levererar alltid högsta kvalitet i vårt arbete och sätter er framgång i fokus.",
    },
    {
      icon: GraduationCap,
      title: "Kompetens",
      description: "Med bred erfarenhet från stora börsnoterade företag kombinerar vi affärsfokus med människokännedom.",
    },
    {
      icon: Shield,
      title: "Förtroende",
      description: "Vi bygger långsiktiga relationer baserade på tillit och blir er strategiska HR-partner.",
    },
  ]

  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Om Sterner & Henriksson
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Vi är ett konsultbolag grundat av Marie Sterner Henriksson. Målet med bolaget är att vara den strategiska och framförallt den personliga partnern till er.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oavsett om ni behöver stöd i förändringsarbete, kompetensförsörjning eller dagligt HR-arbete finns vi som en trygg och engagerad partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-secondary/50 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <img
                    src="/images/testVD.jpg"
                    alt="Marie Sterner Henriksson, VD"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  Drivkraften bakom att bygga Sterner & Henriksson har varit att skapa ett konsultbolag med fokus på långsiktiga relationer i syfte att bidra till våra kunders utveckling samt att vi själva är en arbetsgivare där våra kollegor utvecklas och trivs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I en tid då förändring är konstant och där digitaliseringen förändrar såväl arbetssätt som organisationer i grunden står vi inför både nya utmaningar som möjligheter. Vi tror på moderna arbetsplatser där människor trivs, utvecklas och presterar tillsammans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
