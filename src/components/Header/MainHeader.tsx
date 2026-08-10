"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import DesktopHeader from "./DesktopHeader";
import { MobileHeader, MobileHeaderMenu } from "./MobileHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed py-3 top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink">
            <a
              href="/"
              className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Venícius' Portfolio
            </a>
          </div>

          <DesktopHeader t={t} />

          <MobileHeaderMenu
            t={t}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>

      {isMenuOpen && <MobileHeader t={t} onNavClick={handleNavClick} />}
    </header>
  );
}
