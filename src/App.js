import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';




function App() {
  
useEffect(() => {
  // Enable dark mode
  document.documentElement.classList.add("dark");

  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  });
}, []);


  return (
   <>
   
   
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  <Footer/>
  
  
   </>
  );
}

export default App;
