"use client";

import { useLanguage } from "@/context/LanguageContext";
import Typewriter from "typewriter-effect";
import PT from "@/components/PrettyTag";
import Image from "next/image";
import selfPortrait from "@/assets/self-portrait.png";
import { stacks } from "@/data/stacks";
import TechComponent from "@/components/TechComponent";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-10">
      <section className="flex flex-col items-center justify-center h-screen gap-5 mb-30">
        <h1 className="text-5xl font-extrabold tracking-tight">
          {t.home.title}
          <span
            className="
              inline-flex items-center px-4 py-1 rounded-2xl
              bg-white/5 border border-white/10
              bg-linear-to-r from-teal-300 via-blue-600 to-purple-900
              bg-size-[200%_auto] bg-clip-text text-transparent
              animate-gradient-shift shadow-inner
            "
          >
            Venícius Miguel
          </span>
        </h1>
        <span className="text-2xl gap-2 flex">
          {t.home.description}
          <span className="text-cyan-400 font-mono">
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
          <div className="h-1 w-full bg-white"></div>
        </div>
      </section>

      <section className="mb-100" id="about">
        <PT>{t.about.aboutTitle}</PT>
        
        <div className="flex flex-col items-center gap-6 bg-black/30 mb-20 border border-black rounded-2xl p-5 lg:flex-row">
          <p className="text-2xl px-10 lg:w-2/3">{t.about.presentation}</p>
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src={selfPortrait}
              alt="Self-portrait of Venícius"
              width={350}
              height={350}
              className="rounded-full border-cyan-800 border-2 shadow-lg h-auto max-w-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <TechComponent
            stacks={stacks.frontEnd}
            color="bg-green-800"
            title="Front-end"
          />
          <TechComponent
            stacks={stacks.backEnd || []}
            color="bg-black"
            title="Back-end"
          />
          <TechComponent
            stacks={stacks.database || []}
            color="bg-gray-500"
            title="Database"
          />
          <TechComponent
            stacks={stacks.tools || []}
            color="bg-blue-900"
            title="Tools"
          />{" "}
        </div>
      </section>
    </main>
  );
}
