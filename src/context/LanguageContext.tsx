"use client";

import React, { createContext, useContext, useState } from "react";
import { dictionary, Language, projectDictionary } from "@/data/dictionary";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof dictionary)[Language];
  tProjects: (typeof projectDictionary)[Language];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const value = {
    language,
    setLanguage,
    t: dictionary[language],
    tProjects: projectDictionary[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
