import { useEffect, useRef } from 'react';
import { CheckCircle, Clock, Calendar, Users, Award } from 'lucide-react';
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
      className="py-24 md:py-32 pb-8 md:pb-12 bg-secondary/30 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 heading-underline inline-block">
            Programm Details
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 max-w-3xl mx-auto">
            Die IC•You-Journey ist für Menschen, die bereit sind, 
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
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
            {/* Feature 1: 12 Wochen Transformation */}
            <div className="flex items-start">
              <Clock className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">12 Wochen Transformation</h3>
                <p className="text-forest-700">Intensives 3-monatiges Online-Coaching mit wöchentlichen 90-minütigen 1:1 Sessions (insgesamt 12 Sessions)</p>
              </div>
            </div>
            
            {/* Feature 2: Exklusives Netzwerk */}
            <div className="flex items-start">
              <Users className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Exklusives Netzwerk</h3>
                <p className="text-forest-700">Zugang zur Golden Hours Community mit Gleichgesinnten auf ähnlichem Weg</p>
              </div>
            </div>
            
            {/* Feature 3: Täglicher Support */}
            <div className="flex items-start">
              <CheckCircle className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Täglicher Support</h3>
                <p className="text-forest-700">Direkter Zugang zu mir per WhatsApp für Fragen, Herausforderungen und Erfolge zwischen den Sessions</p>
              </div>
            </div>
            
            {/* Feature 4: Praxisplan */}
            <div className="flex items-start">
              <CheckCircle className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Praxisplan</h3>
                <p className="text-forest-700">Individuell mit dem Coach erstellter Praxisplan, abgestimmt auf deine Bedürfnisse.</p>
              </div>
            </div>
            
            {/* Feature 5: Golden Hours Workbook */}
            <div className="flex items-start">
              <Award className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Golden Hours Workbook</h3>
                <p className="text-forest-700">Exklusives Begleitmaterial mit Übungen, Reflexionsfragen und Journaling-Prompts</p>
              </div>
            </div>
            
            {/* Feature 6: Limitierte Plätze */}
            <div className="flex items-start">
              <Calendar className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Limitierte Plätze</h3>
                <p className="text-forest-700">Nächste IC•You-Journey - Start Januar 2026 (3/3 Spots noch verfügbar)</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
