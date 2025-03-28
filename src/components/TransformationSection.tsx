
import { useEffect, useRef } from 'react';

const TransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const transformationItems = [
    {
      title: "Tiefe Selbsterkenntnis",
      description: "Entdecke die Schichten deines Selbst und erkenne deine wahren Bedürfnisse, Werte und Potenziale.",
      image: "/images/golden-hours-image-9.JPG"
    },
    {
      title: "Authentizität leben",
      description: "Lerne, im Einklang mit deiner inneren Wahrheit zu leben und Entscheidungen zu treffen, die zu deinem höchsten Wohl sind.",
      image: "/images/golden-hours-image-10.JPG"
    },
    {
      title: "Innere Ruhe",
      description: "Entwickle die Fähigkeit, inmitten äußerer Umstände deine innere Mitte zu finden und von dort zu handeln.",
      image: "/images/golden-hours-image-11.JPG"
    },
    {
      title: "Berufliche Neuausrichtung",
      description: "Erkenne, wie du deine Berufung in deinen Alltag integrieren kannst – sei es durch eine neue Karriere oder durch eine neue Haltung.",
      image: "/images/golden-hours-image-12.JPG"
    },
    {
      title: "Tiefere Beziehungen",
      description: "Erlebe authentische Verbindungen zu anderen, basierend auf Präsenz, Klarheit und ehrlicher Kommunikation.",
      image: "/images/golden-hours-image-13.JPG"
    },
    {
      title: "Freude am Sein",
      description: "Spüre wieder die natürliche Freude des Seins, jenseits von äußeren Umständen und Bedingungen.",
      image: "/images/golden-hours-image-14.JPG"
    },
  ];

  return (
    <section id="transformation" className="py-24 md:py-32 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16 reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 heading-underline inline-block">
            Deine Transformation
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 max-w-3xl mx-auto">
            Was während unserer gemeinsamen Reise geschieht, ist nicht nur eine äußere Veränderung, sondern eine tiefgreifende innere Transformation:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationItems.map((item, index) => (
            <div 
              key={index} 
              className="elegant-card reveal overflow-hidden"
              ref={el => itemsRef.current[index] = el}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4 text-forest-800">{item.title}</h3>
              <p className="text-forest-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
