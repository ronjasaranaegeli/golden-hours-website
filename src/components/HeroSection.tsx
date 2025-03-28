
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Sinn", "Wahrheit", "Leben"],
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-white max-w-4xl flex flex-col items-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 leading-tight tracking-tight text-center">
          <span className="opacity-0 animate-fade-in">Dein</span>
          <span className="relative flex w-full justify-center overflow-hidden h-[1.2em] mx-2">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold opacity-0 animate-fade-in"
                initial={{ opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -60 : 60,
                        opacity: 0,
                      }
                }
              >
                {title}.
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in-delay-1 font-light leading-relaxed max-w-2xl text-center">
          Ist dein Bewusstsein bereit für dein Potenzial?
        </p>
        <div className="flex justify-center w-full">
          <Button 
            onClick={() => scrollToSection('waitlist')} 
            className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg opacity-0 animate-fade-in-delay-2 btn-hover-effect rounded-full"
          >
            Auf die Warteliste
          </Button>
        </div>
      </div>

      {/* Elegant scroll indicator - centered for mobile and desktop */}
      <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-xs z-20 opacity-0 animate-fade-in-delay-3 flex flex-col items-center">
        <p className="text-white text-sm mb-2 tracking-widest font-light text-center">ENTDECKE MEHR</p>
        <ChevronDown 
          className="text-white w-10 h-10 animate-bounce cursor-pointer mx-auto" 
          onClick={() => scrollToSection('problem')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
