import { Instagram, Linkedin, Github, Download } from "lucide-react";
import { Discord } from "../common/Icon";

export const NavLinks = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#MyProject" },
  { name: "Contact Me", href: "#Contact" },
];
export const SOCIAL_LINKS = (user) => [
  {
    url: user?.githubURL,
    Icon: Github,
    label: "GitHub",
    color: "text-foreground",
  },
  {
    url: user?.linkedInURL,
    Icon: Linkedin,
    label: "LinkedIn",
    color: "text-blue-600",
  },
  {
    url: user?.instagramURL,
    Icon: Instagram,
    label: "Instagram",
    color: "text-pink-500",
  },
  {
    url: user?.discordURL,
    Icon: Discord,
    label: "Discord",
    color: "text-indigo-500",
  },
];
export const SOCIAL_ICON_LINKS = [
  {
    id: "instagram",
    icon: Instagram,
    urlKey: "instagramURL",
    gradient: "from-pink-500 to-purple-600",
    color: "text-pink-500",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    urlKey: "linkedInURL",
    gradient: "from-blue-500 to-cyan-600",
    color: "text-sky-500",
  },
  {
    id: "discord",
    icon: Discord,
    urlKey: "discordURL",
    gradient: "from-indigo-500 to-purple-600",
    color: "text-indigo-500",
  },
];

