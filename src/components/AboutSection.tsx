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
    <section 
      id="about" 
      className="py-24 md:py-32 bg-golden-50/50 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-2 order-1 lg:order-1 reveal" ref={imageRef}>
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
          
          {/* Right Column: Content */}
          <div className="lg:col-span-3 order-2 lg:order-2 reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
              Über mich — Mein Weg zu Golden Hours
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
              
              <div className="w-16 h-[1px] bg-forest-300 my-8"></div>
              
              <p className="text-lg leading-relaxed font-serif italic text-forest-800">
                Ich glaube an die kraftvolle Einfachheit der Wahrheit und an die Fähigkeit jedes Menschen, sein authentisches Selbst zu leben – besonders in einer Zeit, die nach neuen Wegen des Seins ruft.
              </p>
            </div>
            
            {/* Video Placeholder with improved styling */}
            <div className="mt-10 bg-white rounded-xl shadow-sm border border-golden-100 overflow-hidden">
              <div className="aspect-video bg-forest-50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center border border-golden-200 mb-4 cursor-pointer hover:bg-white transition-colors duration-300">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-10 border-l-forest-800 ml-1"></div>
                  </div>
                  <p className="text-forest-800 font-medium">Persönliche Vorstellung (1-2 Min)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
