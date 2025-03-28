
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
    <section id="solution" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="relative" ref={leftColumnRef}>
            <div className="reveal">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10 heading-underline">
                Golden Hours
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Golden Hours ist ein intensives, maßgeschneidertes 3-monatiges 1:1 Coaching-Programm, das dich auf deinem Weg zu mehr Klarheit, Authentizität und innerer Führung begleitet.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Anders als standardisierte Programme, die dir einen vorgegebenen Weg auferlegen, integriert Golden Hours verschiedene Methoden und passt sie individuell an deine Bedürfnisse an:
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
                  <p className="text-lg">Tiefgreifende 1:1 Coaching-Sessions, die exakt dort ansetzen, wo du gerade stehst</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
                  <p className="text-lg">Integration verschiedener Methoden wie Meditation, Yoga, EFT und Atem­arbeit</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
                  <p className="text-lg">Täglicher Support per WhatsApp für unmittelbare Fragen und Heraus­forderungen</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
                  <p className="text-lg">Persönliche Rituale und Praktiken, die deinen individuellen Weg unter­stützen</p>
                </li>
              </ul>
              
              <div className="bg-forest-50 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg md:text-xl leading-relaxed italic font-serif">
                  "Mein Ansatz ist es, nicht nur Wissen zu vermitteln, sondern einen sicheren Raum zu schaffen, in dem du deine eigene innere Führung stärken kannst."
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden reveal" ref={rightColumnRef}>
            <img 
              src="/images/golden-hours-image-2.JPG" 
              alt="Golden Hours Coaching - Transformative Reise" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="font-serif text-2xl mb-2">3-monatiges 1:1 Coaching</p>
              <p className="text-lg opacity-90">Eine transformative Reise zu deinem wahren Selbst</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
