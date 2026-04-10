import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "MLI - Movimiento Linealmente Independiente | FIUBA",
    template: "%s | MLI FIUBA"
  },
  description: "Agrupación estudiantil independiente de la Facultad de Ingeniería de la UBA. 20 años transformando FIUBA con resultados concretos. Guía del estudiante, propuestas y logros.",
  keywords: ["MLI", "FIUBA", "UBA", "ingeniería", "estudiantes", "centro de estudiantes", "agrupación estudiantil", "Buenos Aires"],
  authors: [{ name: "MLI - Movimiento Linealmente Independiente" }],
  creator: "MLI FIUBA",
  metadataBase: new URL("https://mli-fiuba.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mli-fiuba.ar",
    siteName: "MLI FIUBA",
    title: "MLI - Movimiento Linealmente Independiente | FIUBA",
    description: "Agrupación estudiantil independiente de la Facultad de Ingeniería de la UBA. 20 años transformando FIUBA con resultados concretos.",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "MLI - Movimiento Linealmente Independiente FIUBA",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLI - Movimiento Linealmente Independiente | FIUBA",
    description: "Agrupación estudiantil independiente de la Facultad de Ingeniería de la UBA. 20 años transformando FIUBA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/padron_de_estudiantes.csv" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className="font-roboto">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
