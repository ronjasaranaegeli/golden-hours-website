
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Dein <i>Sein</i>", "<i>Wahrheit</i>", "Dein <i>Leben</i>"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-white max-w-2xl flex flex-col items-center">
        <div className="text-center mb-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide">
            <div className="flex items-center justify-center">
              <div className="relative h-[1.2em] w-[18rem] md:w-[22rem] lg:w-[26rem] overflow-hidden ml-3">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-0 top-0 w-full whitespace-nowrap"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: titleNumber === index ? 1 : 0,
                      y: titleNumber === index ? 0 : (titleNumber > index ? -50 : 50)
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 50,
                      duration: 0.6
                    }}
                    dangerouslySetInnerHTML={{ __html: title === "<i>Wahrheit</i>" ? "Deine " + title + "." : title + "." }}
                  />
                ))}
              </div>
            </div>
          </h1>
        </div>
        <p className="text-base md:text-lg mb-6 opacity-0 animate-fade-in-delay-1 font-extralight leading-relaxed max-w-lg text-center">
          Ist dein Bewusstsein bereit für dein Potenzial?
        </p>
        <div className="flex justify-center w-full">
          <Button 
            onClick={() => scrollToSection('waitlist')} 
            className="mt-2 bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-3 sm:py-4 text-sm opacity-0 animate-fade-in-delay-2 btn-shine"
          >
            Auf die Warteliste
          </Button>
        </div>
      </div>

      {/* Elegant scroll indicator - centered for mobile and desktop */}
      <div className="absolute bottom-6 left-0 right-0 mx-auto w-full max-w-xs z-20 opacity-0 animate-fade-in-delay-3 flex flex-col items-center">
        <p className="text-white text-xs mb-1 tracking-widest font-extralight text-center">ENTDECKE MEHR</p>
        <ChevronDown 
          className="text-white w-6 h-6 animate-bounce cursor-pointer mx-auto" 
          onClick={() => scrollToSection('problem')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
