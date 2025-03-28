
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ImageMergeAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leftImageUrl, setLeftImageUrl] = useState('');
  const [rightImageUrl, setRightImageUrl] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    // Wir verwenden keine localStorage-Bilder mehr, um sicherzustellen, dass wir immer die neuesten Bilder laden
    // Stattdessen verwenden wir vorhandene hochgeladene Bilder ohne Schnurrbart

    // Bessere Bilder auswählen
    setLeftImageUrl('/lovable-uploads/7e44dd91-112d-4cb4-a631-f7f48cf99571.png');
    setRightImageUrl(isMobile 
      ? '/lovable-uploads/9f10dae5-5e3c-4c28-b6ac-8639ac370cdb.png' 
      : '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png');
    
    // Bilder vorladen
    const leftHalf = new Image();
    const rightHalf = new Image();
    const background = new Image();
    
    leftHalf.src = '/lovable-uploads/7e44dd91-112d-4cb4-a631-f7f48cf99571.png';
    rightHalf.src = isMobile 
      ? '/lovable-uploads/9f10dae5-5e3c-4c28-b6ac-8639ac370cdb.png'
      : '/lovable-uploads/24f3e263-20e5-49ac-b306-03654651f2f7-right.png';
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
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Initiale Scrollposition setzen, um Animation auszulösen
    setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Bildposition basierend auf Scroll berechnen
  // Niedrigerer Wert = höhere Empfindlichkeit beim Scrollen
  const scrollFactor = 3;
  
  // Linkes Bild gleitet von links, rechtes Bild gleitet von rechts ein
  // Maximales Gleiten ist 100% (vollständig außerhalb des Bildschirms)
  // Minimales Gleiten ist 0% (vollständig sichtbar)
  const slidePercentage = Math.max(0, Math.min(100, (scrollPosition / scrollFactor)));
  
  // Hintergrund-Zoom-Effekt
  const backgroundScale = 1 + (scrollPosition / 1000);

  // Korrekte Hintergrundposition für verschiedene Bildschirmgrößen
  const getBgPosition = () => {
    if (isMobile) {
      return 'center 25%'; // Angepasst, um die Hand auf der Brust auf dem Handy zu zeigen
    }
    return 'center 30%';
  };

  console.log("Animation state:", { isLoaded, leftImageUrl, rightImageUrl, slidePercentage, isMobile });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Hintergrundbild (zoomt beim Scrollen) */}
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

      {/* Linke Hälfte des Bildes - gleitet von links */}
      {leftImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 left-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${leftImageUrl}")`,
            backgroundPosition: isMobile ? '65% center' : 'right center', 
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(-${slidePercentage}%)`,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5
          }}
        />
      )}

      {/* Rechte Hälfte des Bildes - gleitet von rechts */}
      {rightImageUrl && (
        <div 
          className={`absolute top-0 bottom-0 right-0 h-full bg-cover bg-no-repeat ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url("${rightImageUrl}")`,
            backgroundPosition: isMobile ? 'center center' : 'left center', // Zentriert für Mobilgeräte
            backgroundSize: 'cover',
            width: '50%',
            transform: `translateX(${slidePercentage}%)`,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            zIndex: 5
          }}
        />
      )}

      {/* Anzeige des Ladezustands */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50 z-10">
          <div className="animate-pulse">Bilder werden geladen...</div>
        </div>
      )}
    </div>
  );
};

export default ImageMergeAnimation;
