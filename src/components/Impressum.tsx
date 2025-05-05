import { FC } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Create a modified Navbar component specifically for the Impressum page
const OpaqueNavbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-background py-2 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            alt="Golden Hours Logo" 
            className="h-10 md:h-12" 
            src="/lovable-uploads/296779d4-52dd-4fd5-a032-80f37b5bcca8.png" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button 
              onClick={navigateToHome} 
              className="relative text-sm transition-colors py-1 px-3 font-medium group text-foreground"
            >
              <span className="relative z-10">Zurück zur Startseite</span>
              <span className="absolute inset-0 bg-golden-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-full backdrop-blur-sm text-foreground bg-black/5"
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
                onClick={navigateToHome} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Zurück zur Startseite
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Impressum: FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <OpaqueNavbar />
      
      <main className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl mb-10 text-forest-800">Impressum</h1>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">Anbieterin</h2>
            <p className="text-forest-600">Ronja Sara Nägeli<br />Obere Gasse 13<br />5400 Baden, Schweiz</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">Kontakt</h2>
            <p className="text-forest-600">Telefon +41 76 280 05 50<br /><a href="mailto:ronja@golden-hours.ch" className="text-primary hover:underline">ronja@golden-hours.ch</a></p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">Haftungsausschluss</h2>
            <p className="text-forest-600">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Links. Für den Inhalt verlinkter Seiten sind ausschliesslich deren Betreiber verantwortlich.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">Urheberrecht</h2>
            <p className="text-forest-600">Alle Inhalte dieser Website unterliegen dem Urheberrecht. Jede Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung von Ronja Sara Nägeli.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">Datenschutz</h2>
            <p className="text-forest-600">Unsere Datenschutzerklärung finden Sie unter <a href="/datenschutz" className="text-primary hover:underline">Datenschutz</a>.</p>
          </section>

          <p className="text-sm opacity-70 mt-10">Stand: 3.&nbsp;Mai 2025 (Europe/Zurich)</p>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Impressum;