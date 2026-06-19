import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WHATSAPP_URL = 'https://wa.me/41762800550?text=' + encodeURIComponent('Ich bin bereit, tiefer zu tauchen, und freue mich auf ein Erstgespräch, bei dem wir uns näher kennenlernen.');

const StickyWaitlistBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only show on mobile when scrolled past 50% of the page height
      const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
      setIsVisible(isMobile && scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Add animation effect when banner becomes visible
  useEffect(() => {
    if (isVisible && bannerRef.current) {
      bannerRef.current.classList.add('translate-y-0', 'opacity-100');
      bannerRef.current.classList.remove('translate-y-full', 'opacity-0');
    } else if (bannerRef.current) {
      bannerRef.current.classList.add('translate-y-full', 'opacity-0');
      bannerRef.current.classList.remove('translate-y-0', 'opacity-100');
    }
  }, [isVisible]);

  // Don't render the non-mobile version
  if (!isMobile) return null;

  return (
    <div 
      ref={bannerRef}
      className="fixed bottom-0 left-0 right-0 z-40 translate-y-full opacity-0 w-full transition-all duration-500 ease-in-out"
    >
      <div className="px-4 py-3 bg-white/95 backdrop-blur-sm shadow-lg border-t border-golden-100 mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h3 className="font-serif text-xl sm:text-2xl text-forest-800 font-medium leading-tight text-center sm:text-left">
              1:1 Deep Dive Check-in - sichere dir deinen Platz
            </h3>
            <p className="text-forest-600 leading-snug text-center sm:text-left">
              Melde dich direkt per WhatsApp
            </p>
          </div>
          <Button asChild className="w-full sm:w-auto" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1" />
              Per WhatsApp melden
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyWaitlistBanner;
