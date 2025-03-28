
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const TransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCircle, setActiveCircle] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
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

  const handleCircleMouseEnter = (circle: string) => {
    setActiveCircle(circle);
  };

  const handleCircleMouseLeave = () => {
    setActiveCircle(null);
  };

  return (
    <section 
      id="transformation" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50/30 via-golden-50/20 to-forest-100/20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-golden-200/20 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-forest-200/10 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-800 mb-4 tracking-wide">Die drei Säulen der Transformation</h2>
          <p className="text-forest-700/80 md:text-lg max-w-2xl mx-auto">
            Ein ganzheitlicher Ansatz für tiefgreifende persönliche Veränderung und inneres Wachstum
          </p>
        </div>
        
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Central connecting element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
              <circle cx="250" cy="250" r="248" stroke="#E5E0D5" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="100" r="80" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
              <circle cx="120" cy="350" r="80" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
              <circle cx="380" cy="350" r="80" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
              <path d="M250 180L250 320" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
              <path d="M183 315L317 385" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
              <path d="M317 315L183 385" stroke="#D3C7AB" strokeWidth="1" opacity="0.8" />
            </svg>
          </div>
          
          {/* Top circle - Bewusstseinserweiterung */}
          <motion.div 
            className={`absolute top-[100px] md:top-[70px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-golden-100/30 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-500 cursor-pointer group hover:border-golden-300/50 ${activeCircle === 'consciousness' ? 'scale-110 z-20' : 'z-10'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => handleCircleMouseEnter('consciousness')}
            onMouseLeave={handleCircleMouseLeave}
          >
            <h3 className="font-serif text-xl md:text-2xl text-forest-800 mb-1">Bewusstseins-<br/>erweiterung</h3>
            <div className="w-16 h-[1px] bg-golden-300/50 my-2"></div>
            <p className={`text-forest-700/70 text-xs md:text-sm px-4 transition-opacity duration-300 ${activeCircle === 'consciousness' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              Erweitere deine Wahrnehmung und entdecke neue Perspektiven
            </p>
          </motion.div>
          
          {/* Bottom left circle - Persönlichkeitsentwicklung */}
          <motion.div 
            className={`absolute bottom-[100px] md:bottom-[70px] left-1/4 transform -translate-x-1/3 w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-golden-100/30 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-500 cursor-pointer group hover:border-golden-300/50 ${activeCircle === 'personality' ? 'scale-110 z-20' : 'z-10'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => handleCircleMouseEnter('personality')}
            onMouseLeave={handleCircleMouseLeave}
          >
            <h3 className="font-serif text-xl md:text-2xl text-forest-800 mb-1">Persönlichkeits-<br/>entwicklung</h3>
            <div className="w-16 h-[1px] bg-golden-300/50 my-2"></div>
            <p className={`text-forest-700/70 text-xs md:text-sm px-4 transition-opacity duration-300 ${activeCircle === 'personality' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              Entfalte dein volles Potenzial und stärke deine Authentizität
            </p>
          </motion.div>
          
          {/* Bottom right circle - Selbstheilungsaktivierung */}
          <motion.div 
            className={`absolute bottom-[100px] md:bottom-[70px] right-1/4 transform translate-x-1/3 w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-golden-100/30 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-500 cursor-pointer group hover:border-golden-300/50 ${activeCircle === 'healing' ? 'scale-110 z-20' : 'z-10'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => handleCircleMouseEnter('healing')}
            onMouseLeave={handleCircleMouseLeave}
          >
            <h3 className="font-serif text-xl md:text-2xl text-forest-800 mb-1">Selbstheilungs-<br/>aktivierung</h3>
            <div className="w-16 h-[1px] bg-golden-300/50 my-2"></div>
            <p className={`text-forest-700/70 text-xs md:text-sm px-4 transition-opacity duration-300 ${activeCircle === 'healing' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              Aktiviere deine natürlichen Heilungskräfte und finde innere Balance
            </p>
          </motion.div>
          
          {/* Center text - visible when no circle is active */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeCircle ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-forest-800 mb-2">Ganzheitliche Transformation</h3>
              <p className="text-forest-700/80 max-w-xs mx-auto">Körper, Geist und Seele in Harmonie</p>
            </div>
          </div>
          
        </div>
        
        <div className="text-center mt-16">
          <p className="text-forest-700/80 italic font-serif text-lg mb-8">
            "Der Weg zur Transformation beginnt mit einem Schritt nach innen"
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-golden-200 text-forest-800 hover:border-golden-400 hover:bg-golden-50/50"
          >
            Entdecke den Weg zur inneren Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
