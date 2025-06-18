"use client"
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white z-50"
          aria-label="scroll to top"
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTop;