
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TransformationSection from '@/components/TransformationSection';
import AboutSection from '@/components/AboutSection';
import ProgramDetailsSection from '@/components/ProgramDetailsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import FooterSection from '@/components/FooterSection';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    // Titel des Dokuments aktualisieren
    document.title = "Golden Hours Coaching - Dein Sinn. Deine Wahrheit. Dein Leben.";
    
    // Wichtige Bilder vorladen
    const imagesToPreload = [
      "/images/golden-hours-image-1.JPG", // Haupthintergrund
      "/lovable-uploads/cf5693e3-5472-469d-95d7-ddb7891a10dc.png", // Linkes Bild
      "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7.png", // Rechtes Bild
      "/lovable-uploads/30bd8eb6-93aa-49b7-b7c3-3af9787c1041.png", // Mobiles Bild
      "/images/golden-hours-image-16.JPG"
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero section (fixed) */}
      <HeroSection />
      
      {/* Main content (scrolls over the Hero) */}
      <main className="relative z-10">
        {/* Spacer to push content below the viewport height */}
        <div className="h-screen w-full"></div>
        
        {/* Content sections */}
        <div className="relative bg-background">
          <ProblemSection />
          <SolutionSection />
          <TransformationSection />
          <AboutSection />
          <ProgramDetailsSection />
          <TestimonialsSection />
          <WaitlistSection />
          <FooterSection />
        </div>
      </main>
      
      <ScrollReveal />
      
      {/* Decorative elements */}
      <div className="fixed top-[20%] right-[5%] circle-decoration w-64 h-64 opacity-10 blur-2xl bg-forest-200 -z-10 float"></div>
      <div className="fixed bottom-[30%] left-[5%] circle-decoration w-80 h-80 opacity-10 blur-2xl bg-golden-200 -z-10 float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;
