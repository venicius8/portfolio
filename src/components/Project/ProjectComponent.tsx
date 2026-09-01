import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function ProjectComponent({
  projectTitle,
  description,
  demoLink,
  repoLink,
  imagePreview,
}: {
  projectTitle: string;
  description: string;
  demoLink?: string;
  repoLink?: string;
  imagePreview: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex flex-row gap-10 w-full items-start">
      <Image
        src={imagePreview}
        alt={projectTitle}
        width={1320}
        height={742}
        priority
        className="w-150 h-auto cursor-pointer rounded-lg hover:scale-103 transition-transform duration-300 lg:hidden"
        onClick={() => setIsOpen(true)}
      />

      <div className="relative w-1/3 aspect-video hidden lg:block rounded-lg overflow-hidden shrink-0">
        <Image src={imagePreview} alt={projectTitle} fill priority />
      </div>

      <div className="w-1/3 hidden lg:flex flex-col justify-between aspect-video">
        <div>
          <h3 className="text-2xl font-bold mb-2">{projectTitle}</h3>
          <p className="line-clamp-4">{description}</p>
        </div>

        <div className="flex w-full items-center justify-center gap-4 text-base font-medium">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-1/2 items-center justify-center rounded-lg bg-cyan-600 px-4 py-2.5 text-white shadow-md transition-colors hover:bg-cyan-700 active:scale-95"
            >
              {t.projects.demoLabel}
            </a>
          )}

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-1/2 items-center justify-center rounded-lg bg-cyan-900 px-4 py-2.5 text-white shadow-md transition-colors hover:bg-cyan-950 active:scale-95"
            >
              {t.projects.repoLabel}
            </a>
          )}
        </div>
      </div>

      {isOpen && (
        <ProjectDetails
          setIsOpen={setIsOpen}
          projectTitle={projectTitle}
          description={description}
        />
      )}
    </div>
  );
}
