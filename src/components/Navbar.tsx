
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
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/2a2fa4d3-c1e3-4889-b3f7-d82ededb0533.png" 
            alt="Golden Hours Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button onClick={() => scrollToSection('about')} className="text-sm text-foreground hover:text-primary transition-colors">
              Über mich
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('program')} className="text-sm text-foreground hover:text-primary transition-colors">
              Programm
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-foreground hover:text-primary transition-colors">
              Erfahrungen
            </button>
          </li>
          <li>
            <Button 
              onClick={() => scrollToSection('waitlist')} 
              className="bg-primary text-white hover:bg-primary/90"
            >
              Warteliste
            </Button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
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
                className="w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Über mich
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('program')} 
                className="w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Programm
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Erfahrungen
              </button>
            </li>
            <li className="pt-2">
              <Button 
                onClick={() => scrollToSection('waitlist')} 
                className="w-full bg-primary text-white hover:bg-primary/90"
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
