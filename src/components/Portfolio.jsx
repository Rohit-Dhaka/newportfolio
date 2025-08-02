import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Folder,
  ExternalLink,
  Eye,
  Github,
  ExternalLinkIcon,
} from "lucide-react";
import { Card } from "./ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Solana from "../assets/images/solana-business.webp";
import Digiency from "../assets/images/Digiency.webp";
import Laslesvpn from "../assets/images/Laslesvpn.webp";
import Digiencytwo from "../assets/images/Digiency-2.webp";
import SaintShiba from "../assets/images/SaintShiba.webp";
import Vipe from "../assets/images/Vipe.webp";
import Crappo from "../assets/images/Crappo.webp";
import Sports from "../assets/images/Sports.webp";
import Company from "../assets/images/Company.webp";
import Noblemind from "../assets/images/Noblemind.webp";
import Evergreen from "../assets/images/Evergreen.webp";
import Julian from "../assets/images/Julian.webp";
import Hustlin from "../assets/images/Hustlin.webp";
import Blandit from "../assets/images/Blandit.webp";
import Maitre from "../assets/images/Maitre.webp";
import Travel from "../assets/images/Travel.webp";
import CVHawk from "../assets/images/CVHawk.webp";
import Dashboard from "../assets/images/Dashboard.webp";
import IDox from "../assets/images/IDox.webp";
import Cybertise from "../assets/images/Cybertise.webp";
import Gardena from "../assets/images/Gardena.webp";
import SSolana from "../assets/images/S-Solana.webp";
import Exclusive from "../assets/images/Exclusive.webp";
import Ebook from "../assets/images/Ebook.webp";
import Atlantic from "../assets/images/Atlantic.webp";
import Gxxx from "../assets/images/Gxxx.webp";
import Ice from "../assets/images/Ice.webp";
import Sclair from "../assets/images/Sclair.webp";
import Marc from "../assets/images/Marc.webp";
import Projectimages from "../assets/images/projects.webp";

import Blogimg from "../assets/images/blog.png";
import { GithubLink, LiveLink, Screen } from "../common/Icon";

