
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
      "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7.png", // Full image
      "/images/golden-hours-image-16.JPG",
      "/lovable-uploads/d39b1a7e-1369-48cd-8665-68fa56a63dd7.png" // Shadow background
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
    // Check if we already have the split images stored
    if (localStorage.getItem('leftHalfImage') && localStorage.getItem('rightHalfImage')) {
      console.log('Split images already exist in localStorage');
      return;
    }

    console.log('Creating split images...');
    
    const fullImage = new Image();
    fullImage.crossOrigin = "anonymous";
    fullImage.src = "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7.png";
    
    fullImage.onload = () => {
      console.log('Full image loaded, dimensions:', fullImage.width, 'x', fullImage.height);
      
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
        
        // Create URLs for the split images
        try {
          // Save left half to file and set URL
          const leftUrl = leftCanvas.toDataURL('image/png');
          localStorage.setItem('leftHalfImage', leftUrl);
          console.log('Left half image created');
          
          // Create a physical image to test loading
          const leftImg = new Image();
          leftImg.src = leftUrl;
          
          // Save right half to file and set URL
          const rightUrl = rightCanvas.toDataURL('image/png');
          localStorage.setItem('rightHalfImage', rightUrl);
          console.log('Right half image created');
          
          // Create a physical image to test loading
          const rightImg = new Image();
          rightImg.src = rightUrl;
          
          // Create static versions of the split images for fallback
          fetch('/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png')
            .catch(() => {
              console.log('Creating static left half image as fallback');
              // If the file doesn't exist, create it
              leftCanvas.toBlob((blob) => {
                if (blob) {
                  const formData = new FormData();
                  formData.append('image', blob, '24f3e263-20e5-49ac-b306-03654651f2f7-left.png');
                  // Here you would typically upload the image to your server
                  // For now we'll just use the localStorage version
                }
              });
            });
          
          fetch('/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png')
            .catch(() => {
              console.log('Creating static right half image as fallback');
              // If the file doesn't exist, create it
              rightCanvas.toBlob((blob) => {
                if (blob) {
                  const formData = new FormData();
                  formData.append('image', blob, '24f3e263-20e5-49ac-b306-03654651f2f7-right.png');
                  // Here you would typically upload the image to your server
                  // For now we'll just use the localStorage version
                }
              });
            });
        } catch (error) {
          console.error('Error creating split images:', error);
        }
      }
    };
    
    fullImage.onerror = (err) => {
      console.error('Error loading full image:', err);
    };
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background shadow-background">
      {/* Shadow Background Overlay */}
      <div 
        className="fixed inset-0 w-full h-full z-0 bg-cover bg-center opacity-90" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/d39b1a7e-1369-48cd-8665-68fa56a63dd7.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
      
      <Navbar />
      
      {/* Hero section (fixed) */}
      <HeroSection />
      
      {/* Main content (scrolls over the Hero) */}
      <main className="relative z-10">
        {/* Spacer to push content below the viewport height */}
        <div className="h-screen w-full"></div>
        
        {/* Content sections */}
        <div className="relative">
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
      
      {/* Decorative elements - adjusted opacity to be subtle with new background */}
      <div className="fixed top-[20%] right-[5%] circle-decoration w-64 h-64 opacity-5 blur-2xl bg-forest-200 -z-10 float"></div>
      <div className="fixed bottom-[30%] left-[5%] circle-decoration w-80 h-80 opacity-5 blur-2xl bg-golden-200 -z-10 float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;
