
import { useState, useEffect, useRef } from 'react';
import WaitlistForm from './waitlist/WaitlistForm';
import PricingDetails from './waitlist/PricingDetails';
import ThankYouMessage from './waitlist/ThankYouMessage';

const WaitlistSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (formRef.current) formRef.current.classList.add('active');
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

  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <section 
      id="waitlist" 
      className="py-24 md:py-32 relative z-20" 
      ref={sectionRef}
    >
      {/* Jungle background image with overlay - same as BalanceGraphic */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/jungle.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="p-8 md:p-12 reveal" ref={formRef}>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block text-forest-800">
                Sei bereit für deine Transformation
              </h2>
              
              <p className="text-lg mb-8 text-forest-600">
                Melde dich jetzt für die Warteliste an und erhalte als eine(r) der Ersten Zugang zum Golden Hours Coaching-Programm, das im Oktober 2025 startet.
              </p>
              
              {formSubmitted ? (
                <ThankYouMessage />
              ) : (
                <WaitlistForm onSubmitSuccess={handleFormSuccess} />
              )}
            </div>
            
            {/* Right Column: Pricing Details */}
            <div className="reveal bg-golden-50 flex items-center justify-center p-8 md:p-12" ref={imageRef}>
              <PricingDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
