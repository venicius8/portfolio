"use client";

import { useState } from "react";
import SetLanguage from "../SetLanguage"; // Adjust the import path if needed

export default function DesktopHeader({ t }: { t: any }) {
  const [openSection, setOpenSection] = useState<
    "sections" | "settings" | null
  >(null);

  const toggleSection = (section: "sections" | "settings") => {
    setOpenSection(openSection === section ? null : section);
  };

  const linkClasses =
    "text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer";

  return (
    <nav className="hidden lg:flex items-center space-x-4 relative">
      <a href="#home" className={linkClasses}>
        ⌂ {t.header.home}
      </a>

      <div className="relative">
        <button
          onClick={() => toggleSection("sections")}
          className={linkClasses}
        >
          <span>§ {t.header.sections}</span>
          <span className="text-[10px]">
            {openSection === "sections" ? "▲" : "▼"}
          </span>
        </button>

        {openSection === "sections" && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-xl py-2 z-50">
            <a
              href="#about"
              onClick={() => setOpenSection(null)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              {t.header.about}
            </a>
            <a
              href="#projects"
              onClick={() => setOpenSection(null)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              {t.header.projects}
            </a>
            <a
              href="#contact"
              onClick={() => setOpenSection(null)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              {t.header.contact}
            </a>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => toggleSection("settings")}
          className={linkClasses}
        >
          <span>⚙ {t.header.settings}</span>
          <span className="text-[10px]">
            {openSection === "settings" ? "▲" : "▼"}
          </span>
        </button>

        {openSection === "settings" && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-xl p-4 z-50 space-y-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {t.header.language}
              </p>
              <div className="flex gap-2">
                <SetLanguage />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {t.header.theme}
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
