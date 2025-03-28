
import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BewusstseinSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  // List of custom words for the hover effect
  const customWords = [
    "Herzenswärme", "Mitgefühl", "Verbundenheit", "Empathie", "Freundlichkeit", 
    "Güte", "Wohlwollen", "Zuneigung", "Akzeptanz", "Wertschätzung", 
    "Innere Harmonie", "Klarheit", "Erkenntnis", "Wachheit", "Achtsamkeit", 
    "Intuition", "Weisheit", "Präsenz", "Innerer Frieden", "Selbstreflexion", 
    "Tiefe", "Verständnis", "Authentizität", "Potenzial", "Einzigartigkeit", 
    "Selbstfindung", "Selbstvertrauen", "Selbstwert", "Identität", "Wahre Essenz", 
    "Innere Stärke", "Selbstermächtigung", "Transformation", "Entfaltung", "Wachstum", 
    "Sinnhaftigkeit", "Lebensfreude", "Erfüllung", "Ganzheitlich", "Inspiration"
  ];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="bewusstsein" 
      className="py-0 bg-gradient-to-b from-golden-50 to-transparent overflow-hidden relative h-screen flex items-center justify-center w-full"
      ref={sectionRef}
    >
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          background: 'radial-gradient(circle at center, rgba(209, 183, 128, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-6 reveal" ref={titleRef}>
          <h2 className="font-serif text-2xl md:text-4xl font-medium heading-underline inline-block">
            Die Reise zu deinem wahren Selbst
          </h2>
        </div>

        <div className="w-full h-full reveal flex items-center" ref={cardRef} style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
          <div className="h-full w-full overflow-hidden bg-gradient-to-br from-golden-100 to-golden-50">
            <EvervaultCard 
              text={<h3 className="font-serif text-2xl md:text-3xl">A Journey of Self Discovery</h3>} 
              customWords={customWords}
              className="hover:scale-[1.02] transition-transform duration-500 h-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BewusstseinSection;
