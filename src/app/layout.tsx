// app/layout.tsx
import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import Header from "@/components/Header/MainHeader";
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
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
