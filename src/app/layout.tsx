import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Portfolio - Maia",
  description:
    "Desenvolvedor focado em Front-End e Data Analytics, criando interfaces modernas, dashboards interativos e insights estratégicos.",
  metadataBase: new URL("https://maia-th.me/"),
  keywords: [
    "Desenvolvedor Front-End",
    "Data Analytics",
    "Analista de Dados",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Power BI",
    "DAX",
    "Power Query",
    "Python",
    "Automação",
    "Dashboards",
    "Freelancer",
  ],
  authors: [{ name: "Thiago Maia" }],
  robots: "index, follow",
  verification: {
    google: "KUdllg3h0Hm4QvB6X0fYdoPf1axcXtwNsGG1BEC2pD8",
  },
  openGraph: {
    title: "Portfolio - Maia | Front-End & Data Analytics",
    description:
      "Criando interfaces performáticas e transformando dados em insights estratégicos.",
    siteName: "Portfolio - Maia",
    type: "website",
    url: "https://maia-th.me",
    locale: "pt_BR",
    images: [
      {
        url: "https://maia-th.me/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Maia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Maia | Front-End & Data Analytics",
    description:
      "Criando interfaces performáticas e transformando dados em insights estratégicos.",
    images: ["https://maia-th.me/assets/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thiago Maia",
  url: "https://maia-th.me/",
  image: "https://maia-th.me/assets/images/og-image.png",
  sameAs: ["https://www.linkedin.com/in/maiath/", "https://github.com/Maia-th"],
  jobTitle: "Desenvolvedor Front-End e Analista de Dados",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  knowsAbout: [
    "Desenvolvimento Web",
    "Data Analytics",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Power BI",
    "DAX",
    "Power Query",
    "Python",
    "Automação de Processos",
    "Visualização de Dados"
  ],
  alumniOf: "Análise e Desenvolvimento de Sistemas",
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