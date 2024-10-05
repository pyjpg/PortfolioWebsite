"use client";
import React, { useEffect, useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home'); 

  const handleScroll = () => {
    const sections = ['home', 'projects', 'experience', 'contact']; 
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2; 

        
        if (sectionCenter >= 0 && sectionCenter < window.innerHeight) {
          currentSection = section; 
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a 
          href="#home" 
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Home
        </a>
        <a 
          href="#projects" 
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Projects
        </a>
        <a 
          href="#experience" 
          className={`nav-item ${activeSection === 'experience' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Work
        </a>
        <a 
          href="#contact" 
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
