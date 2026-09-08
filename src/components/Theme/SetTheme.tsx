"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ThemeLabelKey = "light" | "dark" | "highContrast";

const THEMES = [
  { value: "light" as ThemeLabelKey, labelKey: "light" as ThemeLabelKey },
  { value: "dark" as ThemeLabelKey, labelKey: "dark" as ThemeLabelKey },
  { value: "high-contrast", labelKey: "highContrast" as ThemeLabelKey },
];

export default function SetTheme() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      {THEMES.map(({ value, labelKey }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className="text-foreground border border-border font-bold py-2 px-4 rounded hover:bg-hover transition-colors cursor-pointer"
        >
          {t.header.themeColor[labelKey]}
        </button>
      ))}
    </div>
  );
}
