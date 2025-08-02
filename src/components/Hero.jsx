import {
  Download,
  Loader2,   
  CheckCircle,
  Sparkles
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {  SOCIAL_ICON_LINKS } from "../common/Helper";

const Hero = () => {

  const [downloadState, setDownloadState] = useState("idle"); // idle | downloading | done



const handleDownload = () => {
  setDownloadState("downloading");

  const link = document.createElement("a");
  link.href = "/Rohit-Resume.pdf";
  link.download = "Rohit-Resume.pdf";
  link.click();

  setTimeout(() => {
    setDownloadState("done");

    // Reset icon to default after a few seconds
    setTimeout(() => {
      setDownloadState("idle");
    }, 3000);
  }, 2000); // simulate loading for 2 seconds
};

  




  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-pattern ">
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gradient-accent to-gradient-pink rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gradient-blue to-gradient-cyan rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Mouse follower effect */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-gradient-primary to-gradient-secondary opacity-5 blur-3xl pointer-events-none transition-all duration-1000 ease-out"
       
      ></div>

      <div className="w-full container relative z-10 text-center lg:text-left" id="home">
        {/* Status indicator */}
        <div className="flex items-center pt-16 gap-3 mb-4 justify-center lg:justify-start animate-fade-in">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full h-3 w-3 animate-pulse shadow-glow"></span>
          <p className="text-lg font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Available for opportunities
          </p>
          <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
        </div>

        {/* Main heading */}
        <h3 className="block text-white text-4xl mb-3">Hey, I'm</h3>
        <div >
          <h1 className="text-7xl pb-8 lg:text-8xl font-bold sm:mb-4 heading-primary">
            Rohit Dhaka
          </h1>
        </div>

        {/* Typewriter effect */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground tracking-wider">
            <Typewriter
              words={[
                
                "Fullstack Developer",               
                "Frontend Developer",
                "Backend Devloper"
                
              ]}
              loop={50}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>

        {/* Social links */}
        <div className="flex justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="modern-card p-4 flex gap-6 items-center hover-lift">
            {SOCIAL_ICON_LINKS.map(({ id, icon: Icon, urlKey, gradient, color }) => {
              
              

              return (
                
                <a key={id} target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                  <Icon className={`relative ${color} w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-glow`} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex  gap-6 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
         <button
  onClick={handleDownload}
  className="bg-gradient-to-r px-6 py-4 rounded-[50px] gap-2 flex from-gradient-primary to-gradient-secondary hover:from-gradient-secondary hover:to-gradient-accent text-white items-center"
>
  {downloadState === "downloading" && (
    <Loader2 className="animate-spin" />
  )}
  {downloadState === "done" && (
    <CheckCircle className="text-white" />
  )}
  {downloadState === "idle" && (
    <Download />
  )}
  <span>
    {downloadState === "downloading"
      ? "Downloading..."
      : downloadState === "done"
      ? "Downloaded"
      : "Download Resume"}
  </span>
</button>


     
        </div>


      

        {/* Decorative gradient line */}
        <div className="mt-12 animate-fade-in " style={{ animationDelay: '1.2s' }}>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-gradient-primary to-transparent rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;