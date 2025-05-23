import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Portfolio - Maia",
  description:
    "Desenvolvedor Front-End especializado em React, Next.js, TypeScript e tecnologias modernas do ecossistema JavaScript.",
  metadataBase: new URL("https://maia-th.me/"),
  keywords: [
    "Desenvolvedor Front-End",
    "Frontend",
    "Backend",
    "React",
    "Next",
    "Vue",
    "Nuxt",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "Banco de Dados",
    "SQL",
    "HTML",
    "CSS",
    "Python",
    "Freelancer",
  ],
  authors: [{ name: "Thiago Maia" }],
  robots: "index, follow",
  verification: {
    google: "KUdllg3h0Hm4QvB6X0fYdoPf1axcXtwNsGG1BEC2pD8",
  },
  openGraph: {
    title: "Portfolio de Serviços - Maia.Th",
    description:
      "Desenvolvedor Front-End comprometido com a excelência técnica!",
    siteName: "Portfolio - Maia",
    type: "website",
    url: "maia-portfolio.vercel.app",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Serviços - Maia.Th",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Serviços - Maia.Th",
    description:
      "Desenvolvedor Front-End comprometido com a excelência técnica!",
    images: ["/assets/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thiago Maia",
  url: "https://maia-th.me/",
  image: "https://maia-th.me/assets/images/og-image.png",
  sameAs: ["https://www.linkedin.com/in/maiath/", "https://github.com/Maia-th"],
  jobTitle: "Desenvolvedor Front-End",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  knowsAbout: [
    "Desenvolvimento Web",
    "Frontend",
    "Backend",
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "TypeScript",
    "Node.js",
    "Express",
    "SQL",
    "NoSQL",
  ],
  alumniOf: "Analise e Desenvolvimento de Sistemas",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itabira",
    addressRegion: "Minas Gerais",
    addressCountry: "Brasil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
