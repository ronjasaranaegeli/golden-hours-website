
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
    // Update document title
    document.title = "Golden Hours Coaching - Dein Sinn. Deine Wahrheit. Dein Leben.";
    
    // Preload key images
    const imagesToPreload = [
      "/images/golden-hours-image-1.JPG", // Main background
      "/images/golden-hours-image-2.JPG", // Left side image for animation
      "/images/golden-hours-image-3.JPG", // Right side image for animation
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
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TransformationSection />
        <AboutSection />
        <ProgramDetailsSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      
      <FooterSection />
      <ScrollReveal />
      
      {/* Decorative elements */}
      <div className="fixed top-[20%] right-[5%] circle-decoration w-64 h-64 opacity-10 blur-2xl bg-forest-200 -z-10 float"></div>
      <div className="fixed bottom-[30%] left-[5%] circle-decoration w-80 h-80 opacity-10 blur-2xl bg-golden-200 -z-10 float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;
