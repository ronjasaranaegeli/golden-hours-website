import { useEffect, useRef } from 'react';

const TransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const keywordsRef = useRef<HTMLDivElement>(null);

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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    
    if (keywordsRef.current) {
      observer.observe(keywordsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
      
      if (keywordsRef.current) {
        observer.unobserve(keywordsRef.current);
      }
    };
  }, []);

  return (
    <section id="transformation" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative min-h-[500px] md:min-h-[600px] bg-background/50 rounded-3xl border border-golden-100/20">
          
          {/* Journey Title - Top Left */}
          <div 
            ref={titleRef} 
            className="absolute top-10 left-10 text-forest-800 reveal"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl italic opacity-80">A Journey of</h3>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mt-1">Self Discovery</h2>
          </div>
          
          {/* Circle - Center */}
          <div 
            ref={circleRef} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 reveal"
          >
            <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-2 border-forest-600/40 flex items-center justify-center">
              <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border border-forest-600/60"></div>
            </div>
          </div>
          
          {/* Keywords - Bottom Right */}
          <div 
            ref={keywordsRef} 
            className="absolute bottom-10 right-10 text-right text-forest-800 reveal"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="font-serif text-lg md:text-xl opacity-80 mb-1">Bewusstseinserweiterung</p>
            <p className="font-serif text-lg md:text-xl opacity-80 mb-1">Persönlichkeitsentwicklung</p>
            <p className="font-serif text-lg md:text-xl opacity-80">Selbstheilungsaktivierung</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
