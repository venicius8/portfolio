"use client";

import { useLanguage } from "@/context/LanguageContext";
import Typewriter from "typewriter-effect";
import PT from "@/components/PrettyTag";
import Image from "next/image";
import selfPortrait from "@/assets/self-portrait.png";
import { stacks } from "@/data/stacks";
import TechComponent from "@/components/TechComponent";
import ProjectComponent from "@/components/Project/ProjectComponent";

export default function Home() {
  const { t, tProjects } = useLanguage();

  return (
    <main className="flex min-h-full flex-col p-10 bg-background text-foreground">
      <section className="flex flex-col items-center justify-center h-screen gap-5 mb-30">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center">
          {t.home.title}
          <span
            className="
              inline-flex items-center px-4 py-1 rounded-2xl
              bg-white/5 border border-border
              bg-linear-to-r from-teal-300 via-blue-600 to-purple-900
              bg-size-[200%_auto] bg-clip-text text-transparent
              animate-gradient-shift shadow-inner
            "
          >
            Venícius Miguel
          </span>
        </h1>
        <span className="text-xl sm:text-2xl gap-2 flex">
          {t.home.description}
          <span className="text-primary font-mono">
            <Typewriter
              options={{
                strings: ["Front-End", "Back-End", "Full-Stack"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </span>
        <div
          aria-hidden="true"
          className="h-30 w-1/3 absolute -bottom-10 animate-[bounce_3s_infinite]"
        >
          <div className="h-1 w-full bg-divider"></div>
        </div>
      </section>

      <section className="py-24" id="about">
        <PT>{t.about.aboutTitle}</PT>

        <div className="flex flex-col items-center gap-6 bg-card-bg mb-20 border border-border rounded-2xl p-5 lg:flex-row">
          <p className="text-2xl px-10 lg:w-2/3">{t.about.presentation}</p>
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src={selfPortrait}
              alt="Self-portrait of Venícius"
              width={350}
              height={350}
              className="rounded-full border-border border-2 shadow-lg h-auto max-w-full object-cover"
            />
          </div>
        </div>
        <div>
          <TechComponent
            stacks={stacks.frontEnd}
            color="bg-tech-frontend"
            title="Front-end"
          />
          <TechComponent
            stacks={stacks.backEnd}
            color="bg-tech-backend"
            title="Back-end"
          />
          <TechComponent
            stacks={stacks.database}
            color="bg-tech-database"
            title="Database"
          />
          <TechComponent
            stacks={stacks.tools}
            color="bg-tech-tools"
            title="Tools"
          />
        </div>
      </section>

      <section className="py-24" id="projects">
        <PT>{t.projects.sectionTitle}</PT>
        <ProjectComponent
          projectTitle={tProjects.project1.title}
          description={tProjects.project1.description}
          demoLink={tProjects.project1.demoLink}
          repoLink={tProjects.project1.repoLink}
          imagePreview="/projects/youzen.png"
        />
      </section>
    </main>
  );
}
