"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { blocks } from "@/faces.content.json";
import { TextContent } from "@/components/ui/text-content";

export default function Header() {
  return (
    <header className="px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center border-b sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <Link href="#" className="flex items-center" prefetch={false}>
        <div className="relative h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-4">
          <Image
            src={blocks.brandLogo.src}
            alt="Saifwebworks Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
          />
        </div>
        <TextContent
          className="text-lg sm:text-2xl font-bold"
          content={blocks.brandName.content}
          as="span"
        />
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-4 lg:gap-8 items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {blocks.mainNavigation.rows.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              <TextContent content={link.label} as="span" />
            </Link>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() =>
            window.open(
              `https://wa.me/${blocks.whatsappNumber.content.replace(
                /[^0-9]/g,
                ""
              )}?text=Hi! I'd like to get a quote for web development services.`,
              "_blank"
            )
          }
        >
          <TextContent content={blocks.headerCtaButton.content} as="span" />
        </Button>
      </nav>
    </header>
  );
}
