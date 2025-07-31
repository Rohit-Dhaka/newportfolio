import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import React from 'react'
import { SocalDescord, SocalGithub, SocalInsagram, SocalLindin, SocalTwiter } from "../common/Icon";



const Footer = () => {
    const cureentyear = new Date().getFullYear();
    


 


    const socalLinks = [
      {
        socalicon:<SocalInsagram/>,
        socallink:""
        
        
      },
      {
        socalicon:  <SocalDescord/>,
        socallink: "https://discord.com/channels/@me"
      },
       {
        socalicon:  <SocalGithub/>,
        socallink: "https://github.com/Rohit-Dhaka"
      },
       {
        socalicon:  <SocalLindin/> ,
        socallink: "https://www.linkedin.com/in/rohit-dhaka-17ba9a253/"
      },
       {
        socalicon: <SocalTwiter/> ,
        socallink: "https://x.com/RohitDh02392225"
      },
    ]


    return (
        <footer className='  overflow-hidden  '>     
        
        
                       
            <div className="container max-w-custom  ">                                   
            <div className="flex justify-center gap-4 pt-16 pb-10">
              {socalLinks.map((socal,i) =>(
                <div key={i}>
                  <a href={socal.socallink} target='_blank' className='w-8 h-8 bg-white   rounded-full hover:shadow-glow duration-300 ease-linear group  flex items-center justify-center'> <div className=" group-hover:scale-110 duration-300  ease-linear"> {socal.socalicon}</div></a>
                </div>
              ))}
           
            </div>                            
                       <div className="flex justify-center pb-16">
                       <ul className='flex sm:gap-[18px] gap-[12px] flex-wrap justify-center'>                            
                            <li>
                                <a href="#home" className=" text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full font-poppins">Home</a>
                            </li>
                            <li>
                                <a href="#skill" className=" text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full font-poppins">Skills</a>
                            </li>
                            <li>
                                <a href="#expertise" className=" text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full font-poppins">Expertise</a>
                            </li>
                            <li>
                                <a href="#project" className=" text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full font-poppins">Project</a>
                            </li>
                            <li>
                                <a href="#contact" className=" text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full font-poppins">Contact Me</a>
                            </li>
                        </ul>
                       </div>                                                                            
            </div>
            <h6 className=' text-white py-4 border-t-[1px] border-solid border-white text-center font-inter '>©{cureentyear} | All Rights Reserved</h6>
        </footer>
    )
}
export default Footer

