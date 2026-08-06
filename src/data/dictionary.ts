export type Language = "pt" | "en" | "es";

export const languageCorrespondence = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const dictionary = {
  en: {
    home: {
      title: "Welcome to Venícius' Portfolio",
      description:
        "Venicius' Portfolio, where you can find his projects, skills, and contact information.",
    },
  },

  es: {
    home: {
      title: "Bienvenido al Portafolio de Venícius",
      description:
        "Portafolio de Venícius, donde puedes encontrar sus proyectos, habilidades e información de contacto.",
    },
  },

  pt: {
    home: {
      title: "Bem-vindo ao Portfólio de Venícius",
      description:
        "Portfólio de Venícius, onde encontra-se seus projetos, habilidades e informações de contato.",
    },
  },
} as const;
