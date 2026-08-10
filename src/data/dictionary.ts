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
      title: "Welcome to Venícius' Portfolio",
      description:
        "Venicius' Portfolio, where you can find his projects, skills, and contact information.",
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
      title: "Bienvenido al Portafolio de Venícius",
      description:
        "Portafolio de Venícius, donde puedes encontrar sus proyectos, habilidades e información de contacto.",
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
      title: "Bem-vindo ao Portfólio de Venícius",
      description:
        "Portfólio de Venícius, onde encontra-se seus projetos, habilidades e informações de contato.",
    },
  },
} as const;
