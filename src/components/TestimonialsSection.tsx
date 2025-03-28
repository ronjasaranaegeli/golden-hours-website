
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
    <section id="testimonials" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 relative inline-block">
            <span className="relative z-10">Erfahrungen</span>
            <span className="absolute bottom-0 left-0 h-3 w-full bg-forest-200 -z-0"></span>
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-0 max-w-3xl mx-auto">
            Höre, wie Golden Hours das Leben dieser Menschen verändert hat
          </p>
        </div>
        
        {/* Active Video Display */}
        <div className="mb-12">
          <div className="aspect-video max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-md">
            {activeVideo !== null ? (
              <div className="h-full w-full flex items-center justify-center bg-forest-50">
                <p className="text-forest-800">Testimonial Video von {testimonials[activeVideo].name}</p>
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-forest-50">
                <p className="text-forest-800">Wähle ein Testimonial unten aus</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 reveal ${activeVideo === index ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveVideo(index)}
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-golden-100">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-forest-800 ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center">{testimonial.name}</h3>
              <p className="text-sm text-center text-forest-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
