
import { useEffect, useRef } from 'react';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (leftColumnRef.current) leftColumnRef.current.classList.add('active');
          if (rightColumnRef.current) rightColumnRef.current.classList.add('active');
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
    <section id="solution" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative" ref={leftColumnRef}>
            <div className="reveal">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10 relative inline-block">
                <span className="relative z-10">Golden Hours</span>
                <span className="absolute bottom-0 left-0 h-3 w-full bg-forest-200 -z-0"></span>
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Golden Hours ist ein intensives, maßgeschneidertes 3-monatiges 1:1 Coaching-Programm, das dich auf deinem Weg zu mehr Klarheit, Authentizität und innerer Führung begleitet.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Anders als standardisierte Programme, die dir einen vorgegebenen Weg auferlegen, integriert Golden Hours verschiedene Methoden und passt sie individuell an deine Bedürfnisse an:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary font-serif text-xl mr-3">•</span>
                  <p className="text-lg">Tiefgreifende 1:1 Coaching-Sessions, die exakt dort ansetzen, wo du gerade stehst</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-xl mr-3">•</span>
                  <p className="text-lg">Integration verschiedener Methoden wie Meditation, Yoga, EFT und Atem­arbeit</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-xl mr-3">•</span>
                  <p className="text-lg">Täglicher Support per WhatsApp für unmittelbare Fragen und Heraus­forderungen</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-xl mr-3">•</span>
                  <p className="text-lg">Persönliche Rituale und Praktiken, die deinen individuellen Weg unter­stützen</p>
                </li>
              </ul>
              
              <p className="text-lg md:text-xl leading-relaxed italic border-l-4 border-primary pl-4">
                "Mein Ansatz ist es, nicht nur Wissen zu vermitteln, sondern einen sicheren Raum zu schaffen, in dem du deine eigene innere Führung stärken kannst."
              </p>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg reveal" ref={rightColumnRef}>
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2274&auto=format&fit=crop" 
              alt="Foggy mountain summit symbolizing journey of transformation" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-xl mb-2">3-monatiges 1:1 Coaching</p>
              <p className="text-sm opacity-90">Eine transformative Reise zu deinem wahren Selbst</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
