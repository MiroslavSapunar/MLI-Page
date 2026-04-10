import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padrón Electoral 2026",
  description: "Consultá si estás habilitado para votar en las elecciones de Consejo Directivo FIUBA 2026.",
};

export default function PadronLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preload" href="/padron_de_estudiantes.csv" as="fetch" crossOrigin="anonymous" />
      {children}
    </>
  );
}
