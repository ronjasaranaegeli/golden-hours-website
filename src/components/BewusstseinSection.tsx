
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
  const customQuestions = [
    "Wer bin ich, wenn es dunkel ist?",
    "Was sind meine tiefsten Wünsche?",
    "Wer ist meine Version 2.0?",
    "Weshalb bin ich hier auf der Erde?",
    "Wie geht es meinem inneren Kind?",
    "Was entfacht meine Leidenschaft?",
    "Wo finde ich wahre Freude?",
    "Was lässt mein Herz singen?",
    "Wie kann ich heute wachsen?",
    "Welche Gabe habe ich zu teilen?",
    "Was möchte in mir gelebt werden?",
    "Wie sieht mein Traumleben aus?",
    "Was nährt meine Seele wirklich?",
    "Welcher Schritt bringt mich näher?",
    "Was will ich heute erschaffen?",
    "Wie drücke ich meine Liebe aus?",
    "Was macht mich einzigartig?",
    "Wo ruft mein Potenzial mich hin?",
    "Wie finde ich Mut für Neues?",
    "Was kann ich heute loslassen?",
    "Wie finde ich meine innere Stärke?",
    "Was bedeutet Fülle für mich?",
    "Wie kann ich tiefer vertrauen?",
    "Welches Wunder wartet heute?",
    "Was inspiriert mich zutiefst?",
    "Wie diene ich der Welt am besten?",
    "Was brauche ich jetzt wirklich?",
    "Wie verbinde ich mich tiefer?",
    "Was ist meine Superkraft?",
    "Wie feiere ich mich selbst?",
    "Was lernt mein Herz gerade?",
    "Wo fühle ich mich am lebendigsten?",
    "Wie kann ich Grenzen sprengen?",
    "Was heilt in diesem Moment?",
    "Wie lebe ich meine Wahrheit?",
    "Welchen Samen möchte ich pflanzen?",
    "Was sagt meine Intuition mir?",
    "Wie bringe ich mehr Licht?",
    "Was bedeutet Erfolg für mein Herz?",
    "Wie bleibe ich mir selbst treu?",
    "Welcher Traum wartet noch?",
    "Was macht mein Leben magisch?",
    "Wie gehe ich liebevoller mit mir um?",
    "Was kann ich heute wertschätzen?",
    "Wie erschaffe ich mehr Harmonie?",
    "Was ist mein nächster mutiger Schritt?",
    "Wie öffne ich mein Herz weiter?",
    "Was bringt meine Augen zum Leuchten?",
    "Wie gestalte ich meinen Tag bewusst?",
    "Was ist mein schönster Beitrag?"
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
      className="py-0 bg-gradient-to-b from-background via-golden-950/80 to-background overflow-hidden relative h-screen flex items-center justify-center w-full"
      ref={sectionRef}
    >
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          background: 'radial-gradient(circle at center, rgba(209, 183, 128, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-6 reveal" ref={titleRef}>
          <h2 className="font-serif text-2xl md:text-4xl font-medium heading-underline inline-block text-golden-200">
            Die Reise zu deinem wahren Selbst
          </h2>
        </div>

        <div className="w-full h-full reveal flex items-center" ref={cardRef} style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
          <div className="h-full w-full overflow-hidden bg-golden-950">
            <EvervaultCard 
              text={<h3 className="font-serif text-2xl md:text-3xl">A Journey of Self Discovery</h3>} 
              customWords={customQuestions}
              className="hover:scale-[1.02] transition-transform duration-500 h-full" 
            />
          </div>
        </div>
      </div>
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default BewusstseinSection;
