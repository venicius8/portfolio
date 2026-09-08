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
  demoLink,
  repoLink,
}: ProjectDetailsProps) {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-secondary p-6 shadow-2xl transition-all border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-hover"
          aria-label={t.projects.closeLabel}
        >
          ✕
        </button>

        <h3 className="mb-3 text-2xl font-bold">{projectTitle}</h3>
        <p className="mb-6 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-close-button px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-hover active:scale-95"
          >
            {t.projects.closeLabel}
          </button>

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-primary-button px-4 py-2 text-sm font-medium shadow-md transition-colors hover:bg-hover active:scale-95"
          >
            {t.projects.demoLabel}
          </a>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-secondary-button px-4 py-2 text-sm font-medium shadow-md transition-colors hover:bg-hover active:scale-95"
          >
            {t.projects.repoLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