const Portfolio = () => {
  const uigallerylink = [
    {
      livelink: "https://velvety-puppy-8357f5.netlify.app/",
      img: Solana,
      alt: "Solana ",
    },
    {
      livelink: "https://dapper-lokum-cc1653.netlify.app/",
      img: SaintShiba,
      alt: "Saint Shiba ",
    },
    {
      livelink: "https://beamish-tartufo-ae7991.netlify.app/",
      img: Evergreen,
      alt: "Evergreen ",
    },
    {
      livelink: "https://tourmaline-axolotl-cef99a.netlify.app/",
      img: Noblemind,
      alt: "Noblemind ",
    },
    {
      livelink: "https://starlit-zuccutto-00c7d4.netlify.app/",
      img: Digiency,
      alt: "Digiency ",
    },
    {
      livelink: "https://mellifluous-raindrop-e4e7e3.netlify.app/",
      img: Laslesvpn,
      alt: "Laslesvpn ",
    },
    {
      livelink: "https://splendorous-kataifi-ae1817.netlify.app/",
      img: Digiencytwo,
      alt: "Digiency Two ",
    },
    {
      livelink: "https://brilliant-tulumba-d17089.netlify.app/",
      img: Vipe,
      alt: "Vipe ",
    },
    {
      livelink: "https://bright-biscuit-25e953.netlify.app/",
      img: Crappo,
      alt: "Crappo ",
    },
    {
      livelink: "https://jade-crepe-cc4218.netlify.app/",
      img: Sports,
      alt: "Sports ",
    },
    {
      livelink: "https://starlit-belekoy-9b52ac.netlify.app/",
      img: Company,
      alt: "Company ",
    },
    {
      livelink: "https://comfy-basbousa-62a0c3.netlify.app/",
      img: Julian,
      alt: "Julian ",
    },
    {
      livelink: "https://fastidious-jelly-0a2dab.netlify.app/",
      img: Hustlin,
      alt: "Hustlin ",
    },
    {
      livelink: "https://glistening-kulfi-0d85fe.netlify.app/",
      img: Blandit,
      alt: "Blandit ",
    },
    {
      livelink: "https://papaya-sopapillas-c561c0.netlify.app/",
      img: Maitre,
      alt: "Maitre ",
    },
    {
      livelink: "https://helpful-zabaione-fb81ec.netlify.app/",
      img: Travel,
      alt: "Travel ",
    },
    {
      livelink: "https://superlative-toffee-3a8715.netlify.app/",
      img: CVHawk,
      alt: "CVHawk ",
    },
    {
      livelink: "https://melodious-daifuku-2bc76c.netlify.app/",
      img: Dashboard,
      alt: "Dashboard ",
    },
    {
      livelink: "https://dapper-twilight-4523bd.netlify.app/",
      img: IDox,
      alt: "IDox ",
    },
    {
      livelink: "https://stirring-mooncake-ddb9e9.netlify.app/",
      img: Cybertise,
      alt: "Cybertise ",
    },
    {
      livelink: "https://bespoke-baklava-9603e6.netlify.app/",
      img: Gardena,
      alt: "Gardena ",
    },
    {
      livelink: "https://frabjous-gingersnap-228668.netlify.app/",
      img: SSolana,
      alt: "Solana Second Version ",
    },
    {
      livelink: "https://exclusive-game-nine.vercel.app/",
      img: Exclusive,
      alt: "Exclusive Game ",
    },
    {
      livelink: "https://fitness-myths.vercel.app/",
      img: Ebook,
      alt: "Fitness Ebook ",
    },
    {
      livelink: "https://atlantic-azure.vercel.app/",
      img: Atlantic,
      alt: "Atlantic Project ",
    },
    {
      livelink: "https://blockchain-eight-eta.vercel.app/",
      img: Gxxx,
      alt: "Blockchain Gxxx ",
    },
    {
      livelink: "https://ice-blast.vercel.app/",
      img: Ice,
      alt: "Ice Blast ",
    },
    {
      livelink: "https://sclair-q6g7fdthm-rohit-dhakas-projects.vercel.app/",
      img: Sclair,
      alt: "Sclair ",
    },
    {
      livelink: "https://hubrich-atzehdynj-rohit-dhakas-projects.vercel.app/",
      img: Marc,
      alt: "Hubrich Marc ",
    },
  ];

  const projects = [
    {
      title: "Example Project",
      label: "Featured Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: Blogimg,
      liveUrl: "https://your-live-project-link.com",
      githubUrl: "https://github.com/your-username/project-repo",
    },
    {
      title: "Example Project",
      label: "Featured Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: Blogimg,
      liveUrl: "https://your-live-project-link.com",
      githubUrl: "https://github.com/your-username/project-repo",
    },
    {
      title: "Example Project",
      label: "Featured Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: Blogimg,
      liveUrl: "https://your-live-project-link.com",
      githubUrl: "https://github.com/your-username/project-repo",
    },
  ];

  return (
    <div
      id="portfolio-section"
      className="py-8 md:py-12 lg:py-16 relative overflow-hidden "
    >
      <div className="container relative z-10" id="myProject">
        
        <div className={`text-center mb-8 `}>
          <div className="inline-flex items-center gap-3 mb-4">
            <Folder className="w-8 h-8 text-gradient-primary" />
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="heading-secondary mb-4">
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and creativity in
            web development.
          </p>
        </div>

        <div className="">
          {projects.map((pro, i) => (
            <div
              key={i}
              className={`flex flex-row flex-wrap mx-[-12px] justify-end relative pt-24 items-center ${
                i === 1 ? "flex-row-reverse" : ""
              }`}
            >
              
              <div
                className={`absolute ${
                  i === 1 ? "sm:right-[-5%]" : "sm:left-[-5%]"
                } top-[-30%]`}
              >
                <Screen className="w-full" />
              </div>

              
              <div
                className={`lg:absolute ${
                  i === 1 ? "lg:end-0" : "lg:start-0"
                } md:w-6/12 w-full px-3 z-10`}
              >
                <div className="modern-card sm:p-2 p-1 rounded-md">
                  <img
                    src={pro.image}
                    alt=""
                    className="rounded-lg sm:translate-x-[-8px] sm:translate-y-[8px] translate-x-[-4px] translate-y-[4px]"
                  />
                </div>
              </div>

              
              <div
                className={`lg:w-7/12 md:w-6/12 px-3 flex  z-10 md:pt-0 pt-3 ${
                  i === 1 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`flex flex-col ${
                    i === 1
                      ? "md:items-start text-left"
                      : "md:items-end text-left"
                  }`}
                >
                  <h6 className="font-poppins text-gradient font-semibold">
                    {pro.label}
                  </h6>
                  <h4 className="font-poppins text-white text-[34px] font-semibold sm:pb-7 pb-3">
                    {pro.title}
                  </h4>

                  <div
                    className={`rounded-[14px] bg-gradient-to-r modern-card p-4 lg:block md:hidden block ${
                      i === 1
                        ? "from-transparent to-[#1a1a2e]"
                        : "from-[#1a1a2e] to-transparent"
                    }`}
                  >
                    <div className="max-sm:line-clamp-3">{pro.description}</div>
                  </div>
                  <div className="lg:pt-8 md:pt-0 pt-6 flex gap-3">
                    
                    <div className="w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group text-white cursor-pointer">
                      <a href={pro.liveUrl}>
                        <ExternalLink className="text-black" />
                        <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%] bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100 text-nowrap duration-300 text-[12px]">
                          Live
                        </div>
                      </a>
                    </div>


                    <div className="w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group text-white cursor-pointer">
                      <a href={pro.githubUrl}>
                        <Github className="text-black" />
                        <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%] bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100 text-nowrap duration-300 text-[12px]">
                          Github
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        
        <div className="text-center mb-8 sm:mb-16 pt-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-primary" />
            <span className="text-base sm:text-lg font-medium text-muted-foreground uppercase tracking-wider">
              Frontend Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Showcase & UI Gallery</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Explore a collection of responsive, interactive, and beautifully
            crafted frontend projects — built using modern web technologies like
            HTML, CSS, JavaScript, React, and more.
          </p>
        </div>

        <div className="pb-20 ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            allowTouchMove={false}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {uigallerylink.map((slide, i) => (
              <SwiperSlide key={i} className="pt-20">
                <div className="">
                  <a
                    href={slide.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer  overflow-hidden  rounded-xl "
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-[170px] inline-block rounded-lg hover:scale-105  duration-300 ease-linear"
                    />
                  </a>
                  <div className="pt-4 flex gap-2 items-center">
                    <div className="">
                      <a
                        href={slide.livelink}
                        className=" w-8 h-8  bg-gradient-primary rounded-full flex items-center justify-center"
                      >
                        <ExternalLink className="text-white " />
                      </a>
                    </div>
                    {slide.alt}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
