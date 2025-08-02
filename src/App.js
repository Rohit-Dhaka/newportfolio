import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';




function App() {
  
    useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
   <>
   
   
  {/* <Navbar/> */}
  {/* <Hero/> */}
  {/* <About/> */}
  <Skills/>
  {/* <Portfolio/> */}
  {/* <Contact/> */}
  {/* <Footer/> */}
  
  
   </>
  );
}

export default App;
