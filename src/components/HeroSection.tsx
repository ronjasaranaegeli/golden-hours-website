
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
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-white max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 opacity-0 animate-fade-in leading-tight tracking-tight">
          Dein Sinn. Deine Wahrheit. Dein Leben.
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in-delay-1 font-light leading-relaxed max-w-2xl">
          Ist dein Bewusstsein bereit für dein Potenzial?
        </p>
        <div className="flex justify-center sm:justify-start">
          <Button 
            onClick={() => scrollToSection('waitlist')} 
            className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg opacity-0 animate-fade-in-delay-2 btn-hover-effect rounded-full"
          >
            Auf die Warteliste
          </Button>
        </div>
      </div>

      {/* Elegant scroll indicator - centered for mobile and desktop */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in-delay-3 flex flex-col items-center text-center">
        <p className="text-white text-sm mb-2 tracking-widest font-light">ENTDECKE MEHR</p>
        <ChevronDown 
          className="text-white w-10 h-10 animate-bounce cursor-pointer" 
          onClick={() => scrollToSection('problem')}
        />
      </div>

      {/* Subtle gradient overlay at bottom for smoother transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
