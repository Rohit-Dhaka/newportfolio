import React from "react";
import { SocalDescord } from "../common/Icon";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { NavLinks } from "../common/Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socalLinks = [
    // { socalicon: <Instagram  className=" text-gradient-primary" />,
    //  socallink: "https://instagram.com" }, 
    {
      socalicon: <SocalDescord className="text-gradient-primary" />,
      socallink: "https://discord.com/channels/@me",
    },
    {
      socalicon: <Github className="text-gradient-primary" />,
      socallink: "https://github.com/Rohit-Dhaka",
    },
    {
      socalicon: <Linkedin className="text-gradient-primary" />,
      socallink: "https://www.linkedin.com/in/rohit-dhaka-17ba9a253/",
    },
    {
      socalicon: <Twitter className="text-gradient-primary" />,
      socallink: "https://x.com/RohitDh02392225",
    },
  ];

  const contactDetails = [
    {
      type: "Email",
      icon: <Mail className="w-4 h-4 text-white" />,
      href: "mailto:rohitdhaka2110@gmail.com",
      text: "rohitdhaka2110@gmail.com",
    },
    {
      type: "Phone",
      icon: <Phone className="w-4 h-4 text-white" />,
      href: "tel:+918295817840",
      text: "+91 8295817840",
    },
  ];

  return (
    <footer className=" overflow-hidden">
      <div className="container ">
        
        <div className="flex justify-center gap-4 pt-16 pb-6">
          {socalLinks.map((socal, i) => (
            <a
              key={i}
              href={socal.socallink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white rounded-full group flex items-center justify-center hover:shadow-glow transition duration-300"
            >
              <div className="group-hover:scale-110 transition duration-300">
                {socal.socalicon}
              </div>
            </a>
          ))}
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm pb-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <a href={item.href}>{item.icon}</a>
              <a href={item.href} className="hover:underline">
                {item.text}
              </a>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center pb-16">
          <ul className="flex flex-wrap justify-center sm:gap-8 gap-4">
            {NavLinks.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link.href}
                  className="relative font-medium text-base transition-all duration-300 hover:text-gradient-primary focus:outline-none"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gradient-primary to-gradient-secondary group-hover:w-full transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 rounded-lg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
      <h6 className="text-center text-sm sm:text-base font-inter border-t border-white py-4">
        © {currentYear} | All Rights Reserved
      </h6>
    </footer>
  );
};

export default Footer;
