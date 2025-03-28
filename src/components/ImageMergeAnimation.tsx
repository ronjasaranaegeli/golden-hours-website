
import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const curtainLeft = new Image();
    const curtainRight = new Image();
    const background = new Image();
    
    curtainLeft.src = "/images/golden-hours-image-6.JPG";
    curtainRight.src = "/images/golden-hours-image-7.JPG";
    background.src = "/images/golden-hours-image-1.JPG";
    
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 3) {
        setIsLoaded(true);
        // Start animation immediately when images are loaded
        setScrollPosition(20);
      }
    };
    
    curtainLeft.onload = checkAllLoaded;
    curtainRight.onload = checkAllLoaded;
    background.onload = checkAllLoaded;

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate curtain position based on scroll
  const curtainOffset = Math.min(100, scrollPosition / 5);
  // Calculate background zoom based on scroll
  const backgroundScale = 1 + (scrollPosition / 1000);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Background image (zooms in on scroll) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
          backgroundPosition: 'center 30%',
          transform: `scale(${backgroundScale})`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Left curtain */}
      <div 
        className={`absolute inset-0 w-1/2 h-full bg-cover bg-right bg-no-repeat transition-transform duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-6.JPG")',
          transform: `translateX(-${curtainOffset}%)`,
          right: '50%',
          left: 0,
          transition: 'transform 0.5s ease-out'
        }}
      />

      {/* Right curtain */}
      <div 
        className={`absolute inset-0 w-1/2 h-full bg-cover bg-left bg-no-repeat transition-transform duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-7.JPG")',
          transform: `translateX(${curtainOffset}%)`,
          left: '50%',
          right: 0,
          transition: 'transform 0.5s ease-out'
        }}
      />
    </div>
  );
};

export default ImageMergeAnimation;
