import React, { useState, useEffect } from 'react';
import { Logo, Navcross, Navline } from "../common/Icon";


import { NavLinks } from '../common/Helper';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("max-lg:overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:overflow-hidden");
        }

        return () => {
            document.body.classList.remove("max-lg:overflow-hidden");
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${isScrolled
                ? ' backdrop-blur-xl border-b border-border/50 shadow-lg'
                : 'bg-transparent'
            }`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 max-lg:px-4 max-lg:py-3">                                                            
                   <Logo className="w-4 h-4 text-gradient-primary cursor-pointer" />                    
                    <nav className="flex xl:gap-[40px] gap-[12px] 2xl:gap-[40px] items-center">                        
                        <ul  className={`${isMenuOpen ? "right-0" : "right-100"
                            } flex gap-4 max-lg:absolute  max-lg:top-0  max-lg:w-full max-lg:h-screen max-lg:items-center max-lg:justify-center max-lg:flex-col duration-300 ease-linear     backdrop-blur-md bg-blue-900/5 `}>                           
                            {NavLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="relative group max-lg:transform max-lg:translate-y-8 max-lg:opacity-0 max-lg:animate-fade-in"
                                    style={{
                                        animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s',
                                        animationFillMode: 'forwards'
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <a
                                        href={link.href}
                                        className="relative font-medium text-base lg:text-sm xl:text-base transition-all duration-300 ease-out hover:text-gradient-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gradient-primary focus-visible:ring-offset-2 text-white rounded-sm px-3 py-2 max-lg:text-xl max-lg:py-3"
                                    >
                                        <span className="relative z-10">{link.name}</span>                                        
                                        <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary/10 to-gradient-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"></div>                                        
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gradient-primary to-gradient-secondary group-hover:w-full transition-all duration-300"></div>                                        
                                        <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary to-gradient-secondary rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></div>
                                    </a>
                                </li>
                            ))}                           
                        </ul>
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col gap-[6px] cursor-pointer lg:hidden z-10 ">
                            <span  className={` ${isMenuOpen ? " translate-y-[8px] rotate-45" : ""}  duration-300 ease-linear  w-[28px] rounded-lg h-[2px] bg-white inline-block`} ></span>
                            <span  className={` ${isMenuOpen ? " opacity-0 translate-x-5 " : ""}  duration-300 ease-linear  w-[28px] rounded-lg h-[2px] bg-white inline-block`} ></span>
                            <span  className={` ${isMenuOpen ? "translate-y-[-8px]  -rotate-45" : ""}  duration-300 ease-linear  w-[28px] rounded-lg h-[2px] bg-white inline-block`} ></span>
                        </div>                      
                    </nav>
                </div>
            </div>          
        </header>
    );
};

export default Navbar;