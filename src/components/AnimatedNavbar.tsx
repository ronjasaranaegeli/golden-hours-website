
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300`}
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{ 
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none" 
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center h-20">
        <a href="#" className="flex items-center">
          <img 
            alt="Logo Placeholder" 
            className="h-10 md:h-12" 
            src="/lovable-uploads/29f66317-048a-4406-9710-bdd09f4d3894.png" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`relative text-sm transition-colors py-1 font-medium group ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <span className="relative z-10">Link 1</span>
              <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                scrolled ? 'bg-golden-400' : 'bg-golden-300'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('program')} 
              className={`relative text-sm transition-colors py-1 font-medium group ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <span className="relative z-10">Link 2</span>
              <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                scrolled ? 'bg-golden-400' : 'bg-golden-300'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`relative text-sm transition-colors py-1 font-medium group ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <span className="relative z-10">Link 3</span>
              <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                scrolled ? 'bg-golden-400' : 'bg-golden-300'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </button>
          </li>
          <li>
            <Button 
              onClick={() => scrollToSection('waitlist')} 
              variant="outline"
              className="border-golden-200 text-white hover:bg-golden-100 hover:text-forest-800 hover:border-golden-300 hover:scale-105 transform transition-all duration-300"
            >
              Contact
            </Button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden p-2 rounded-full ${
            scrolled 
              ? 'text-foreground bg-black/5' 
              : 'text-white bg-black/20'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-sm shadow-md py-4 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Link 1
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('program')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Link 2
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Link 3
              </button>
            </li>
            <li className="pt-2">
              <Button 
                onClick={() => scrollToSection('waitlist')} 
                variant="cream"
                className="w-full transition-colors shadow-sm"
              >
                Contact
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default AnimatedNavbar;
