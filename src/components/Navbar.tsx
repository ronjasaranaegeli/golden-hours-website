
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-sm py-2 shadow-sm' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            alt="Golden Hours Logo" 
            className="h-10 md:h-12" 
            src={scrolled 
              ? "/lovable-uploads/296779d4-52dd-4fd5-a032-80f37b5bcca8.png" 
              : "/lovable-uploads/7e44dd91-112d-4cb4-a631-f7f48cf99571.png"
            } 
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
              <span className="relative z-10">Über mich</span>
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
              <span className="relative z-10">Programm</span>
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
              <span className="relative z-10">Erfahrungen</span>
              <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                scrolled ? 'bg-golden-400' : 'bg-golden-300'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </button>
          </li>
          <li>
            <Button 
              onClick={() => scrollToSection('waitlist')} 
              className="bg-golden-500 text-white hover:bg-golden-600 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg btn-shine"
            >
              Warteliste
            </Button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden p-2 rounded-full backdrop-blur-sm ${
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Über mich
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('program')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Programm
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Erfahrungen
              </button>
            </li>
            <li className="pt-2">
              <Button 
                onClick={() => scrollToSection('waitlist')} 
                className="w-full bg-golden-500 text-white hover:bg-golden-600 transition-colors shadow-sm btn-shine"
              >
                Warteliste
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
