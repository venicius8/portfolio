export type Language = "pt" | "en" | "es";

export const languageCorrespondence = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const dictionary = {
  en: {
    header: {
      home: "Home",
      sections: "Sections",
      settings: "Settings",
      menu: "Open main menu",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      theme: "Theme Color",
    },
    home: {
      title: "Hey, it's me, ",
      description: "I'm a developer who works with  ",
    },
    about: {
      aboutTitle: "AboutMe",
      presentation:
        "Full-stack developer with 1 year of hands-on experience, focused on organization and clean code. I build complete applications using TypeScript, React, and Node.js, with a focus on performance, scalability, and user experience.",
    },
    projects: {
      sectionTitle: "Projects",
      demoLabel: "View demo",
      repoLabel: "Repository",
    },
  },

  es: {
    header: {
      home: "Inicio",
      sections: "Secciones",
      settings: "Configuraciones",
      menu: "Abrir menú principal",
      about: "Acerca de",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma",
      theme: "Color del tema",
    },
    home: {
      title: "Hola! Soy ",
      description: "Me dedico al desarrollo de  ",
    },
    about: {
      aboutTitle: "QuienSoy",
      presentation:
        "Desarrollador full-stack con un año de experiencia práctica, centrado en la organización y el código limpio. Desarrollo aplicaciones completas en TypeScript, React y Node.js, prestando especial atención al rendimiento, la escalabilidad y la experiencia del usuario.",
    },
    projects: {
      sectionTitle: "Proyectos",
      demoLabel: "Ver demo",
      repoLabel: "Repositorio",
    },
  },

  pt: {
    header: {
      home: "Início",
      sections: "Seções",
      settings: "Configurações",
      menu: "Abrir menu principal",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      language: "Idioma",
      theme: "Cor do tema",
    },
    home: {
      title: "Olá, me chamo ",
      description: "Eu sou desenvolvedor ",
    },
    about: {
      aboutTitle: "SobreMim",
      presentation:
        "Desenvolvedor full-stack com 1 ano de experiência prática, focado em organização e código limpo. Construo aplicações completas em TypeScript, React e Node.js, com foco em performance, escalabilidade e experiência de usuário.",
    },
    projects: {
      sectionTitle: "Projetos",
      demoLabel: "Ver demo",
      repoLabel: "Repositório",
    },
  },
} as const;

export const projectDictionary = {
  en: {
    project1: {
      title: "YouZen",
      description:
        "A wellness and meditation app built with Next.js, Tailwind, and TypeScript. Explore guided breathing exercises, relaxing soundscapes, inspiring quotes, a gratitude journal, and much more — everything you need to find balance and peace in your daily life.",
      demoLink: "https://youzen.vercel.app/",
      repoLink: "https://github.com/venicius8/youzen",
    },
  },
  es: {
    project1: {
      title: "YouZen",
      description:
        "Una aplicación de bienestar y meditación creada con Next.js, Tailwind y TypeScript. Explora ejercicios guiados de respiración, paisajes sonoros relajantes, citas inspiradoras, un diario de gratitud y mucho más: todo lo que necesitas para encontrar equilibrio y paz en tu día a día.",
      demoLink: "https://youzen.vercel.app/",
      repoLink: "https://github.com/venicius8/youzen",
    },
  },
  pt: {
    project1: {
      title: "YouZen",
      description:
        "Um aplicativo de bem-estar e meditação criado com Next.js, Tailwind e TypeScript. Explore práticas guiadas de respiração, paisagens sonoras relaxantes, citações inspiradoras, um diário de gratidão e muito mais — tudo o que você precisa para encontrar equilíbrio e paz no seu dia a dia.",
      demoLink: "https://youzen.vercel.app/",
      repoLink: "https://github.com/venicius8/youzen",
    },
  },
} as const;
