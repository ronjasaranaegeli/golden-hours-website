
import { useEffect, useRef } from 'react';
import InfoBox from './ui/InfoBox';
import { TooltipComponent } from './ui/TooltipComponent';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) contentRef.current.classList.add('active');
          if (imageRef.current) imageRef.current.classList.add('active');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative z-20" 
      ref={sectionRef}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-left lg:bg-center z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/plant-leaves-shadow-background-mirrored.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-2 order-1 lg:order-1 reveal" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-100 rounded-sm -z-10"></div>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img 
                  src="/images/golden-hours-image-5-hochformat.JPG" 
                  alt="Coach Portrait" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-golden-100 rounded-sm -z-10"></div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="lg:col-span-3 order-2 lg:order-2 reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
              Mein Weg zu Golden Hours – Vom Suchen zum Sein
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Du kennst das Gefühl, dass mehr in dir steckt. Auch ich war an diesem Punkt. Gefangen in einem 9-to-5-Job der mich nicht erfüllte, fragte ich mich: "Soll das wirklich alles sein?" Ich fühlte mich festgefahren - in einem Kreislauf aus Aufstehen, Arbeiten, Nachhause kommen, essen, schlafen. Mit meiner Kündigung in der Pharma-Branche begann die Transformation. Ich liess los und trennte mich von einer Identität, die ich nur glaubte zu sein - bis ich mir erlaubte, meiner wahren Essenz zu begegnen. Meiner Wahrheit bin ich auf Solo-Wanderungen in der Stille, auf einer zweimonatigen Reise nach Indien, in über 800 Stunden <TooltipComponent
                  trigger="Yogalehrer-Ausbildungen"
                  content="Fundierte Trainings, die Anatomie, Philosophie und Didaktik verbinden, damit Yoga nicht nur gelernt, sondern verkörpert wird."
                />, im Vipassana, in tiefgehenden Workshops, in der Ausbildung zum <TooltipComponent
                  trigger="NLP-Practitioner"
                  content="Eine zertifizierte Vertiefung ins Neurolinguistische Programmieren, die Sprache, Denkmuster und Emotionen bewusst neu verknüpft."
                /> und in vielen weiteren Schritten meiner persönlichen Entwicklung begegnet. All diese Erfahrungen haben mich dazu geführt, das Leben zu 100 % zu leben - nicht in Schubladen, sondern im Einklang mit meinem Herzen.
              </p>

              <InfoBox isQuote={true}>
                <p className="text-lg leading-relaxed">
                  Seit Anfang 2024 öffne ich mit Golden Hours Räume für Workshops, Retreats, Events und 1:1-Coachings - und begleite dich auf deinem einzigartigen, authentischen Weg des Herzens mit einem reichhaltigen Werkzeugkasten aus Methoden und Erfahrungen, der sich auf meinem eigenen Weg geformt hat.
                </p>
              </InfoBox>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
