
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
        <div className="text-center mb-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight">
            <div className="flex flex-wrap justify-center items-center">
              <span className="mr-2">Dein</span>
              <div className="relative inline-block h-[1.2em] w-[6rem] md:w-[8rem] lg:w-[10rem] overflow-hidden">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-0 top-0 w-full text-center font-semibold"
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
                  >
                    {title}.
                  </motion.span>
                ))}
              </div>
            </div>
          </h1>
        </div>
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
