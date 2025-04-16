
import { useEffect, useRef } from 'react';
import { TooltipComponent } from '@/components/ui/TooltipComponent';
import { Card } from '@/components/ui/card';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="sticky top-24 lg:h-[600px] reveal overflow-hidden rounded-sm order-2 lg:order-1" ref={imageRef}>
            <img 
              src="/images/golden-hours-image-2.JPG" 
              alt="Golden Hours Coaching - Transformative Reise" 
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-xl text-white mb-1">Golden Hours</p>
              <p className="text-base text-white/90">Dein Weg zu tiefer Bewusstheit und innerem Frieden</p>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="reveal space-y-6 order-1 lg:order-2" ref={contentRef}>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-medium heading-underline inline-block">
                Golden Hours
              </h2>
              
              <h3 className="text-xl font-serif text-forest-800">
                Deine 3-Monats-Reise zur Essenz
              </h3>
              
              <p className="text-lg leading-relaxed">
                Ein intensiver, massgeschneiderter 1:1 Raum, in dem Persönlichkeitsentwicklung auf Bewusstseinserweiterung trifft.
              </p>
            </div>
            
            <div className="p-5 rounded-sm bg-forest-500/10 border-l-4 border-primary">
              <p className="text-lg leading-relaxed italic font-serif">
                "Ich schaffe einen sicheren, heiligen Raum, damit du deine innere Weisheit aktivierst und deiner Wahrheit folgst."
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-forest-800">Was dich erwartet:</h4>
              
              <div className="grid gap-3">
                <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/80">
                  <div className="flex items-start gap-4">
                    <div className="min-w-2 h-12 bg-golden-200/50 rounded-sm"></div>
                    <div>
                      <h5 className="text-lg font-medium font-serif">Ganzheitliche Sessions</h5>
                      <p className="text-forest-700 mt-1">
                        mit Yoga, Meditation und 
                        <span className="inline-block ml-1">
                          <TooltipComponent
                            trigger={<span className="border-dotted border-b-2 border-primary/70 cursor-help">EFT</span>}
                            content="Emotional Freedom Techniques (EFT) ist eine psychologische Akupressur-Technik, die durch sanftes Klopfen auf bestimmte Körperpunkte emotionale Blockaden löst und tiefe Heilung ermöglicht."
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/80">
                  <div className="flex items-start gap-4">
                    <div className="min-w-2 h-12 bg-golden-200/50 rounded-sm"></div>
                    <div>
                      <h5 className="text-lg font-medium font-serif">Tiefgreifendes Workbook</h5>
                      <p className="text-forest-700 mt-1">zur nachhaltigen Selbstreflexion</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/80">
                  <div className="flex items-start gap-4">
                    <div className="min-w-2 h-12 bg-golden-200/50 rounded-sm"></div>
                    <div>
                      <h5 className="text-lg font-medium font-serif">Täglicher Support</h5>
                      <p className="text-forest-700 mt-1">via Circle App (Mo-Fr)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/80">
                  <div className="flex items-start gap-4">
                    <div className="min-w-2 h-12 bg-golden-200/50 rounded-sm"></div>
                    <div>
                      <h5 className="text-lg font-medium font-serif">Spirituelle Praktiken</h5>
                      <p className="text-forest-700 mt-1">Massgeschneidert für deinen Alltag</p>
                    </div>
                  </div>
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
