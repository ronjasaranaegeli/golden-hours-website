
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-3 order-2 lg:order-1 reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10 heading-underline">
              Über mich
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Mein Weg führte mich von einer erfolgreichen Karriere in der Unternehmensberatung zu einem tiefgreifenden spirituellen Erwachen. Nach Jahren des Funktionierens im "System", erlebte ich einen Zusammenbruch, der sich letztlich als Durchbruch herausstellte.
              </p>
              
              <p className="text-lg leading-relaxed">
                Heute verbinde ich meine analytischen Fähigkeiten mit meiner intuitiven Gabe und begleite Menschen auf ihrem Weg des bewussten Erwachens – durch meinen Podcast "Generation Om", Workshops und vor allem durch tiefgreifende 1:1 Coachings.
              </p>
              
              <p className="text-lg leading-relaxed">
                Meine Ausbildung in verschiedenen Coaching-Methoden, Yoga und spirituellen Praktiken gibt mir das Handwerkszeug – doch meine eigene Transformationsreise gibt mir das Verständnis für die Herausforderungen und die Schönheit dieses Weges.
              </p>
              
              <div className="decorative-line"></div>
              
              <p className="text-lg leading-relaxed font-serif italic">
                Ich glaube an die kraftvolle Einfachheit der Wahrheit und an die Fähigkeit jedes Menschen, sein authentisches Selbst zu leben – besonders in einer Zeit, die nach neuen Wegen des Seins ruft.
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="mt-10 bg-white p-4 rounded-xl shadow-sm border border-golden-100">
              <div className="aspect-video rounded-lg bg-golden-50 flex items-center justify-center text-forest-800">
                <p>Vorstellungsvideo (1-2 Min)</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="lg:col-span-2 order-1 lg:order-2 reveal" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-100 rounded-xl -z-10"></div>
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <img 
                  src="/images/golden-hours-image-3.JPG" 
                  alt="Coach Portrait" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-golden-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
