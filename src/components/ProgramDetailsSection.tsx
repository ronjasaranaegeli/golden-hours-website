
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Landmark, Calendar, Users, Award, ArrowRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const ProgramDetailsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Program images for carousel
  const programImages = [
    "/images/golden-hours-image-15.JPG",
    "/images/golden-hours-image-16.JPG",
    "/images/golden-hours-image-17.JPG",
    "/images/golden-hours-image-18.JPG",
    "/images/golden-hours-image-19.JPG",
  ];

  return (
    <section 
      id="program" 
      className="py-24 md:py-32 bg-secondary/30 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 heading-underline inline-block">
            Programm Details
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 max-w-3xl mx-auto">
            Das 3-monatige Golden Hours Coaching-Programm ist für Menschen, die bereit sind, 
            den nächsten Schritt in ihrer persönlichen Transformation zu gehen.
          </p>
        </div>

        {/* Program Image Carousel */}
        <div className="mb-16 max-w-5xl mx-auto reveal">
          <Carousel>
            <CarouselContent>
              {programImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video overflow-hidden rounded-sm">
                    <img 
                      src={image} 
                      alt={`Golden Hours Coaching Impression ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="max-w-5xl mx-auto reveal" ref={contentRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-8">
              <div className="flex items-start">
                <Clock className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">12 Wochen Transformation</h3>
                  <p className="text-forest-700">Intensives 3-monatiges Coaching mit wöchentlichen 90-minütigen 1:1 Sessions (insgesamt 12 Sessions)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Täglicher Support</h3>
                  <p className="text-forest-700">Direkter Zugang zu mir per WhatsApp für Fragen, Herausforderungen und Erfolge zwischen den Sessions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Golden Hours Workbook</h3>
                  <p className="text-forest-700">Exklusives Begleitmaterial mit Übungen, Reflexionsfragen und Journaling-Prompts</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Users className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Exklusives Netzwerk</h3>
                  <p className="text-forest-700">Zugang zur Golden Hours Community mit Gleichgesinnten auf ähnlichem Weg</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Landmark className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Investment</h3>
                  <p className="text-forest-700">CHF 3.900 (Einmalzahlung) oder flexible Ratenzahlung (3 x CHF 1.350)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Limitierte Plätze</h3>
                  <p className="text-forest-700">Nur 6 Plätze verfügbar, Start im Oktober 2024</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="elegant-card text-center">
            <h3 className="font-serif text-2xl mb-6">Ist dies das richtige Programm für dich?</h3>
            
            <p className="text-lg mb-8">
              Golden Hours ist ideal für dich, wenn du:
            </p>
            
            <ul className="space-y-4 text-left max-w-xl mx-auto mb-10">
              <li className="flex items-start">
                <CheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p>Am Anfang deines bewussten Erwachens stehst und nach deinem authentischen Weg suchst</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p>Dich in einem Übergang befindest und Klarheit für deine nächsten Schritte suchst</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p>Bereit bist, tiefer in deine innere Arbeit einzutauchen und alte Muster zu transformieren</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p>Eine individuelle, auf dich zugeschnittene Begleitung mehr schätzt als ein standardisiertes Programm</p>
              </li>
            </ul>
            
            <Button 
              onClick={() => scrollToSection('waitlist')} 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 btn-shine shadow-md"
            >
              <span>Auf die Warteliste</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;

