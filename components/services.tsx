import { Briefcase, Scale, TrendingUp, UserPlus, Building2, GraduationCap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: UserPlus,
      title: "Rekrytering",
      description: "Vi hjälper er att hitta rätt kompetens genom strukturerade rekryteringsprocesser.",
    },
    {
      icon: Scale,
      title: "Arbetsrätt",
      description: "Juridisk expertis inom arbetsrätt för trygghet i alla personalfrågor.",
    },
    {
      icon: GraduationCap,
      title: "Ledarskap",
      description: "Utveckling av ledarskap på alla nivåer för starkare och mer effektiva team.",
    },
    {
      icon: Building2,
      title: "Organisationsutveckling",
      description: "Strategisk utveckling av organisationen för ökad effektivitet och trivsel.",
    },
    {
      icon: TrendingUp,
      title: "Kompetensförsörjning",
      description: "Planering och säkring av rätt kompetens för framtida behov.",
    },
    {
      icon: Briefcase,
      title: "HR-stöd",
      description: "Dagligt operativt HR-stöd som avlastar och stärker er verksamhet.",
    },
  ]

  return (
    <section id="tjanster" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Våra tjänster
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oavsett om ni behöver stöd i förändringsarbete, kompetensförsörjning eller dagligt HR-arbete finns vi som en trygg och engagerad partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
