
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.2, 0.7]);
  const leftDoorX = useTransform(scrollYProgress, [0.6, 0.9], ["-100%", "0%"]);
  const rightDoorX = useTransform(scrollYProgress, [0.6, 0.9], ["100%", "0%"]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Duplicate text for seamless marquee effect
  const marqueeText = "Placeholder Scrolling Text • More Placeholder Text • ";
  const duplicatedText = Array(10).fill(marqueeText).join(" ");
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with scaling effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80")',
          opacity: backgroundOpacity,
          scale: backgroundScale
        }}
      >
        {/* Dark overlay that increases opacity on scroll */}
        <motion.div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      
      {/* Sliding door from left */}
      <motion.div
        className="absolute inset-0 bg-forest-50 z-20"
        style={{ 
          x: leftDoorX,
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        }}
      />
      
      {/* Sliding door from right */}
      <motion.div
        className="absolute inset-0 bg-golden-100 z-20"
        style={{ 
          x: rightDoorX,
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-30 container mx-auto px-6 md:px-8 text-white max-w-3xl flex flex-col items-center">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide mb-4">
            Main Headline Placeholder
          </h1>
          <p className="text-base md:text-xl font-extralight leading-relaxed max-w-lg text-center mx-auto">
            Sub-headline explaining the main point
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button 
            onClick={() => scrollToSection('problem')} 
            variant="cream"
            className="mt-2 px-6 py-4 text-sm btn-shine"
          >
            Call To Action
          </Button>
        </motion.div>
      </div>
      
      {/* Marquee text that appears after sliding doors */}
      <motion.div 
        ref={marqueeRef}
        className="absolute bottom-20 left-0 right-0 z-40 overflow-hidden h-12 flex items-center"
        style={{ opacity: marqueeOpacity }}
      >
        <div className="marquee-container whitespace-nowrap flex items-center">
          <motion.div
            className="text-xl font-medium text-foreground"
            animate={{ x: [0, -5000] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {duplicatedText}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-6 left-0 right-0 mx-auto w-full max-w-xs z-50 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white text-xs mb-1 tracking-widest font-extralight text-center">SCROLL DOWN</p>
        <ChevronDown 
          className="text-white w-6 h-6 animate-bounce cursor-pointer mx-auto" 
          onClick={() => scrollToSection('problem')}
        />
      </motion.div>
    </section>
  );
};

export default AnimatedHeroSection;
