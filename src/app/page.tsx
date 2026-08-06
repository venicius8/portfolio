"use client";

import { useLanguage } from "@/context/LanguageContext";
import SetLanguage from "@/components/SetLanguage";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{t.home.title}</h1>
      <p className="text-lg">{t.home.description}</p>
      <SetLanguage />
    </main>
  );
}
