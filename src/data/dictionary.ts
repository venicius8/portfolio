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
  },

  es: {
    header: {
      home: "Inicio",
      sections: "Secciones",
      settings: "Configuracións",
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
  },
} as const;
