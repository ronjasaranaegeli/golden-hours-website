
import { useEffect, useRef } from 'react';
import { TooltipComponent } from '@/components/ui/TooltipComponent';
import { Card } from '@/components/ui/card';
import InfoBox from './ui/InfoBox';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) contentRef.current.classList.add('active');
          if (imageRef.current) imageRef.current.classList.add('active');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="solution" 
      className="py-16 md:py-24 bg-golden-50/50 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative lg:h-[700px] reveal overflow-hidden rounded-sm order-2 lg:order-1 lg:sticky lg:top-24" ref={imageRef}>
            <img 
              src="/images/golden-hours-image-2.JPG" 
              alt="Golden Hours Coaching - Transformative Reise" 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="reveal space-y-8 order-1 lg:order-2" ref={contentRef}>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-medium heading-underline inline-block">
                1:1 Deep Dive
              </h2>
              
              <h3 className="text-xl font-serif text-forest-800">
                Deine 3-Monats-Reise zur Essenz
              </h3>
              
              <p className="text-lg leading-relaxed">
                In dem du dein Bewusstsein erweiterst und dich daraus persönlich entwickelst.
              </p>
            </div>
            
            {/* Quote box with new design */}
            <InfoBox isQuote={true}>
              <p className="text-lg leading-relaxed">
                Ich schaffe einen sicheren und geschützten Raum in dem ich deine innere Weisheit aktiviere und du dich an deine Essenz erinnerst.
              </p>
            </InfoBox>
            
            <div className="space-y-6">
              <h4 className="text-xl font-serif text-forest-800">Was dich erwartet:</h4>
              
              <div className="grid gap-4">
                <Card className="p-4 transition-all duration-300 hover:shadow-md bg-white/80">
                  <h5 className="text-lg font-medium mb-2 font-serif">Ganzheitliche Sessions</h5>
                  <p className="text-forest-700">
                    <TooltipComponent
                      trigger="Yoga"
                      content="Eine jahrtausendealte Praxis aus Bewegung, Atem und innerer Ausrichtung, die Körper, Geist und Herz in Einklang bringt."
                    />
                    ,{' '}
                    <TooltipComponent
                      trigger="Meditation"
                      content="Ein bewusster Raum stiller Präsenz, der dein Nervensystem reguliert und innere Klarheit stärkt."
                    />
                    ,{' '}
                    <TooltipComponent
                      trigger="Selbsthypnose"
                      content="Ein Zustand tiefer Entspannung, in dem du dein Unterbewusstsein gezielt mit neuen Bildern und Impulsen nährst."
                    />
                    ,{' '}
                    <span className="inline-block">
                      <TooltipComponent
                        trigger={<span className="border-dotted border-b-2 border-primary/70 cursor-help">EFT</span>}
                        content="Emotional Freedom Techniques (EFT) ist eine psychologische Akupressur-Technik, die durch sanftes Klopfen auf bestimmte Körperpunkte emotionale Blockaden löst und tiefe Heilung ermöglicht."
                      />
                    </span>
                    {' '}und{' '}
                    <TooltipComponent
                      trigger="NLP"
                      content="Neurolinguistisches Programmieren verbindet Sprache, Bilder und Gefühle, um neue, stärkende Muster in deinem Alltag zu verankern."
                    />
                    .
                  </p>
                </Card>

                <Card className="p-4 transition-all duration-300 hover:shadow-md bg-white/80">
                  <h5 className="text-lg font-medium mb-2 font-serif">Tiefgreifendes Workbook</h5>
                  <p className="text-forest-700">zur nachhaltigen Selbstreflexion</p>
                </Card>

                <Card className="p-4 transition-all duration-300 hover:shadow-md bg-white/80">
                  <h5 className="text-lg font-medium mb-2 font-serif">Täglicher Support</h5>
                  <p className="text-forest-700">via WhatsApp (Mo-Fr)</p>
                </Card>

                <Card className="p-4 transition-all duration-300 hover:shadow-md bg-white/80">
                  <h5 className="text-lg font-medium mb-2 font-serif">Spirituelle Praktiken</h5>
                  <p className="text-forest-700">Massgeschneidert für deinen Alltag</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
