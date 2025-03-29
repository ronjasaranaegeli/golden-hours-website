import { useEffect, useRef } from 'react';
const TransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  const transformationItems = [{
    title: "Tiefe Selbsterkenntnis",
    description: "Entdecke die Schichten deines Selbst und erkenne deine wahren Bedürfnisse, Werte und Potenziale.",
    image: "/images/golden-hours-image-9.JPG"
  }, {
    title: "Authentizität leben",
    description: "Lerne, im Einklang mit deiner inneren Wahrheit zu leben und Entscheidungen zu treffen, die zu deinem höchsten Wohl sind.",
    image: "/images/golden-hours-image-10.JPG"
  }, {
    title: "Innere Ruhe",
    description: "Entwickle die Fähigkeit, inmitten äußerer Umstände deine innere Mitte zu finden und von dort zu handeln.",
    image: "/images/golden-hours-image-11.JPG"
  }, {
    title: "Berufliche Neuausrichtung",
    description: "Erkenne, wie du deine Berufung in deinen Alltag integrieren kannst – sei es durch eine neue Karriere oder durch eine neue Haltung.",
    image: "/images/golden-hours-image-12.JPG"
  }, {
    title: "Tiefere Beziehungen",
    description: "Erlebe authentische Verbindungen zu anderen, basierend auf Präsenz, Klarheit und ehrlicher Kommunikation.",
    image: "/images/golden-hours-image-13.JPG"
  }, {
    title: "Freude am Sein",
    description: "Spüre wieder die natürliche Freude des Seins, jenseits von äußeren Umständen und Bedingungen.",
    image: "/images/golden-hours-image-14.JPG"
  }];
  return <section 
      id="transformation" 
      className="py-24 md:py-32 relative" 
      ref={sectionRef}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-right lg:bg-right z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/plant-leaves-shadow-background-mirrored.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10"> 
        <div className="max-w-3xl mx-auto text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
            Transformation, die dein Leben verändert
          </h2>
          
          <p className="text-lg leading-relaxed">Was während unserer gemeinsamen Reise geschieht, ist nicht nur eine äussere Veränderung, sondern eine tiefgreifende innere Transformation:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationItems.map((item, index) => <div key={index} className="group bg-white rounded-xl shadow-sm overflow-hidden border border-golden-100 hover:shadow-md transition-all duration-300 reveal" ref={el => itemsRef.current[index] = el} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-3 text-forest-800 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-forest-600">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TransformationSection;