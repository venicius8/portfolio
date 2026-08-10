import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Header from "@/components/Header/MainHeader";

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
      <LanguageProvider>
        <body className="min-h-full flex flex-col">
          <Header />
          {children}
        </body>
      </LanguageProvider>
    </html>
  );
}
