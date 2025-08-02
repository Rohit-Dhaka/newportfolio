import React from "react";
import { Code2 ,Monitor ,Server} from "lucide-react";

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

const Skills = () => {
  



  const skills = [
    { icon: Html, name: "HTML" },
    { icon: Css, name: "CSS" },
    { icon: Js, name: "JavaScript" },
    { icon: Bootstrap, name: "Bootstrap" },
    { icon: Tailwindcss, name: "TailwindCSS" },
    { icon: Reacticon, name: "React" },
    { icon: Git, name: "Git" },
    { icon: Github, name: "GitHub" },
    { icon: Node, name: "Node.js" },
    { icon: Express, name: "Express.js" },
    { icon: Mongodb, name: "MongoDB" },
  ];

  return (
    <div   className="py-8 md:py-12 lg:py-16 " id="skills">
      <div className="container">
        {/* Header */}
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
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Category header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 max-sm:items-center ">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r p-3 shadow-glow flex items-center justify-center">
            
            <Monitor className="text-gradient-primary" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">Frontend</h3>
            <p className="text-sm sm:text-base text-muted-foreground">This is frontend</p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:gap-6">
          {skills.slice(0,6).map((skill, i) => (
            <div
              key={i}
              className={`group modern-card flex flex-col items-center justify-center max-w-[172px] w-full p-4 sm:p-6 hover-lift text-center `}
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

         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 pt-12 max-sm:items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r p-3 shadow-glow flex items-center justify-center">
            
            <Server className="text-gradient-primary" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">Backend</h3>
            <p className="text-sm sm:text-base text-muted-foreground">This is backend</p>
          </div>
        </div>
          <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:gap-6">
          {skills.slice(-3).map((skill, i) => (
            <div
              key={i}
              className={`group modern-card flex flex-col items-center justify-center max-w-[172px] w-full p-4 sm:p-6 hover-lift text-center `}
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
