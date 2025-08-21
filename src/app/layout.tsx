import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://0xsaif.vercel.app";

export const metadata: Metadata = {
  title:
    "SaifWebWorks | Professional Web Development & Business Growth Solutions",
  description:
    "SaifWebWorks empowers local and global businesses with custom web development, SEO-friendly websites, and scalable digital solutions. Build your online presence, boost customer engagement, and drive growth with modern web technologies.",
  keywords: [
    "Web Development",
    "MERN Stack",
    "React.js",
    "Next.js",
    "JavaScript",
    "Custom Websites",
    "SEO Services",
    "Freelance Developer",
    "Business Websites",
    "E-commerce Development",
    "Software Engineering",
    "Web Apps",
    "SaifWebWorks",
  ],
  authors: [{ name: "Muhammad Saif" }],
  creator: "SaifWebWorks",
  publisher: "SaifWebWorks",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    url: SITE_URL,
    title:
      "SaifWebWorks | Professional Web Development & Business Growth Solutions",
    description:
      "Get modern, SEO-friendly, and scalable websites with SaifWebWorks. We help businesses grow through custom web development, optimization, and innovative digital solutions.",
    siteName: "SaifWebWorks",
    images: [
      {
        url: "/og-image.png", // put your social preview image in public folder
        width: 1200,
        height: 630,
        alt: "SaifWebWorks - Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaifWebWorks | Web Development & Business Growth",
    description:
      "Transform your business with SEO-friendly and scalable web development solutions by SaifWebWorks.",
    // creator: "@yourTwitterHandle",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  category: "technology",
  applicationName: "SaifWebWorks",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
