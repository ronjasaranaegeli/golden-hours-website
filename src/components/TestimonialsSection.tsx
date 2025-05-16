
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

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

  // Testimonial videos data with images and video URLs
  const testimonials = [
    { name: "Marie S.", role: "Unternehmerin", image: "/images/golden-hours-image-4.JPG", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Thomas K.", role: "Lehrer", image: "/images/golden-hours-image-5.JPG", videoUrl: "https://www.youtube.com/embed/rokGy0huYEA" },
    { name: "Laura P.", role: "Marketing Managerin", image: "/images/golden-hours-image-6.JPG", videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3" }, // Ersetze VIDEO_ID_3 mit einer echten YouTube Video ID
    { name: "David M.", role: "Coach", image: "/images/golden-hours-image-7.JPG", videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4" }, // Ersetze VIDEO_ID_4 mit einer echten YouTube Video ID
    { name: "Sarah L.", role: "Kreative", image: "/images/golden-hours-image-8.JPG", videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5" }, // Ersetze VIDEO_ID_5 mit einer echten YouTube Video ID
  ];

  const handleThumbnailClick = (index: number) => {
    setActiveVideo(index);
    setShowVideoPlayer(false); // Show poster image first
  };

  const handlePlayVideo = () => {
    setShowVideoPlayer(true);
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
            Höre, wie Golden Hours das Leben dieser Menschen verändert hat
          </p>
        </div>
        
        {/* Active Video Display */}
        <div className="mb-16">
          <div className="aspect-video max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-md border border-golden-100">
            {activeVideo !== null ? (
              showVideoPlayer ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${testimonials[activeVideo].videoUrl}?autoplay=1&modestbranding=1&rel=0`}
                  title={`Testimonial von ${testimonials[activeVideo].name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-forest-50 relative cursor-pointer" onClick={handlePlayVideo}>
                  <img 
                    src={testimonials[activeVideo].image} 
                    alt={`Vorschau für Testimonial von ${testimonials[activeVideo].name}`}
                    className="h-full w-full object-cover opacity-30" // Reduced opacity for better visibility of play button
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center border-2 border-primary mb-4 mx-auto hover:bg-white hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-primary ml-1" />
                      </div>
                      <p className="text-white font-serif text-3xl mb-2 drop-shadow-md">{testimonials[activeVideo].name}</p>
                      <p className="text-gray-200 text-lg drop-shadow-md">{testimonials[activeVideo].role}</p>
                    </div>
                  </div>
                </div>
              )
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
              className={`cursor-pointer transition-all duration-300 reveal group ${activeVideo === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className={`aspect-video bg-white rounded-xl mb-3 overflow-hidden shadow-sm relative ${activeVideo === index ? 'ring-2 ring-primary' : 'border border-golden-100 group-hover:ring-1 group-hover:ring-primary/50'}`}>
                <img 
                  src={testimonial.image} 
                  alt={`Thumbnail von ${testimonial.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:bg-black/40">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border border-golden-200 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-forest-800 ml-0.5" />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center font-serif text-forest-800">{testimonial.name}</h3>
              <p className="text-sm text-center text-forest-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
