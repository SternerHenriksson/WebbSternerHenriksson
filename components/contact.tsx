"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "E-post",
      value: "info@sternerhenriksson.se",
      href: "mailto:info@sternerhenriksson.se",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+46 70 123 45 67",
      href: "tel:+46701234567",
    },
    {
      icon: MapPin,
      label: "Adress",
      value: "Stockholm, Sverige",
      href: null,
    },
  ]

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Kontakta oss
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Vi ser fram emot att höra från er. Hör av er så berättar vi mer om hur vi kan hjälpa ert företag.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-lg border border-border p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Tack för ditt meddelande!
                </h3>
                <p className="text-muted-foreground">
                  Vi återkommer till dig så snart som möjligt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ditt namn"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Företag</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Ditt företag"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="din.email@foretag.se"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+46 70 123 45 67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Meddelande</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Berätta om hur vi kan hjälpa er..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Kontaktuppgifter
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
              <p className="text-foreground font-medium mb-2">
                Välkommen att höra av er!
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vi svarar vanligtvis inom 24 timmar på vardagar. För brådskande ärenden, ring oss direkt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
