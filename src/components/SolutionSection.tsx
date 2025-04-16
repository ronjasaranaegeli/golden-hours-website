
import { useEffect, useRef } from 'react';
import { TooltipComponent } from '@/components/ui/TooltipComponent';

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
      className="py-24 md:py-32 bg-golden-50/50 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] lg:h-[600px] reveal overflow-hidden rounded-sm order-2 lg:order-1" ref={imageRef}>
            <img 
              src="/images/golden-hours-image-2.JPG" 
              alt="Golden Hours Coaching - Transformative Reise" 
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-2xl text-white mb-2">Golden Hours</p>
              <p className="text-lg text-white/90">Dein Weg zu tiefer Bewusstheit und innerem Frieden</p>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="reveal order-1 lg:order-2" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
              Golden Hours
            </h2>
            
            <h3 className="text-xl font-serif mb-6 text-forest-800">Deine 3-Monats-Reise zur Essenz</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Ein intensiver, massgeschneiderter 1:1 Raum, in dem Persönlichkeitsentwicklung auf Bewusstseinserweiterung trifft.
            </p>
            
            <div className="p-5 rounded-sm bg-forest-500/10 border-l-4 border-primary my-6">
              <p className="text-lg leading-relaxed italic font-serif">
                "Ich schaffe einen sicheren, heiligen Raum, damit du deine innere Weisheit aktivierst und deiner Wahrheit folgst."
              </p>
            </div>
            
            <p className="text-lg mb-4">Was dich erwartet:</p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <div className="text-lg">
                  Ganzheitliche Sessions mit Yoga, Meditation und 
                  <span className="inline-block ml-1">
                    <TooltipComponent
                      trigger={<span className="border-dotted border-b-2 border-primary/70 cursor-help">EFT</span>}
                      content="Emotional Freedom Techniques (EFT) ist eine psychologische Akupressur-Technik, die durch sanftes Klopfen auf bestimmte Körperpunkte emotionale Blockaden löst und tiefe Heilung ermöglicht."
                    />
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <div className="text-lg">Tiefgreifendes Workbook zur nachhaltigen Selbstreflexion</div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <div className="text-lg">Täglicher Support via Circle App (Mo-Fr)</div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <div className="text-lg">Massgeschneiderte spirituelle Praktiken für deinen Alltag</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
