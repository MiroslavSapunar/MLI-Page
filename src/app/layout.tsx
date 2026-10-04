import type { Metadata } from "next";
import { Roboto, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { themeInitScript } from "@/context/themeScript";

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

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
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
    <html lang="es" data-theme="light" className={`${roboto.variable} ${montserrat.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-page">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
