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
    <div className="flex justify-center gap-10 w-full items-start lg:justify-start lg:flex-row">
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
              className="flex w-1/2 items-center justify-center rounded-lg bg-primary-button px-4 py-2.5 shadow-md transition-colors hover:bg-primary-button/50 active:scale-95"
            >
              {t.projects.demoLabel}
            </a>
          )}

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-1/2 items-center justify-center rounded-lg bg-secondary-button px-4 py-2.5 shadow-md transition-colors hover:bg-secondary-button/50 active:scale-95"
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
          demoLink={demoLink}
          repoLink={repoLink}
        />
      )}
    </div>
  );
}
