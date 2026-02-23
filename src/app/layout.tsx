import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "MLI - FIUBA ",
  description: "Movimiento Linealmente Independiente - Facultad de Ingeniería, UBA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-roboto">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
