
import { useEffect, useRef } from 'react';

const ProblemSection = () => {
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
    <section id="problem" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
              Zwischen dem Leben das du führst und dem Leben das in dir ruft
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Du spürst es tief in dir – die Ahnung, dass dein Leben mehr sein könnte als der tägliche Trott von 9-to-5. Eine leise Stimme, die fragt, ob das wirklich alles ist.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Vielleicht hast du bereits erste Schritte auf deinem spirituellen Weg unternommen. Meditation, Achtsamkeit, Yoga – du kennst die Werkzeuge. Und doch fühlst du dich manchmal verloren in der Fülle der Informationen und Praktiken.
            </p>
            
            <div className="w-16 h-[1px] bg-forest-300 my-8"></div>
            
            <p className="text-lg leading-relaxed mb-6 font-serif italic">
              Die Fragen werden drängender:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-800">"Wie finde ich meinen eigenen, authentischen Weg?"</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-800">"Wie kann ich mein spirituelles Erwachen mit meinem Alltag vereinbaren?"</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-800">"Woher weiß ich, dass ich den richtigen Schritt mache?"</p>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed font-medium">
              Diese Unsicherheit und das Gefühl des "Dazwischen-Seins" – zwischen dem alten Leben und dem neuen Potenzial – ist genau der Punkt, an dem Transformation beginnen kann.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-[600px] reveal overflow-hidden rounded-2xl" ref={imageRef}>
            <img 
              src="/images/golden-hours-image-15.JPG" 
              alt="Golden Hours Coaching - Transformative Reise" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
