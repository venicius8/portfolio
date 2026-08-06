"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{t.home.title}</h1>
      <p className="text-lg">{t.home.description}</p>

      <button onClick={() => setLanguage("pt")}>Português</button>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("es")}>Español</button>
    </main>
  );
}
