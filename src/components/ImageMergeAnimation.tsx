
import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leftImageUrl, setLeftImageUrl] = useState('');
  const [rightImageUrl, setRightImageUrl] = useState('');

  useEffect(() => {
    // Check if the split images are already in localStorage
    const storedLeftImg = localStorage.getItem('leftHalfImage');
    const storedRightImg = localStorage.getItem('rightHalfImage');
    
    if (storedLeftImg && storedRightImg) {
      setLeftImageUrl(storedLeftImg);
      setRightImageUrl(storedRightImg);
      setIsLoaded(true);
    } else {
      // If not in localStorage, use the direct image paths
      setLeftImageUrl('/lovable-uploads/fd2f67e3-46fb-4053-ae36-34ab9f926ba7-left.png');
      setRightImageUrl('/lovable-uploads/fd2f67e3-46fb-4053-ae36-34ab9f926ba7-right.png');
      
      // Preload images
      const leftHalf = new Image();
      const rightHalf = new Image();
      const background = new Image();
      
      leftHalf.src = '/lovable-uploads/fd2f67e3-46fb-4053-ae36-34ab9f926ba7-left.png';
      rightHalf.src = '/lovable-uploads/fd2f67e3-46fb-4053-ae36-34ab9f926ba7-right.png';
      background.src = '/images/golden-hours-image-1.JPG';
      
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
    }

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

  console.log("Animation state:", { isLoaded, leftImageUrl, rightImageUrl, slidePercentage });

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
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Left half of the image - slide from left */}
      {leftImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 left-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${leftImageUrl}")`,
            backgroundPosition: 'right center', 
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(-${slidePercentage}%)`,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5
          }}
        />
      )}

      {/* Right half of the image - slide from right */}
      {rightImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${rightImageUrl}")`,
            backgroundPosition: 'left center',
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(${slidePercentage}%)`,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5
          }}
        />
      )}

      {/* New conversation image overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fd2f67e3-46fb-4053-ae36-34ab9f926ba7.png")',
          opacity: Math.max(0, 0.8 - (scrollPosition / 400)),
          zIndex: 3
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

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
