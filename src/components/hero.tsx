"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code } from "lucide-react";
import { blocks } from "@/faces.content.json";
import { TextContent } from "@/components/ui/text-content";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full lg:h-[90vh] lg:max-h-[800px] grid lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="max-w-xl space-y-8">
            <Badge variant="secondary" className="w-fit text-xs px-3 py-1">
              <Code className="mr-2 h-3 w-3" />
              <TextContent content={blocks.heroBadge.content} as="span" />
            </Badge>
            <div className="space-y-6">
              <TextContent
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                content={blocks.heroHeadline.content}
                as="h1"
              />
              <TextContent
                className="text-xl text-muted-foreground leading-relaxed"
                content={blocks.heroDescription.content}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-8"
                onClick={() =>
                  window.open(
                    `https://wa.me/${blocks.whatsappNumber.content.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Hi! I'd like to start a new web development project.`,
                    "_blank"
                  )
                }
              >
                <TextContent
                  content={blocks.heroPrimaryButton.content}
                  as="span"
                />
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-base"
                onClick={() => {
                  const section = document.getElementById("portfolio");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <TextContent
                  content={blocks.heroSecondaryButton.content}
                  as="span"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={blocks.heroImage.src}
            fill
            alt="Web Development Services"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
