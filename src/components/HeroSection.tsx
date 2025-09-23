'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ImageMergeAnimation from './ImageMergeAnimation';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const parallaxFactor = 0.5;
  const scrollRangeEnd = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const y = useTransform(scrollY, [0, scrollRangeEnd], [0, scrollRangeEnd * parallaxFactor]);

  const [titleNumber, setTitleNumber] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const titles = ["Du siehst Dich", "Du erinnerst Dich", "Du lebst Dich"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
       setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [titleNumber, titles]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden relative z-10"
    >
      {/* Background container with parallax scroll */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y }} 
      >
        <ImageMergeAnimation /> 
      </motion.div>

      {/* Foreground Content */}
      <div className={`relative z-30 container mx-auto px-6 md:px-8 text-white max-w-2xl flex flex-col items-center transition-opacity duration-500 ${hasScrolled ? 'opacity-75' : 'opacity-100'}`}>
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
                  >
                    {`${title}.`}
                  </motion.span>
                ))}
              </div>
            </div>
          </h1>
        </div>
        <p className="text-base md:text-lg mb-6 font-extralight leading-relaxed max-w-lg text-center">
          Und ich begleite Dich dabei - Zurück zu Dir Selbst.
        </p>
        <div className="flex justify-center w-full">
          <Button 
            onClick={() => scrollToSection('waitlist')} 
            variant="cream"
            className="mt-2 px-4 sm:px-6 py-3 sm:py-4 text-sm btn-shine"
          >
            Golden Hours 1:1 Deep Dive
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 mx-auto w-full max-w-xs z-40 flex flex-col items-center">
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
