
import { useEffect, useRef } from 'react';

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 heading-underline">
            Der Ruf nach mehr
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Du spürst es tief in dir – die Ahnung, dass dein Leben mehr sein könnte als der tägliche Trott von 9-to-5. Eine leise Stimme, die fragt, ob das wirklich alles ist.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Vielleicht hast du bereits erste Schritte auf deinem spirituellen Weg unternommen. Meditation, Achtsamkeit, Yoga – du kennst die Werkzeuge. Und doch fühlst du dich manchmal verloren in der Fülle der Informationen und Praktiken.
          </p>
          
          <div className="decorative-line"></div>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-serif italic">
            Die Fragen werden drängender:
          </p>
          
          <ul className="space-y-6 mb-10 ml-6">
            <li className="flex items-start">
              <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
              <p className="text-lg md:text-xl italic">"Wie finde ich meinen eigenen, authentischen Weg?"</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
              <p className="text-lg md:text-xl italic">"Wie kann ich mein spirituelles Erwachen mit meinem Alltag vereinbaren?"</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-serif text-2xl mr-4">&bull;</span>
              <p className="text-lg md:text-xl italic">"Woher weiß ich, dass ich den richtigen Schritt mache?"</p>
            </li>
          </ul>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 font-medium">
            Diese Unsicherheit und das Gefühl des "Dazwischen-Seins" – zwischen dem alten Leben und dem neuen Potenzial – ist genau der Punkt, an dem Transformation beginnen kann. Es ist der heilige Moment der Entscheidung: Weiter wie bisher oder mutig dem Ruf deiner Seele folgen?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
