
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/golden-hours-image-1.JPG")', 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 opacity-0 animate-fade-in">
          Dein Sinn. Deine Wahrheit. Dein Leben.
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-1 font-light">
          Ist dein Bewusstsein bereit für dein Potenzial?
        </p>
        <Button 
          onClick={() => scrollToSection('waitlist')} 
          className="mt-4 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg opacity-0 animate-fade-in-delay-2 btn-hover-effect"
        >
          Jetzt auf die Warteliste eintragen
        </Button>
      </div>

      {/* Decorative element inspired by Yogance template */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-0 animate-fade-in-delay-3">
        <ChevronDown 
          className="text-white w-10 h-10" 
          onClick={() => scrollToSection('problem')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
