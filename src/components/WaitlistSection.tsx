import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import InfoBox from './ui/InfoBox';
const WaitlistSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (formRef.current) formRef.current.classList.add('active');
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="waitlist" className="py-24 md:py-32 relative z-20" ref={sectionRef}>
      {/* Jungle background image with overlay - same as BalanceGraphic */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("/images/jungle.webp")'
      }}>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 reveal flex flex-col" ref={formRef}>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 heading-underline inline-block text-forest-800">Du siehst Dich. Du erinnerst Dich. Du lebst Dich.</h2>

              <p className="text-lg mb-6 text-forest-600">
                Die Räume für den 1:1 Deep Dive sind für dich geöffnet. Wenn du dich für deinen Platz entscheidest, trittst du in einen geschützten Raum voller Transformation und Wachstum ein.
              </p>

              <p className="text-lg mb-6 text-forest-600">
                Starte den ersten Schritt zu deinem ausgeglichenen Leben und finde heraus, ob Golden Hours das richtige Coaching für dich ist.
              </p>
            </div>

            <div className="mt-auto pt-8 pb-4 relative">
              {/* Info box with new design */}
              <InfoBox className="mb-8">
                <p className="text-forest-700">Die beste Investition ist die in dich selbst. Du hast nur einen Geist und einen Körper, und die müssen dein ganzes Leben lang halten - Warren Buffet</p>
              </InfoBox>

              {/* Button styled to match the image */}
              <Button asChild className="w-auto px-8 py-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-medium" size="default">
                <a
                  href={'https://wa.me/41762800550?text=' + encodeURIComponent('Hallo du mutige Seele! Schön hast Du den Weg hierher gefunden. Bist du bereit für innere Arbeit, persönliche Weiterentwicklung und eine transformative Reise? Dann schlag mir 2-3 Daten vor für ein kostenloses Erstgespräch. Deine Prozessbegleiterin -Ronja')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.07 21.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.2-.57-.35Z"/>
                  </svg>
                  <span>Per WhatsApp melden</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistSection;
