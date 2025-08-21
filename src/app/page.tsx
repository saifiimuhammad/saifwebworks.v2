"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TextContent } from "@/components/ui/text-content";
import { blocks } from "@/faces.content.json";
import { ArrowRight, CircleCheck, Crown, Quote } from "lucide-react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Manrope({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <div
      className={`flex flex-col min-h-[100dvh] bg-background text-foreground ${font.className} max-w-[1920px] mx-auto`}
    >
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />

        {/* About Section */}
        <section id="about" className="w-full">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left Image */}
            <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-full">
              <Image
                src={blocks.aboutImage.src}
                fill
                alt="About Saifwebworks"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-16 bg-muted/30">
              <div className="max-w-lg space-y-8">
                <TextContent
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  content={blocks.aboutTitle.content}
                  as="h2"
                />
                <TextContent
                  className="text-lg text-muted-foreground leading-relaxed"
                  content={blocks.aboutDescription.content}
                />
                <div className="space-y-4">
                  {blocks.aboutFeatures.rows.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <CircleCheck className="h-4 w-4 text-primary" />
                      </div>
                      <TextContent
                        className="text-base leading-relaxed"
                        content={feature.text}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="w-fit"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${blocks.whatsappNumber.content.replace(
                        /[^0-9]/g,
                        ""
                      )}?text=Hi! I'd like to learn more about your web development services.`,
                      "_blank"
                    )
                  }
                >
                  <TextContent content={blocks.aboutButton.content} as="span" />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-32 bg-background">
          <div className="container px-6 lg:px-12">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <TextContent
                className="text-4xl lg:text-5xl font-bold mb-6"
                content={blocks.portfolioTitle.content}
                as="h2"
              />
              <TextContent
                className="text-xl text-muted-foreground leading-relaxed"
                content={blocks.portfolioSubtitle.content}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blocks.portfolioItems.rows.map((project, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <div className="relative h-48 min-h-[192px] rounded-t-lg overflow-hidden">
                        <Image
                          src={project.image.src}
                          fill
                          alt={project.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <TextContent
                          className="text-xl font-bold text-foreground"
                          content={project.title}
                          as="h3"
                        />
                        <TextContent
                          className="text-foreground/80 leading-relaxed"
                          content={project.description}
                        />
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <TextContent content={project.category} as="span" />
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="w-full py-32 bg-muted/50">
          <div className="container px-6 lg:px-12">
            <div className="text-center mb-16">
              <TextContent
                className="text-3xl lg:text-4xl font-bold mb-8"
                content={blocks.testimonialsTitle.content}
                as="h2"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blocks.clientTestimonials.rows.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <TextContent
                      className="text-lg mb-6 leading-relaxed text-foreground"
                      content={testimonial.quote}
                      as="blockquote"
                    />
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 min-h-[40px] min-w-[40px] rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar.src}
                          fill
                          alt={testimonial.name}
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <TextContent
                          className="font-semibold text-sm text-foreground"
                          content={testimonial.name}
                          as="div"
                        />
                        <TextContent
                          className="text-xs text-foreground/70"
                          content={testimonial.company}
                          as="div"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full relative min-h-[70vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 min-h-[400px]">
            <Image
              src={blocks.ctaBackgroundImage.src}
              fill
              alt="Get Started Background"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>

          <div className="relative z-10 text-center text-primary-foreground px-6 lg:px-12 max-w-4xl">
            <div className="space-y-8">
              <TextContent
                className="text-4xl lg:text-6xl font-bold leading-tight"
                content={blocks.ctaTitle.content}
                as="h2"
              />
              <TextContent
                className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto"
                content={blocks.ctaDescription.content}
              />
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${blocks.whatsappNumber.content.replace(
                        /[^0-9]/g,
                        ""
                      )}?text=Hi! I'd like to get a free consultation for my business website.`,
                      "_blank"
                    )
                  }
                >
                  <TextContent
                    content={blocks.ctaPrimaryButton.content}
                    as="span"
                  />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${blocks.whatsappNumber.content.replace(
                        /[^0-9]/g,
                        ""
                      )}?text=Hi! I'd like to know about your pricing for web development services.`,
                      "_blank"
                    )
                  }
                >
                  <TextContent
                    content={blocks.ctaSecondaryButton.content}
                    as="span"
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-28 bg-muted/30">
          <div className="container px-6 lg:px-12">
            <div className="text-center mb-16">
              <TextContent
                className="text-4xl lg:text-5xl font-bold mb-4"
                content="Simple, Transparent Pricing"
                as="h2"
              />
              <TextContent
                className="text-lg text-muted-foreground"
                content="Pay only for what grows your business."
              />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "PKR 11,999",
                  desc: "For small businesses getting started.",
                  features: [
                    "1 Page Website",
                    "Responsive Design",
                    "Basic SEO",
                  ],
                  button: "Get Started",
                },
                {
                  name: "Professional",
                  price: "PKR 29,999",
                  desc: "Best for growing companies.",
                  features: [
                    "Up to 5 Pages",
                    "Custom Design",
                    "SEO Optimization",
                    "Priority Support",
                  ],
                  button: "Choose Plan",
                  highlight: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  desc: "Tailored solutions for scale.",
                  features: [
                    "Unlimited Pages",
                    "Full Branding",
                    "Advanced SEO",
                    "Dedicated Manager",
                  ],
                  button: "Contact Us",
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={`p-8 bg-card border ${
                    plan.highlight
                      ? "border-primary shadow-lg"
                      : "border-border"
                  }`}
                >
                  <CardContent className="flex flex-col h-full">
                    {/* Top content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <Badge
                          variant="secondary"
                          className="w-fit text-xs px-3 py-1"
                        >
                          {plan.highlight && <Crown className="mr-2 h-3 w-3" />}
                          <TextContent content={plan.name} as="span" />
                        </Badge>
                        <p className="text-muted-foreground mt-2">
                          {plan.desc}
                        </p>
                      </div>
                      <p className="text-4xl text-card-foreground font-bold">
                        {plan.price}
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CircleCheck className="h-5 w-5 text-primary" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom button */}
                    <div className="mt-8">
                      <Button
                        size="lg"
                        className="w-full"
                        variant={plan.highlight ? "default" : "secondary"}
                        onClick={() =>
                          window.open(
                            `https://wa.me/${blocks.whatsappNumber.content.replace(
                              /[^0-9]/g,
                              ""
                            )}?text=Hi! I'm interested in the ${
                              plan.name
                            } plan.`,
                            "_blank"
                          )
                        }
                      >
                        {plan.button}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 bg-background border-t">
        <div className="container px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={blocks.brandLogo.src}
                  width="28"
                  height="28"
                  alt="Saifwebworks Logo"
                />
                <TextContent
                  className="text-xl font-bold"
                  content={blocks.brandName.content}
                  as="span"
                />
              </div>
              <TextContent
                className="text-muted-foreground text-sm leading-relaxed max-w-md"
                content={blocks.footerDescription.content}
              />
            </div>

            {blocks.footerSections.rows.map((section, index) => (
              <div key={index} className="space-y-3">
                <TextContent
                  className="font-semibold text-base"
                  content={section.title}
                  as="h4"
                />
                <div className="space-y-2">
                  {section.links.split(",").map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors block text-sm"
                      >
                        <TextContent content={link.trim()} as="span" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {[
              {
                id: "footer2",
                title: "Contact",
                links: [
                  {
                    title: "Get Quote",
                    link: `https://wa.me/${blocks.whatsappNumber.content.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Hi! I'd like to get a quote for web development services.`,
                  },
                  {
                    title: "Schedule Call",
                    link: `https://wa.me/${blocks.whatsappNumber.content.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Hi, I’d like to schedule a call with you. Please let me know a suitable time.`,
                  },
                  {
                    title: "Email Us",
                    link: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammadsaifarain786@gmail.com&su=Inquiry&body=Hi%20Saif,%20I%20would%20like%20to%20...",
                  },
                  {
                    title: "Support",
                    link: `https://wa.me/${blocks.whatsappNumber.content.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Hi, I’d need support regarding...`,
                  },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-3">
                <TextContent
                  className="font-semibold text-base"
                  content={section.title}
                  as="h4"
                />
                <div className="space-y-2">
                  {section.links.map((val, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        href={val.link}
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors block text-sm"
                      >
                        <TextContent content={val.title} as="span" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t text-center">
            <TextContent
              className="text-muted-foreground text-sm"
              content={blocks.footerCopyright.content}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
