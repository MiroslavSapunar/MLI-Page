import type { Metadata } from "next";
import "./globals.css";

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
