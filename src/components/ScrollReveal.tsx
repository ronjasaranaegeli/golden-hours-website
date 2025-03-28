
import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      // Allgemeine Reveal-Animation für Elemente mit der Klasse 'reveal'
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    
    // Initial check - wait a bit longer to let the curtain animation initialize
    setTimeout(reveal, 600);
    
    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []);
  
  return null;
};

export default ScrollReveal;
