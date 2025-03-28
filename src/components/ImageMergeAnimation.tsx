import React, { useEffect, useState } from 'react';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leftImageUrl, setLeftImageUrl] = useState('');
  const [rightImageUrl, setRightImageUrl] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);

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
      setLeftImageUrl('/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png');
      setRightImageUrl('/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png');
      
      // Preload images
      const leftHalf = new Image();
      const rightHalf = new Image();
      const background = new Image();
      
      leftHalf.src = '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png';
      rightHalf.src = '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png';
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
      
      // Set hasAnimated to true once we've scrolled past the trigger point
      if (currentPosition > 50 && !hasAnimated) {
        setHasAnimated(true);
      } else if (currentPosition < 10) {
        // Reset animation state when scrolled back to top
        setHasAnimated(false);
      }
    };

    // Set initial scroll position
    setScrollPosition(window.scrollY);
    // Check if we're already scrolled down on load
    if (window.scrollY > 50) {
      setHasAnimated(true);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  // Calculate the maximum slide value
  const maxSlideValue = 100;
  
  // For initial load, if we're not scrolled, show the split images
  // Once we scroll beyond the threshold, the animation happens once
  let slidePercentage = 0;
  
  if (!hasAnimated) {
    // If we haven't animated yet and we're scrolling, calculate slide percentage
    slidePercentage = Math.min(maxSlideValue, (scrollPosition / 3));
  } else {
    // After animation has occurred, keep the images in their final positions
    slidePercentage = 0;
  }
  
  // Background zoom effect - only zoom in a little and then stop
  // Limit the maximum zoom to avoid excessive zooming
  const maxZoom = 1.15;
  const zoomFactor = 1 + Math.min((scrollPosition / 1000), (maxZoom - 1));
  
  // Apply a smooth transition to background zoom
  const backgroundScale = hasAnimated ? maxZoom : zoomFactor;

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Background image (zooms in on scroll, but only up to a point) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
          backgroundPosition: 'center 30%',
          transform: `scale(${backgroundScale})`,
          transition: 'transform 0.7s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
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
            transition: 'transform 0.7s ease-out, opacity 0.5s ease-out',
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
            transition: 'transform 0.7s ease-out, opacity 0.5s ease-out',
            zIndex: 5
          }}
        />
      )}

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
