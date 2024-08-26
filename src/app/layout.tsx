import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
      <body >{children}</body>
    </html>
  );
}
