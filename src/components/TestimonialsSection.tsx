
import { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (headerRef.current) headerRef.current.classList.add('active');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  // Placeholder testimonial videos data
  const testimonials = [
    { name: "Marie S.", role: "Unternehmerin" },
    { name: "Thomas K.", role: "Lehrer" },
    { name: "Laura P.", role: "Marketing Managerin" },
    { name: "David M.", role: "Coach" },
    { name: "Sarah L.", role: "Kreative" },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 heading-underline inline-block">
            Erfahrungen
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 max-w-3xl mx-auto">
            Höre, wie Golden Hours das Leben dieser Menschen verändert hat
          </p>
        </div>
        
        {/* Active Video Display */}
        <div className="mb-12">
          <div className="aspect-video max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-golden-100">
            {activeVideo !== null ? (
              <div className="h-full w-full flex items-center justify-center bg-golden-50">
                <p className="text-forest-800 font-serif text-xl">Testimonial Video von {testimonials[activeVideo].name}</p>
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-golden-50">
                <p className="text-forest-800 font-serif text-xl">Wähle ein Testimonial unten aus</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 reveal ${activeVideo === index ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveVideo(index)}
            >
              <div className="aspect-video bg-white rounded-lg mb-3 overflow-hidden shadow-sm border border-golden-100">
                <div className="h-full w-full flex items-center justify-center bg-golden-50">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border border-golden-200">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-10 border-l-forest-800 ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center font-serif">{testimonial.name}</h3>
              <p className="text-sm text-center text-forest-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
