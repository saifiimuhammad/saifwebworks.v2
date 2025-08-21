"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Smartphone, Search, Palette, Users } from "lucide-react";
import { blocks } from "@/faces.content.json";
import { TextContent } from "@/components/ui/text-content";

export default function Services() {
  const iconMap: {
    [key: number]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    0: Code,
    1: Globe,
    2: Smartphone,
    3: Search,
    4: Palette,
    5: Users,
  };

  return (
    <section id="services" className="w-full py-32 bg-background">
      <div className="container px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <TextContent
            className="text-4xl lg:text-5xl font-bold mb-6"
            content={blocks.servicesTitle.content}
            as="h2"
          />
          <TextContent
            className="text-xl text-muted-foreground leading-relaxed"
            content={blocks.servicesSubtitle.content}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.servicesList.rows.map((service, index) => {
            const IconComponent = iconMap[index] || Code;
            return (
              <Card
                key={index}
                className="group transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <TextContent
                        className="text-xl font-bold text-foreground"
                        content={service.title}
                        as="h3"
                      />
                      <TextContent
                        className="text-foreground/80 leading-relaxed"
                        content={service.description}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
