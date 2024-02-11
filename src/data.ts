import {
  AppWindow,
  FileCode,
  FileEditIcon,
  GanttChartSquare,
  Github,
  Home,
  Linkedin,
  Pizza,
  Table2,
  TwitterIcon,
  User2,
  Youtube,
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
    link: "https://twitter.com/nikharSavaliya",
    icon: TwitterIcon,
  },
];

// ****** Project Data ******
export const projects = [
  {
    img: FileEditIcon,
    projectName: "Pearl - Full stack Blog website",
    projectLink: "",
    repository: "https://github.com/Nikhar-savaliya/Pearl",
    projectDetail:["Modern Blog Editor using Editor JS.",
    "Google Authentication for Users",
    "Search Page for Searching Blogs & users & Dedicated user profiles with their social links and written blogs.",
    "It's mobile responsive with a modern design + fade-in page animation."],
    techStack: ["React", "Tailwind", "JavaScript", "Express.js", "MongoDB", "Firebase"],
  },
  {
    img: AppWindow,
    projectName: "Portfolio Website",
    projectLink: "https://nikhar-savaliya.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/nikhar.dev",
    projectDetail:["this website ( portfolio ) has tech stack of React and tailwind for styling.","React-Router-dom for dynamic routing","Lucide-react icon for beautiful icons"],
    techStack: ["React", "Tailwind", "TypeScript" ],
  },
  {
    img: Youtube,
    projectName: "Youtube Homepage Clone",
    projectLink: "https://you-tube-clone-nikhar-savaliya.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/YouTube-Clone",
    projectDetail:["this project is youtube homepage clone, i created when i was learning pure HTML, CSS and JS.","HTML and css for youtube homepage design", "Javascript for functionality"],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: GanttChartSquare,
    projectName: "SkillSensei",
    projectLink: "https://skill-sensei.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/SkillSensei",
    projectDetail:["A landing page for company that selles courses related to self improvement.","HTML and css for youtube homepage design", "Javascript for functionality"],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: Pizza,
    projectName: "Pizza menu",
    projectLink: "https://pizza-menu-nine.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/pizza-menu",
    projectDetail: ["this project is a menu for restraunt, created using React.js","react with CSS for page styling", "javascipt as language"],
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

export const articleData = [
  {
    link: "https://medium.com/@nikhar-dev/a-deep-dive-into-javascript-01-9b6ce63944ae",
    title: "A Deep dive into JavaScript - JS01",
    description:
      ["This article is published on medium.com, it is about basics of javascript."],
    time: "5",
  },
  {
    link: "https://medium.com/@nikhar-dev/javascript-type-mutability-and-type-conversion-js02-fc3f2250ee64",
    title: "JavaScript Type Mutability and Type Conversion — JS02",
    description:
      ["This is A detailed article about Type Mutability and type conversion in javascript."],
    time: "3",
  },
  {
    link: "https://medium.com/@nikhar-dev/this-is-all-you-need-to-know-about-strings-in-javascript-ed9c6c7e3786",
    title: "This is all you need to know about Strings in JavaScript",
    description:[ "This is Detailed article about Strings in JavaScript."],
    time: "5",
  },
];
