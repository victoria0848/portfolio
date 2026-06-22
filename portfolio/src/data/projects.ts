export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Infoskærm",
    image: "/images/infoskaerm.png",
    description:
      "Skærm for TECHCOLLEGE media afdeling der viser vejr, tid/dato, lokaler, bustider, nyheder og kantinens menu",
    tech: ["React", "TypeScript", "CSS", "HTML"],
    github: "https://github.com/victoria0848/xmas.infoboard",
    live: "",
  },

  {
    id: 2,
    title: "Portfolio",
    image: "/images/portfolio.png",
    description:
      "Min egen portfolio side bygget fra første prøve med Tailwind.",
    tech: ["React", "Tailwind", "HTML"],
    github: "https://github.com/victoria0848/portfolio",
    live: "",
  },

  {
    id: 3,
    title: "To Do App",
    image: "/images/todoapp.png",
    description:
      "Projekt med eget design i Figma, hvor jeg lavede min første web app.",
    tech: ["JavaScript", "SCSS", "HTML"],
    github: "https://github.com/victoria0848/MytodoApp",
    live: "",
  },
];