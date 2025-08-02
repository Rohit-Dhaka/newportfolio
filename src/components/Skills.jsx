import React from "react";
import { Code2, Monitor, Server, Puzzle  } from "lucide-react";

import Html from "../assets/svg/Html.svg";
import Css from "../assets/svg/Css.svg";
import Js from "../assets/svg/js.svg";
import Reacticon from "../assets/svg/React.svg";
import Bootstrap from "../assets/svg/bootstrap.svg";
import Tailwindcss from "../assets/svg/Tailwindcss.svg";
import Git from "../assets/svg/Git.svg";
import Github from "../assets/svg/Github.svg";
import Node from "../assets/svg/Node.svg";
import Express from "../assets/svg/Express.svg";
import Mongodb from "../assets/svg/Mongodb.svg";
import Postman from '../assets/svg/postman-icon.svg'
import Figma from '../assets/images/figmaicon.png'
import Cloudinary  from '../assets/images/cloudinary.png'
import Vercel from '../assets/svg/Vercelicon.svg'
import Api from '../assets/images/api.png'

const Skills = () => {
  const skills = [
    { icon: Html, name: "HTML", category: "frontend" },
  { icon: Css, name: "CSS", category: "frontend" },
  { icon: Js, name: "JavaScript", category: "frontend" },
  { icon: Bootstrap, name: "Bootstrap", category: "frontend" },
  { icon: Tailwindcss, name: "TailwindCSS", category: "frontend" },
  { icon: Reacticon, name: "React", category: "frontend" },

  // 🔸 Backend Skills
  { icon: Node, name: "Node.js", category: "backend" },
  { icon: Express, name: "Express.js", category: "backend" },
  { icon: Mongodb, name: "MongoDB", category: "backend" },
  { icon: Api, name: "Api", category: "backend" },

  // 🔸 Other Skills
  { icon: Git, name: "Git", category: "other" },
  { icon: Github, name: "GitHub", category: "other" },
  { icon: Postman, name: "Postman", category: "other" },
  { icon: Figma, name: "Figma", category: "other" },
  { icon: Vercel, name: "Vercel", category: "other" },
  { icon: Cloudinary, name: "Cloudinary", category: "other" },
  
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 " id="skills">
      <div className="container">
        
        <div className={`text-center mb-8 sm:mb-16 `}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-primary" />
            <span className="text-base sm:text-lg font-medium text-muted-foreground uppercase tracking-wider">
              My Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            A comprehensive overview of the technologies and tools I work with
            to bring ideas to life.
          </p>
        </div>

        
        <div className="flex flex-col xl:flex-row items-start sm:items-center gap-4 mb-8 max-sm:items-center ">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r p-3 shadow-glow flex items-center justify-center">
            <Monitor className="text-gradient-primary" />
          </div>
          <div className="max-xl:flex  max-xl:flex-col max-xl:items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">
              Frontend
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-xl:text-center">
              {" "}
              Building responsive user interfaces using React.js, Tailwind CSS,
              and modern JavaScript.
            </p>
          </div>
        </div>

        
        <div className="flex flex-wrap items-center justify-center w-full gap-3 sm:gap-6">
          {skills.filter((skill) => skill.category === "frontend").map((skill, i) => (
            <div
              key={i}
              className={`group modern-card flex flex-col items-center justify-center md:max-w-[172px] max-md:w-[47%] w-full max-sm:py-4  sm:p-6 hover-lift text-center ` } data-aos="fade-up"
            >
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto  shadow-light rounded-2xl p-2 sm:p-3  group-hover:shadow-glow transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-white group-hover:text-gradient transition-colors duration-300">
                {skill.name}
              </h4>
              <div className="absolute inset-0 bg-gradient-to-t from-gradient-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col  xl:flex-row items-start sm:items-center gap-4 mb-8 pt-12 max-sm:items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r p-3 shadow-glow flex items-center justify-center">
            <Server className="text-gradient-primary" />
          </div>
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">
              Backend
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-xl:text-center">
              Designing scalable server-side applications using Node.js,
              Express.js, and secure RESTful APIs.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full gap-3 sm:gap-6">
          {skills.filter((skill) => skill.category === "backend").map((skill, i) => (
            <div
              key={i}
              className={`group modern-card flex flex-col items-center justify-center md:max-w-[172px] max-md:w-[47%] w-full max-sm:py-4  sm:p-6 hover-lift text-center  `} data-aos="fade-up"
            >
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto  rounded-2xl p-2 sm:p-3  shadow-light group-hover:shadow-glow-lg transition-all duration-300 ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-white group-hover:text-gradient transition-colors duration-300">
                {skill.name}
              </h4>
              <div className="absolute inset-0 bg-gradient-to-t from-gradient-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row items-start sm:items-center gap-4 mb-8 pt-12 max-sm:items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r p-3 shadow-glow flex items-center justify-center">
            <Puzzle className="text-gradient-primary" />
          </div>
          <div className=" max-xl:flex max-xl:flex-col max-xl:items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">
              Tools & Other Skills
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-xl:text-center">
              Experienced with Git, GitHub, Postman, and Vercel for version
              control, API testing, and deployment.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-3 sm:gap-6">
          {skills.filter((skill) => skill.category === "other").map((skill, i) => (
            <div
              key={i}
              className={`group modern-card flex flex-col items-center justify-center md:max-w-[172px] max-md:w-[47%] w-full max-sm:py-4  sm:p-6 hover-lift text-center  `} data-aos="fade-up"
            >
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto  rounded-2xl p-2 sm:p-3  shadow-light group-hover:shadow-glow-lg transition-all duration-300 ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  
                </div>
              </div>
              <h4 className="text-white group-hover:text-gradient transition-colors duration-300">
                {skill.name}
              </h4>
              <div className="absolute inset-0 bg-gradient-to-t from-gradient-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
