import {
  FileCode,
  Github,
  Home,
  Linkedin,
  Projector,
  Table2,
  TwitterIcon,
  User2,
} from "lucide-react";

// ***** HEADER LINKS ******
export const NavLinks = [
  {
    text: "Home",
    link: "/",
    icon: Home,
  },
  {
    text: "About",
    link: "/about-me",
    icon: User2,
  },
  {
    text: "Projects",
    link: "/projects",
    icon: Table2,
  },
  {
    text: "Articles",
    link: "/articles",
    icon: FileCode,
  },
];

export const ContactLinks = [
  {
    text: "Github",
    link: "https://github.com/Nikhar-savaliya",
    icon: Github,
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/nikharsavaliya",
    icon: Linkedin,
  },
  {
    text: "Twitter",
    link: "https://twitter.com/N1khar_",
    icon: TwitterIcon,
  },
];

// ****** Project Data ******
export const projects = [
  {
    img: Projector,
    projectName: "Youtube Homepage Clone",
    projectLink: "https://you-tube-clone-nikhar-savaliya.vercel.app",
    projectDetail:
      "this project is youtube homepage clone, i created when i was learning pure HTML, CSS and JS.",
    techStack: ["HTML", "CSS", "JS"],
  },
  {
    img: Projector,
    projectName: "SkillSensei",
    projectLink: "https://skill-sensei.vercel.app",
    projectDetail:
      "A landing page for imaginary company that selles courses related to self improvement.A landing page for imaginary company that selles courses related to self improvement.",
    techStack: ["HTML", "CSS", "JS"],
  },
  {
    img: Projector,
    projectName: "Pizza menu",
    projectLink: "https://pizza-menu-nine.vercel.app",
    projectDetail:
      "this project is a menu for restraunt, created using React.js",
    techStack: ["HTML", "CSS", "JS", "React"],
  },
  {
    img: Projector,
    projectName: "Pizza menu",
    projectLink: "https://pizza-menu-nine.vercel.app",
    projectDetail:
      "this project is a menu for restraunt, created using React.js",
    techStack: ["HTML", "CSS", "JS", "React"],
  },
  {
    img: Projector,
    projectName: "Pizza menu",
    projectLink: "https://pizza-menu-nine.vercel.app",
    projectDetail:
      "this project is a menu for restraunt, created using React.js",
    techStack: ["HTML", "CSS", "JS", "React"],
  },
];

export const articleData = [
  {
    link: "https://medium.com/@nikhar-dev/a-deep-dive-into-javascript-01-9b6ce63944ae",
    title: "A Deep dive into JavaScript - JS01",
    description:
      "This article is published on medium.com, it is about basics of javascript.",
    time: "5",
  },
  {
    link: "https://medium.com/@nikhar-dev/javascript-type-mutability-and-type-conversion-js02-fc3f2250ee64",
    title: "JavaScript Type Mutability and Type Conversion — JS02",
    description:
      "This is A detailed article about Type Mutability and type conversion in javascript.",
    time: "3",
  },
  {
    link: "https://medium.com/@nikhar-dev/this-is-all-you-need-to-know-about-strings-in-javascript-ed9c6c7e3786",
    title: "This is all you need to know about Strings in JavaScript",
    description: "This is Detailed article about Strings in JavaScript.",
    time: "5",
  },
  {
    link: "https://medium.com/@nikhar-dev/this-is-all-you-need-to-know-about-strings-in-javascript-ed9c6c7e3786",
    title: "This is all you need to know about Strings in JavaScript",
    description: "This is Detailed article about Strings in JavaScript.",
    time: "5",
  },
  {
    link: "https://medium.com/@nikhar-dev/this-is-all-you-need-to-know-about-strings-in-javascript-ed9c6c7e3786",
    title: "This is all you need to know about Strings in JavaScript",
    description: "This is Detailed article about Strings in JavaScript.",
    time: "5",
  },
];
