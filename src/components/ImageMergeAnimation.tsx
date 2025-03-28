
import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const curtainLeft = new Image();
    const curtainRight = new Image();
    const background = new Image();
    
    curtainLeft.src = "/lovable-uploads/565b6923-2224-4cb4-b3a4-17590505c554.png";
    curtainRight.src = "/lovable-uploads/ee7e5774-a3eb-4af4-9d4b-ae15e1b58b67.png";
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
      const currentPosition = window.scrollY;
      // Determine scroll direction
      const direction = currentPosition > prevScrollPosition ? 'down' : 'up';
      
      setScrollDirection(direction);
      setPrevScrollPosition(currentPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition]);

  // Calculate curtain position based on scroll and direction
  // When scrolling down: curtains move inward (smaller offset means more closed)
  // When scrolling up: curtains move outward (larger offset means more open)
  const curtainOffset = scrollDirection === 'down' 
    ? Math.min(100, scrollPosition / 5) // Inward when scrolling down
    : Math.max(0, 100 - (scrollPosition / 5)); // Outward when scrolling up
  
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
        className={`absolute top-0 bottom-0 h-full bg-cover bg-no-repeat transition-all duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/565b6923-2224-4cb4-b3a4-17590505c554.png")',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          transform: `translateX(-${100 - curtainOffset}%)`,
          width: '50.2%', // Slightly larger overlap to prevent any gap
          left: '0',
          zIndex: 5
        }}
      />

      {/* Right curtain */}
      <div 
        className={`absolute top-0 bottom-0 h-full bg-cover bg-no-repeat transition-all duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/ee7e5774-a3eb-4af4-9d4b-ae15e1b58b67.png")',
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          transform: `translateX(${100 - curtainOffset}%)`,
          width: '50.2%', // Slightly larger overlap to prevent any gap
          right: '0',
          zIndex: 5
        }}
      />
    </div>
  );
};

export default ImageMergeAnimation;
