import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leftImageUrl, setLeftImageUrl] = useState('');
  const [rightImageUrl, setRightImageUrl] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    // Clear any stored images to force new image load
    localStorage.removeItem('leftHalfImage');
    localStorage.removeItem('rightHalfImage');
    
    // Update right image URL for mobile - using new image with complete head
    setLeftImageUrl('/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png');
    setRightImageUrl('/src/assets/ronja-complete-head.jpg');
      
      // Preload images
      const leftHalf = new Image();
      const rightHalf = new Image();
      const background = new Image();
      
      leftHalf.src = '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-left.png';
      rightHalf.src = '/src/assets/ronja-complete-head.jpg';
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

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance, especially on iOS
      window.requestAnimationFrame(() => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
      });
    };

    // Set initial scroll position to trigger animation
    setScrollPosition(window.scrollY);

    // Use passive:true for better scroll performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions);
    
    return () => window.removeEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions);
  }, [isMobile]);

  // Calculate image position based on scroll
  // Lower value = more sensitivity to scroll
  // Use a more sensitive scrollFactor for iOS Safari
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const scrollFactor = isIOS && isSafari ? 1.5 : 3; // More sensitive for iOS Safari
  
  // Left image slides in from left, right image slides in from right
  // Maximum slide is 100% (completely off-screen)
  // Minimum slide is 0% (completely visible)
  const slidePercentage = Math.max(0, Math.min(100, (scrollPosition / scrollFactor)));
  
  // Background zoom effect
  const backgroundScale = 1 + (scrollPosition / 1000);

  // Get the correct background position for different screen sizes
  const getBgPosition = () => {
    if (isMobile) {
      return 'center 25%'; // Adjusted to show hand on chest on mobile
    }
    return 'center 30%';
  };

  console.log("Animation state:", { isLoaded, leftImageUrl, rightImageUrl, slidePercentage, isMobile });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Background image (zooms in on scroll) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
          backgroundPosition: getBgPosition(),
          transform: `scale(${backgroundScale})`,
          transition: 'transform 0.5s ease-out'
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
            backgroundPosition: isMobile ? '65% center' : 'right center', 
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(-${slidePercentage}%)`,
            transition: isIOS && isSafari ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease-out' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5,
            WebkitTransform: `translateX(-${slidePercentage}%)`, // Safari iOS hardware acceleration
            WebkitBackfaceVisibility: 'hidden', // Safari iOS optimization
          }}
        />
      )}

      {/* Right half of the image - slide from right */}
      {rightImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${rightImageUrl}")`,
            backgroundPosition: isMobile ? 'center center' : 'left center', // Centered for mobile
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(${slidePercentage}%)`,
            transition: isIOS && isSafari ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease-out' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5,
            WebkitTransform: `translateX(${slidePercentage}%)`, // Safari iOS hardware acceleration
            WebkitBackfaceVisibility: 'hidden', // Safari iOS optimization
          }}
        />
      )}
    </div>
  );
};

export default ImageMergeAnimation;
