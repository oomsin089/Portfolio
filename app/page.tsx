"use client"
import { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Hero from '../app/main/main';
import About from '../app/about/about';
import Skills from '../app/skill/skill';
import Projects from '../app/project/project';
import Experience from '../app/experience/experience';
import Contact from '../app/contact/contact';
import Navbar from '../navbar/navbar';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <div className="relative">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        <Zoom in={showScrollTop}>
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            className="!fixed bottom-8 right-8 z-50"
            sx={{
              bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                bgcolor: '#5a6fd8'
              }
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </div>
    </>
  );
}