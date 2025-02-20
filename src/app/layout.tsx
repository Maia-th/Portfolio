import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Portfolio - Maia",
  description:
    "Desenvolvedor Full Stack especializado em React, JavaScript, TypeScript, Node.js, Express, bancos de dados SQL, HTML, CSS e Python. Oferecendo serviços de desenvolvimento frontend, backend e automação de processos.",
  metadataBase: new URL("https://maia-portfolio.vercel.app"),
  keywords: [
    "Desenvolvedor Full Stack",
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
  manifest: "/assets/icons/favicon/site.webmanifest",
  themeColor: "#ffffff",
  verification: {
    google: "KUdllg3h0Hm4QvB6X0fYdoPf1axcXtwNsGG1BEC2pD8",
  },
  openGraph: {
    title: "Portfolio de Serviços - Maia.Th",
    description:
      "Desenvolvedor Full Stack comprometido com a excelência técnica!",
    siteName: "Portfolio - Maia",
    type: "website",
    url: "maia-portfolio.vercel.app",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/icons/favicon/og-image.jpg",
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
      "Desenvolvedor Full Stack comprometido com a excelência técnica!",
    images: ["/assets/icons/favicon/og-image.jpg"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/assets/icons/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/assets/icons/favicon/favicon.svg",
    },
    {
      rel: "shortcut icon",
      url: "/assets/icons/favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/icons/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
