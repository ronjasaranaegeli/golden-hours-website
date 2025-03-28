
import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Heart } from "lucide-react";
import { useRef, useEffect } from "react";

const BewusstseinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    <section id="bewusstsein" className="py-24 md:py-32 bg-gradient-to-b from-golden-50 to-transparent" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal" ref={titleRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
            Die Reise zu deinem wahren Selbst
          </h2>
          <p className="text-lg leading-relaxed text-forest-800">
            Entdecke die transformative Kraft der Selbsterkenntnis
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 reveal" ref={cardRef}>
          <div className="h-[450px] md:h-[550px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-golden-100 to-golden-50 shadow-lg border border-golden-200">
            <EvervaultCard 
              text={<Heart className="w-16 h-16 text-forest-700" />} 
              customWords={customWords}
              className="hover:scale-[1.03] transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BewusstseinSection;
