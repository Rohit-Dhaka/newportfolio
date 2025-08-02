import {  Linkedin, Github  ,Twitter} from "lucide-react";


export const NavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#myProject" },
  { name: "Contact Me", href: "#contact" },
];


export const SOCIAL_ICON_LINKS = [
  {
    id: "github",
    icon: Github,
    urlKey: "https://github.com/Rohit-Dhaka",
    gradient: "from-pink-500 to-purple-600",
    color: "text-pink-500",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    urlKey: "https://www.linkedin.com/in/rohit-dhaka-17ba9a253/",
    gradient: "from-blue-500 to-cyan-600",
    color: "text-sky-500",
  },
  {
    id: "twitter",
    icon: Twitter,
    urlKey: "https://x.com/RohitDh02392225",
    gradient: "from-indigo-500 to-purple-600",
    color: "text-indigo-500",
  },
];

