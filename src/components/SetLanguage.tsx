import { useLanguage } from "@/context/LanguageContext";
import { Language, languageCorrespondence } from "@/data/dictionary";

function LanguageButton({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  const { setLanguage } = useLanguage();
  return (
    <button
      className="text-foreground border border-border font-bold py-2 px-4 rounded hover:bg-hover transition-colors cursor-pointer"
      onClick={() => setLanguage(lang)}
    >
      {children}
    </button>
  );
}

export default function SetLanguage() {
  return (
    <div className="flex gap-2">
      {Object.entries(languageCorrespondence).map(([lang, label]) => (
        <LanguageButton key={lang} lang={lang as Language}>
          {label}
        </LanguageButton>
      ))}
    </div>
  );
}
