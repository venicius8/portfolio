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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setLanguage(lang)}
    >
      {children}
    </button>
  );
}

export default function SetLanguage() {
  return (
    <div>
      {Object.entries(languageCorrespondence).map(([lang, label]) => (
        <LanguageButton key={lang} lang={lang as Language}>
          {label}
        </LanguageButton>
      ))}
    </div>
  );
}
