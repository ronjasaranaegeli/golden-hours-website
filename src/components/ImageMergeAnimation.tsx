
import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const leftHalf = new Image();
    const rightHalf = new Image();
    const background = new Image();
    
    leftHalf.src = "/lovable-uploads/75089de6-acf0-48c1-acd5-5211c709345f-left.png";
    rightHalf.src = "/lovable-uploads/75089de6-acf0-48c1-acd5-5211c709345f-right.png";
    background.src = "/images/golden-hours-image-1.JPG";
    
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 3) {
        setIsLoaded(true);
      }
    };
    
    leftHalf.onload = checkAllLoaded;
    rightHalf.onload = checkAllLoaded;
    background.onload = checkAllLoaded;

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Initial animation trigger even before scroll
    setScrollPosition(20);

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate image position based on scroll
  // Lower value = more sensitivity to scroll
  const scrollFactor = 3;
  
  // Left image slides in from left, right image slides in from right
  // Maximum slide is 100% (completely off-screen)
  // Minimum slide is 0% (completely visible)
  const slidePercentage = Math.min(100, Math.max(0, 100 - (scrollPosition / scrollFactor)));
  
  // Background zoom effect
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

      {/* Left half of the image */}
      <div 
        className={`absolute top-0 bottom-0 left-0 h-full bg-cover bg-no-repeat transition-transform duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/75089de6-acf0-48c1-acd5-5211c709345f-left.png")',
          backgroundPosition: 'right center', 
          backgroundSize: 'cover',
          width: '50%',
          transform: `translateX(-${slidePercentage}%)`,
          zIndex: 5
        }}
      />

      {/* Right half of the image */}
      <div 
        className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat transition-transform duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/75089de6-acf0-48c1-acd5-5211c709345f-right.png")',
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          width: '50%',
          transform: `translateX(${slidePercentage}%)`,
          zIndex: 5
        }}
      />
    </div>
  );
};

export default ImageMergeAnimation;
