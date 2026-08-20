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
  },
} as const;
