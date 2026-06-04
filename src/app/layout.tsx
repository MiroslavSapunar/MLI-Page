import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

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
    <html lang="es" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="font-roboto">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
