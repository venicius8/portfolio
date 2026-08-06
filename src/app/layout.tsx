import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venicius' Portfolio",
  description: "Portfólio de Venícius: Projetos, habilidades e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
