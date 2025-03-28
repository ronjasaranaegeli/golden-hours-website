
import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const leftHalf = new Image();
    const rightHalf = new Image();
    const background = new Image();
    
    leftHalf.src = "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png";
    rightHalf.src = "/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png";
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

    // Set initial scroll position to trigger animation
    setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate image position based on scroll
  // Lower value = more sensitivity to scroll
  const scrollFactor = 3;
  
  // Left image slides in from left, right image slides in from right
  // Maximum slide is 100% (completely off-screen)
  // Minimum slide is 0% (completely visible)
  const slidePercentage = Math.max(0, Math.min(100, (scrollPosition / scrollFactor)));
  
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

      {/* Left half of the image - slide from left */}
      <div 
        className={`absolute top-0 bottom-0 left-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png")',
          backgroundPosition: 'right center', 
          backgroundSize: 'cover',
          width: '50%',
          transform: `translateX(-${slidePercentage}%)`,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          zIndex: 5
        }}
      />

      {/* Right half of the image - slide from right */}
      <div 
        className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png")',
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          width: '50%',
          transform: `translateX(${slidePercentage}%)`,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          zIndex: 5
        }}
      />

      {/* Add a check to visualize loaded state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50 z-10">
          <div className="animate-pulse">Bilder werden geladen...</div>
        </div>
      )}
    </div>
  );
};

export default ImageMergeAnimation;
