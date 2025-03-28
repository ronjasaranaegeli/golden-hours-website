
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
        className={`absolute inset-0 w-1/2 h-full bg-cover bg-right bg-no-repeat transition-transform duration-500 ${isLoaded ? '' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-6.JPG")',
          transform: `translateX(-${100 - curtainOffset}%)`,
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
          transform: `translateX(${100 - curtainOffset}%)`,
          left: '50%',
          right: 0,
          transition: 'transform 0.5s ease-out'
        }}
      />
    </div>
  );
};

export default ImageMergeAnimation;
