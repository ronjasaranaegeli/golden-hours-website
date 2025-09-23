import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FULL_IMAGE_PATH = '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7.png';
const BACKGROUND_IMAGE_PATH = '/images/golden-hours-image-1.JPG';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leftImageUrl, setLeftImageUrl] = useState('');
  const [rightImageUrl, setRightImageUrl] = useState('');
  const [useFullImageFallback, setUseFullImageFallback] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    let isMounted = true;

    const storedLeftImg = typeof window !== 'undefined' ? localStorage.getItem('leftHalfImage') : null;
    const storedRightImg = typeof window !== 'undefined' ? localStorage.getItem('rightHalfImage') : null;

    const assignImages = (leftSrc: string, rightSrc: string, fallback: boolean) => {
      if (!isMounted) return;
      setLeftImageUrl(leftSrc);
      setRightImageUrl(rightSrc);
      setUseFullImageFallback(fallback);
      setIsLoaded(true);
    };

    if (storedLeftImg && storedRightImg) {
      assignImages(storedLeftImg, storedRightImg, false);
    } else {
      const fullImage = new Image();
      fullImage.crossOrigin = 'anonymous';
      fullImage.src = FULL_IMAGE_PATH;

      fullImage.onload = () => {
        if (!isMounted) return;

        const width = fullImage.width / 2;
        const height = fullImage.height;

        const leftCanvas = document.createElement('canvas');
        leftCanvas.width = width;
        leftCanvas.height = height;

        const rightCanvas = document.createElement('canvas');
        rightCanvas.width = width;
        rightCanvas.height = height;

        const leftCtx = leftCanvas.getContext('2d');
        const rightCtx = rightCanvas.getContext('2d');

        if (leftCtx && rightCtx) {
          leftCtx.drawImage(fullImage, 0, 0, width, height, 0, 0, width, height);
          rightCtx.drawImage(fullImage, width, 0, width, height, 0, 0, width, height);

          const leftDataUrl = leftCanvas.toDataURL('image/png');
          const rightDataUrl = rightCanvas.toDataURL('image/png');

          try {
            localStorage.setItem('leftHalfImage', leftDataUrl);
            localStorage.setItem('rightHalfImage', rightDataUrl);
          } catch (error) {
            console.warn('Speichern der geteilten Bilder im localStorage nicht möglich:', error);
          }

          assignImages(leftDataUrl, rightDataUrl, false);
        } else {
          assignImages(FULL_IMAGE_PATH, FULL_IMAGE_PATH, true);
        }
      };

      fullImage.onerror = () => {
        assignImages(FULL_IMAGE_PATH, FULL_IMAGE_PATH, true);
      };
    }

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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
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
          backgroundImage: `url("${BACKGROUND_IMAGE_PATH}")`,
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
            backgroundPosition: useFullImageFallback ? 'left center' : (isMobile ? '65% center' : 'right center'), 
            backgroundSize: useFullImageFallback ? '200% 100%' : 'cover',
            width: '50%',
            transform: `translate3d(-${slidePercentage}%, 0, 0)`,
            transition: isIOS && isSafari ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease-out' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
      )}

      {/* Right half of the image - slide from right */}
      {rightImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${rightImageUrl}")`,
            backgroundPosition: useFullImageFallback ? 'right center' : (isMobile ? 'center center' : 'left center'),
            backgroundSize: useFullImageFallback ? '200% 100%' : 'cover',
            width: '50%',
            transform: `translate3d(${slidePercentage}%, 0, 0)`,
            transition: isIOS && isSafari ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease-out' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
      )}
    </div>
  );
};

export default ImageMergeAnimation;
