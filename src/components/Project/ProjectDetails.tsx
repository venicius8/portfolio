"use client";

import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailsProps {
  setIsOpen: (open: boolean) => void;
  projectTitle: string;
  description: string;
  demoLink?: string;
  repoLink?: string;
}

export default function ProjectDetails({
  setIsOpen,
  projectTitle,
  description,
  demoLink = "#",
  repoLink = "#",
}: ProjectDetailsProps) {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-slate-800 p-6 text-slate-100 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h3 className="mb-3 text-2xl font-bold text-white">{projectTitle}</h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-300">
          {description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 active:scale-95"
          >
            Fechar
          </button>

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-cyan-500 active:scale-95"
          >
            {t.projects.demoLabel}
          </a>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-cyan-900 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-cyan-950 active:scale-95"
          >
            {t.projects.repoLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
