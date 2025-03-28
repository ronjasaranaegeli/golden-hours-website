
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

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

  // Testimonial videos data with images
  const testimonials = [
    { name: "Marie S.", role: "Unternehmerin", image: "/images/golden-hours-image-4.JPG" },
    { name: "Thomas K.", role: "Lehrer", image: "/images/golden-hours-image-5.JPG" },
    { name: "Laura P.", role: "Marketing Managerin", image: "/images/golden-hours-image-6.JPG" },
    { name: "David M.", role: "Coach", image: "/images/golden-hours-image-7.JPG" },
    { name: "Sarah L.", role: "Kreative", image: "/images/golden-hours-image-8.JPG" },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-golden-50/50" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
            Stimmen der Transformation
          </h2>
          
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Höre, wie Golden Hours das Leben dieser Menschen verändert hat
          </p>
        </div>
        
        {/* Active Video Display */}
        <div className="mb-16">
          <div className="aspect-video max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-golden-100">
            {activeVideo !== null ? (
              <div className="h-full w-full flex items-center justify-center bg-forest-50 relative">
                <img 
                  src={testimonials[activeVideo].image} 
                  alt={`Testimonial von ${testimonials[activeVideo].name}`}
                  className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center border border-golden-200 mb-4 mx-auto cursor-pointer hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-forest-800 ml-1" />
                    </div>
                    <p className="text-forest-800 font-serif text-2xl mb-2">{testimonials[activeVideo].name}</p>
                    <p className="text-forest-600">{testimonials[activeVideo].role}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-forest-50">
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
              className={`cursor-pointer transition-all duration-300 reveal ${activeVideo === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveVideo(index)}
            >
              <div className={`aspect-video bg-white rounded-xl mb-3 overflow-hidden shadow-sm ${activeVideo === index ? 'ring-2 ring-primary' : 'border border-golden-100'}`}>
                <div className="h-full w-full relative">
                  <img 
                    src={testimonial.image} 
                    alt={`Thumbnail von ${testimonial.name}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 hover:bg-black/30">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border border-golden-200">
                      <Play className="w-5 h-5 text-forest-800 ml-0.5" />
                    </div>
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
