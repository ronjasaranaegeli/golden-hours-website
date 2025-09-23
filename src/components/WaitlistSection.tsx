import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import PricingDetails from './waitlist/PricingDetails';
import InfoBox from './ui/InfoBox';
const WaitlistSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (formRef.current) formRef.current.classList.add('active');
        if (imageRef.current) imageRef.current.classList.add('active');
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="waitlist" className="py-24 md:py-32 relative z-20" ref={sectionRef}>
      {/* Jungle background image with overlay - same as BalanceGraphic */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("/images/jungle.webp")'
      }}>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="p-8 md:p-12 reveal flex flex-col justify-between" ref={formRef}>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 heading-underline inline-block text-forest-800">Du siehst Dich. Du erinnerst Dich. Du lebst Dich.</h2>
                
                <p className="text-lg mb-6 text-forest-600">Die Räume für den 1:1 Deep Dive sind vom 11.02.2025 bis zum 02.01.2026 für dich geöffnet.


Wenn du dich in dieser Zeit für deinen Platz entscheidest, darfst du in einen geschützten Raum voller Transformation und Wachstum eintreten. </p>
              </div>
              
              <div className="mt-auto pt-12 pb-4 relative">
                {/* Info box with new design */}
                <InfoBox className="mb-8">
                  <p className="text-forest-700">Danach bleiben die Türen geschlossen – und meine volle Präsenz gilt den Menschen, die in diesem Zeitfenster ihre Reise begonnen haben.Starte den ersten Schritt zu deinem ausgeglichenen Leben – finde heraus, ob Golden Hours das richtige Coaching für dich ist.</p>
                </InfoBox>
                
                {/* Button styled to match the image */}
                <Button asChild className="w-auto px-8 py-3 bg-[#c7964c] hover:bg-[#b3873d] text-white font-medium" size="default">
                  <a href="https://form.jotform.com/251244295429056" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <span>IC•You Check In</span>
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right Column: Pricing Details */}
            <div className="reveal bg-golden-50 flex items-center justify-center p-8 md:p-12 border-l border-golden-100" ref={imageRef}>
              <PricingDetails />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistSection;