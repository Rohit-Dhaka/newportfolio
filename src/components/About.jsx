import React, { useEffect, useState } from "react";
import { User, Heart, Code, Coffee, BookOpen, Target } from "lucide-react";
import Aboutimg from '../assets/images/rohit.jpg'
const About = () => {
 
 

  return (
    <div id="about-section" className="py-8 md:py-12 lg:py-16 relative overflow-hidden  ">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-gradient-accent to-gradient-pink rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container relative z-10" id="about">
        
        <div className={`text-center mb-14 `}>
          <div className="inline-flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-gradient-primary" />
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
              Get to know me
            </span>
          </div>
          <h2 className="heading-secondary mb-6 font-jetbrains">
            <span className="text-gradient font-Libre">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Allow me to introduce myself and share my journey in technology and beyond.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          <div className={`flex justify-center `}>
            <div className="relative group">
              
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              
              <div className="relative modern-card p-8 hover-lift">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={Aboutimg}
                    alt="Rohit dhaka"
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                
                <div className="absolute -top-4 -right-4 modern-card p-3 animate-float">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          
          <div className={`space-y-8 `} >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient">Rohit Dhaka</h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My name is <span className="text-gradient font-semibold">Rohit Dhaka</span>. 
                  My interests span across technology, literature, and culinary arts. I am certified 
                  in <span className="text-gradient font-semibold">Frontend Development</span> from 
                  Radial Code, Hisar, and in <span className="text-gradient font-semibold">Backend </span> 
                  from TenC Coding Campues
                </p>
                
                <p>
                  Known for my <span className="text-gradient font-semibold">patience and tenacity</span>, 
                  I bring a focused and aggressive approach to meeting project deadlines and ensuring 
                  high-quality deliverables.
                </p>
                
                <p>
                  I have interests not only in technology but also in reading books, watching movies, 
                  video games, and cooking. I excel in meeting deadlines for my work.
                </p>
              </div>
            </div>

          
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default About;
