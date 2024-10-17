import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaNode,
  FaCloud,
  FaAws,
  FaServer,
  FaGitAlt,
  FaDocker,
  FaTasks,
  FaCoffee,
  FaCode,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-red-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-yellow-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-green-500" />,
    text: "Experienced in Python, leveraging it for backend development, automation, and data processing to build robust solutions.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaCoffee className="h-16 w-16 text-brown-500" />,
    text: "Proficient in Java, developing scalable enterprise solutions and mobile applications with object-oriented principles.",
  },
  {
    id: nanoid(),
    title: "C",
    icon: <FaCode className="h-16 w-16 text-gray-500" />,
    text: "Skilled in C programming, developing efficient low-level systems and working with memory management and embedded systems.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNode className="h-16 w-16 text-green-600" />,
    text: "Proficient in Node.js, creating fast and scalable server-side applications with seamless API integrations.",
  },
  {
    id: nanoid(),
    title: "Azure Cloud Services",
    icon: <FaCloud className="h-16 w-16 text-blue-700" />,
    text: "Hands-on experience with Azure Cloud Services, deploying serverless functions, building CI/CD pipelines, and managing scalable cloud resources.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaAws className="h-16 w-16 text-orange-400" />,
    text: "Proficient with AWS, including S3 for storage and EC2 for scalable deployments, ensuring robust cloud-based solutions.",
  },
  {
    id: nanoid(),
    title: "Jenkins",
    icon: <FaServer className="h-16 w-16 text-red-500" />,
    text: "Experienced with Jenkins, automating build pipelines for continuous integration and deployment across multiple environments.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitAlt className="h-16 w-16 text-red-500" />,
    text: "Proficient in Git and version control tools, ensuring smooth collaboration and code management across teams.",
  },
  {
    id: nanoid(),
    title: "Jira",
    icon: <FaTasks className="h-16 w-16 text-blue-400" />,
    text: "Skilled in Jira, managing Agile workflows and tracking project tasks for effective team collaboration.",
  },
];

import worseIkeaImage from "./assets/worse-ikea-image.png";
import mixMasterImage from "./assets/mix-master-image.png";
import miniProjectsImage from "./assets/mini-projects-image.png";

export const projects = [
  {
    id: nanoid(),
    img: worseIkeaImage,
    url: "https://ajf-worse-ikea.netlify.app/",
    github: "https://github.com/AjFroster/worse-ikea-furniture-store",
    title: "Worse Ikea",
    text: "A joke web app that embraces the frustrations of self-assembled furniture while showcasing my skills as a full-stack developer with 3+ years of experience. Built with React, Redux, React Query, React Router, and styled using DaisyUI and Tailwind CSS, the app delivers an engaging, responsive experience.",
  },
  {
    id: nanoid(),
    img: mixMasterImage,
    url: "https://ajf-drink-lookup.netlify.app",
    github: "https://github.com/AjFroster/Mix-Master",
    title: "Mix Master",
    text: "This React project is a cocktail discovery application that uses TheCocktailDB API to fetch and display information on various cocktails. Users can search for cocktails, view detailed information, and navigate between different pages such as the home, cocktail details, and newsletter sign-up.",
  },
  {
    id: nanoid(),
    img: miniProjectsImage,
    url: "https://ajf-web-portfolio-mini.netlify.app",
    github: "https://github.com/AjFroster/CMS-Project",
    title: "Mini React Projects",
    text: "A simple mini web app that contains lots of mini projects exploring some basic and more advanced features of the react framework.",
  },
  ,
];
