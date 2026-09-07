"use client";

import { useState } from "react";
import SetLanguage from "@/components/SetLanguage";
import SetTheme from "@/components/SetTheme";

export function MobileHeader({ t, onNavClick }: any) {
  const [openSection, setOpenSection] = useState<
    "sections" | "settings" | null
  >(null);

  const toggleSection = (section: "sections" | "settings") => {
    setOpenSection(openSection === section ? null : section);
  };

  const btnClasses =
    "hover:bg-hover block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex justify-between items-center";

  return (
    <div className="lg:hidden bg-secondary border-t border-border">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#home" onClick={onNavClick} className={btnClasses}>
          ⌂ {t.header.home}
        </a>

        <button
          onClick={() => toggleSection("sections")}
          className={btnClasses}
        >
          <span>§ {t.header.sections}</span>
          <span className="text-xs">
            {openSection === "sections" ? "▲" : "▼"}
          </span>
        </button>

        {openSection === "sections" && (
          <div className="pl-4 space-y-1 bg-primary/20 rounded-md py-2">
            <a
              href="#about"
              onClick={onNavClick}
              className="block px-3 py-1.5 text-sm"
            >
              {t.header.about}
            </a>
            <a
              href="#projects"
              onClick={onNavClick}
              className="block px-3 py-1.5 text-sm"
            >
              {t.header.projects}
            </a>
            <a
              href="#contact"
              onClick={onNavClick}
              className="block px-3 py-1.5 text-sm"
            >
              {t.header.contact}
            </a>
          </div>
        )}

        <button
          onClick={() => toggleSection("settings")}
          className={btnClasses}
        >
          <span>⚙ {t.header.settings}</span>
          <span className="text-xs">
            {openSection === "settings" ? "▲" : "▼"}
          </span>
        </button>

        {openSection === "settings" && (
          <div className="p-3 bg-primary/20 rounded-md space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                {t.header.language}
              </p>
              <div className="flex gap-2">
                <SetLanguage />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                {t.header.theme}
              </p>
              <div className="flex gap-2">
                <SetTheme />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function MobileHeaderMenu({
  t,
  isMenuOpen,
  setIsMenuOpen,
}: {
  t: any;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md hover:bg-hover focus:outline-none"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">{t.header.menu}</span>
        {!isMenuOpen ? (
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
