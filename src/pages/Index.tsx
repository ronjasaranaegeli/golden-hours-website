
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
      "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png", // Left half
      "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png", // Right half
      "/images/golden-hours-image-16.JPG"
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Create split images from the uploaded image
    createSplitImages();
  }, []);

  // Function to split the image into left and right halves
  const createSplitImages = () => {
    const fullImage = new Image();
    fullImage.crossOrigin = "anonymous";
    fullImage.src = "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7.png";
    
    fullImage.onload = () => {
      // Create canvas for the left half
      const leftCanvas = document.createElement('canvas');
      leftCanvas.width = fullImage.width / 2;
      leftCanvas.height = fullImage.height;
      const leftCtx = leftCanvas.getContext('2d');
      
      // Create canvas for the right half
      const rightCanvas = document.createElement('canvas');
      rightCanvas.width = fullImage.width / 2;
      rightCanvas.height = fullImage.height;
      const rightCtx = rightCanvas.getContext('2d');
      
      if (leftCtx && rightCtx) {
        // Draw left half
        leftCtx.drawImage(
          fullImage, 
          0, 0, fullImage.width / 2, fullImage.height,
          0, 0, fullImage.width / 2, fullImage.height
        );
        
        // Draw right half
        rightCtx.drawImage(
          fullImage, 
          fullImage.width / 2, 0, fullImage.width / 2, fullImage.height,
          0, 0, fullImage.width / 2, fullImage.height
        );
        
        // Convert to data URLs and create blob objects
        leftCanvas.toBlob((leftBlob) => {
          if (leftBlob) {
            // Create a URL for the blob
            const leftUrl = URL.createObjectURL(leftBlob);
            
            // Preload the left half image
            const leftImg = new Image();
            leftImg.src = leftUrl;
            
            // Store the URL in localStorage for quick access
            localStorage.setItem('leftHalfImage', leftUrl);
          }
        });
        
        rightCanvas.toBlob((rightBlob) => {
          if (rightBlob) {
            // Create a URL for the blob
            const rightUrl = URL.createObjectURL(rightBlob);
            
            // Preload the right half image
            const rightImg = new Image();
            rightImg.src = rightUrl;
            
            // Store the URL in localStorage for quick access
            localStorage.setItem('rightHalfImage', rightUrl);
          }
        });
      }
    };
  };

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
