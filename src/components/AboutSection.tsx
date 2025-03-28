
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
    <section id="about" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-3 order-2 lg:order-1 reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10 relative inline-block">
              <span className="relative z-10">Über mich</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-forest-200 -z-0"></span>
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
              
              <p className="text-lg leading-relaxed font-medium">
                Ich glaube an die kraftvolle Einfachheit der Wahrheit und an die Fähigkeit jedes Menschen, sein authentisches Selbst zu leben – besonders in einer Zeit, die nach neuen Wegen des Seins ruft.
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="mt-8 bg-forest-50 p-3 rounded-xl">
              <div className="aspect-video rounded-lg bg-forest-100 flex items-center justify-center text-forest-800">
                <p>Vorstellungsvideo (1-2 Min)</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="lg:col-span-2 order-1 lg:order-2 reveal" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest-100 rounded-xl -z-10"></div>
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1887&auto=format&fit=crop" 
                  alt="Coach Portrait" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-golden-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
