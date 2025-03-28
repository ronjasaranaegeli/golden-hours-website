
import { useEffect, useRef } from 'react';

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
    <section id="solution" className="py-24 md:py-32 bg-golden-50/50" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] lg:h-[600px] reveal overflow-hidden rounded-2xl order-2 lg:order-1" ref={imageRef}>
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
            
            <p className="text-lg leading-relaxed mb-6">
              Golden Hours ist ein intensives, maßgeschneidertes 3-monatiges 1:1 Coaching-Programm, das dich auf deinem Weg zu mehr Klarheit, Authentizität und innerer Führung begleitet.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Anders als standardisierte Programme, die dir einen vorgegebenen Weg auferlegen, integriert Golden Hours verschiedene Methoden und passt sie individuell an deine Bedürfnisse an:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg">Tiefgreifende 1:1 Coaching-Sessions, die exakt dort ansetzen, wo du gerade stehst</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg">Integration verschiedener Methoden wie Meditation, Yoga, EFT und Atem­arbeit</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg">Täglicher Support per WhatsApp für unmittelbare Fragen und Heraus­forderungen</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg">Persönliche Rituale und Praktiken, die deinen individuellen Weg unter­stützen</p>
              </li>
            </ul>
            
            <div className="p-6 rounded-xl bg-forest-50 border-l-4 border-primary mt-8">
              <p className="text-lg leading-relaxed italic font-serif text-forest-800">
                "Mein Ansatz ist es, nicht nur Wissen zu vermitteln, sondern einen sicheren Raum zu schaffen, in dem du deine eigene innere Führung stärken kannst."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
