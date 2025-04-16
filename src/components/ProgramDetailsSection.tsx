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
import { TooltipComponent } from '@/components/ui/TooltipComponent';
import { FaqSection } from '@/components/ui/faq-section';

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
    "/images/golden-hours-image-18.JPG",
    "/images/golden-hours-image-21.JPG",
    "/images/golden-hours-image-8.JPG",
    "/images/golden-hours-image-23.JPG",
    "/images/golden-hours-image-14.JPG",
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
                  <p className="text-forest-700">Intensives 3-monatiges Online-Coaching mit wöchentlichen 90-minütigen 1:1 Sessions (insgesamt 12 Sessions)</p>
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
                <div className="w-full">
                  <h3 className="font-serif text-xl font-medium mb-3">Investment</h3>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-primary min-w-[140px]">Online-Coaching:</span>
                      <div className="mt-1 sm:mt-0">
                        <span className="text-forest-700 font-medium">CHF 3.900</span>
                        <span className="text-forest-600 text-sm ml-2">(Einmalzahlung oder 3 x CHF 1.350)</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-primary min-w-[140px]">Vor-Ort-Coaching:</span>
                      <div className="mt-1 sm:mt-0">
                        <span className="text-forest-700 font-medium">CHF 5.490</span>
                        <span className="text-forest-600 text-sm ml-2">(im Umkreis von 70km ab Baden, AG)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Limitierte Plätze</h3>
                  <p className="text-forest-700">Nur 6 Plätze verfügbar, Start im Oktober 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <FaqSection
            title="Ist Golden Hours wirklich das Richtige für DICH?"
            description="Golden Hours ist eine tiefgreifende, transformative Reise – und sie ist nicht für jeden geeignet. Dieses Programm ist wahrscheinlich nichts für dich, wenn du:"
            className="elegant-card text-center bg-white p-4 sm:p-8 rounded-sm shadow-md"
            items={[
              {
                question: "Schnelle Lösungen suchst",
                answer: (
                  <p className="text-forest-700">
                    Echte Veränderung braucht Zeit, Commitment und die Bereitschaft, wirklich hinzuschauen – nicht nur an der <TooltipComponent trigger="Oberfläche" content="Oberflächliche Veränderungen führen selten zu tiefgreifenden und langfristigen Transformationen" /> zu kratzen.
                  </p>
                )
              },
              {
                question: "Starre Programme erwartest",
                answer: (
                  <p className="text-forest-700">
                    Wir folgen DEINEM einzigartigen Weg und deiner <TooltipComponent trigger="Intuition" content="Die innere Stimme und Weisheit, die oft ohne bewusste Analyse zu tieferen Erkenntnissen führt" />, nicht einem festen Schema F. Wenn du eine vorgefertigte <span className="text-primary">Formel</span> bevorzugst, passen wir nicht zusammen.
                  </p>
                )
              },
              {
                question: "Dich Schatten nicht stellen willst",
                answer: (
                  <p className="text-forest-700">
                    Wahre <TooltipComponent trigger="Transformation" content="Ein tiefgreifender Wandlungsprozess, der über oberflächliche Veränderungen hinausgeht und unser ganzes Sein umfasst" /> beinhaltet auch die liebevolle Auseinandersetzung mit dem, was herausfordernd ist. Wir gehen tief – dazu braucht es Mut.
                  </p>
                )
              },
              {
                question: "Verantwortung im Aussen suchst",
                answer: (
                  <p className="text-forest-700">
                    Dieses Programm stärkt DEINE innere Führung und <TooltipComponent trigger="Selbstermächtigung" content="Der Prozess, die eigene Kraft zu erkennen und zu nutzen, um selbstbestimmt zu handeln und zu leben" />. Es erfordert die Bereitschaft, aktiv Verantwortung für deinen Prozess zu übernehmen.
                  </p>
                )
              },
              {
                question: "Körperarbeit vermeiden willst",
                answer: (
                  <p className="text-forest-700">
                    In diesem Coaching arbeiten wir <TooltipComponent trigger="ganzheitlich" content="Ein Ansatz, der Körper, Geist und Seele als untrennbare Einheit betrachtet" /> – Körper, Geist und Seele sind untrennbar verbunden. Transformation geschieht nicht nur im Kopf, sondern muss verkörpert werden.
                  </p>
                )
              },
              {
                question: "Nur Theorie ohne Praxis suchst",
                answer: (
                  <p className="text-forest-700">
                    Golden Hours lebt von der <TooltipComponent trigger="Integration" content="Der Prozess, neue Erkenntnisse in das tägliche Leben einzubinden und zu verkörpern" /> und Verkörperung neuer Erkenntnisse im Alltag.
                  </p>
                )
              }
            ]}
          />
          
          <div className="text-center mt-10">
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
