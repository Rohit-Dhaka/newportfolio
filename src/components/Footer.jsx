import React from "react";
import {
  SocalDescord,
  SocalGithub,
  SocalInsagram,
  SocalLindin,
  SocalTwiter,
} from "../common/Icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socalLinks = [
    { socalicon: <SocalInsagram />, socallink: "" },
    { socalicon: <SocalDescord />, socallink: "https://discord.com/channels/@me" },
    { socalicon: <SocalGithub />, socallink: "https://github.com/Rohit-Dhaka" },
    { socalicon: <SocalLindin />, socallink: "https://www.linkedin.com/in/rohit-dhaka-17ba9a253/" },
    { socalicon: <SocalTwiter />, socallink: "https://x.com/RohitDh02392225" },
  ];

  const navLinks = [
    { linkname: "Home", navlink: "#home" },
    { linkname: "Skills", navlink: "#skills" },
    { linkname: "Expertise", navlink: "#expertise" },
    { linkname: "Project", navlink: "#project" },
    { linkname: "Contact Me", navlink: "#contact" },
  ];

  return (
    <footer className="overflow-hidden text-white">
      <div className="container max-w-custom">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-16 pb-10">
          {socalLinks.map((socal, i) => (
            <a
              key={i}
              href={socal.socallink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full hover:shadow-glow group flex items-center justify-center duration-300"
            >
              <div className="group-hover:scale-110 duration-300">
                {socal.socalicon}
              </div>
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center pb-16">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {navLinks.map((nav, i) => (
              <li key={i}>
                <a
                  href={nav.navlink}
                  className="text-white hover:text-[#A362FF] duration-300 relative font-poppins cursor-pointer
                  after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] 
                  after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] 
                  after:hover:left-0 after:hover:translate-x-0 after:hover:w-full"
                >
                  {nav.linkname}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <h6 className="text-white py-4 border-t border-white text-center font-inter">
        © {currentYear} | All Rights Reserved
      </h6>
    </footer>
  );
};

export default Footer;
