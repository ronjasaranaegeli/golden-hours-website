import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import YouTube from 'react-youtube';

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

  // Testimonial videos data with YouTube URLs
  const testimonials = [
    { name: "Marica", youtubeId: "hJmTFzkHwUc" },
    { name: "Momo", youtubeId: "-To6ElGUa_4" },
    { name: "Renu", youtubeId: "bvs0kjY22e4" },
    { name: "Ania", youtubeId: "s8Q_LHusZcI" },
    { name: "Caterina", youtubeId: "4v2gUsak6Rc" },
  ];

  // YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 bg-golden-50/50 relative z-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal" ref={headerRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
            Stimmen der Transformation
          </h2>
          
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Höre, wie die IC•You-Journey das Leben dieser Menschen verändert hat
          </p>
        </div>
        
        {/* Active Video Display */}
        <div className="mb-16">
          <div className="aspect-video max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-golden-100">
            {activeVideo !== null ? (
              <div className="h-full w-full">
                <YouTube
                  videoId={testimonials[activeVideo].youtubeId}
                  opts={opts}
                  className="w-full h-full"
                  iframeClassName="w-full h-full rounded-xl"
                />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-forest-50">
                <p className="text-forest-800 font-serif text-xl">Wähle ein Testimonial unten aus</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Testimonial Thumbnails */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${activeVideo === index ? 'scale-105' : 'hover:scale-105'}`}
              onClick={() => setActiveVideo(index)}
            >
              <div className={`aspect-video bg-white rounded-xl mb-3 overflow-hidden shadow-sm ${activeVideo === index ? 'ring-2 ring-primary' : 'border border-golden-100'}`}>
                <div className="h-full w-full relative">
                  <img 
                    src={`https://img.youtube.com/vi/${testimonial.youtubeId}/maxresdefault.jpg`}
                    alt={`Testimonial von ${testimonial.name}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback to medium resolution if maxresdefault fails
                      e.currentTarget.src = `https://img.youtube.com/vi/${testimonial.youtubeId}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 hover:bg-black/30">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border border-golden-200">
                      <Play className="w-5 h-5 text-forest-800 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center font-serif">{testimonial.name}</h3>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
