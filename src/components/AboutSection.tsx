import { useEffect, useRef } from 'react';
import { TooltipComponent } from './ui/TooltipComponent';

const AboutSection = () => {
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
    <section 
      id="about" 
      className="py-24 md:py-32 relative z-20" 
      ref={sectionRef}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-left lg:bg-center z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/plant-leaves-shadow-background-mirrored.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-2 order-1 lg:order-1 reveal" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-100 rounded-sm -z-10"></div>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img 
                  src="/images/golden-hours-image-5-hochformat.JPG" 
                  alt="Coach Portrait" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-golden-100 rounded-sm -z-10"></div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="lg:col-span-3 order-2 lg:order-2 reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
              Mein Weg zu Golden Hours – Vom Suchen zum Sein
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Kennst du das Gefühl, dass mehr in dir steckt? Auch ich stand vor Jahren an diesem Punkt, fragte mich "Soll das alles sein?". Ein Job, der nicht erfüllte, persönliche Krisen – ich fühlte mich festgefahren, tief im <TooltipComponent trigger="Schatten" content="Die unterdrückten, unbewussten Anteile unseres Selbst, mit denen wir uns nicht identifizieren wollen" />. Dann kam der Weckruf, der mutige Schritt: Ich entschied mich, meiner eigenen Wahrheit ins Auge zu blicken.
              </p>
              
              <p className="text-lg leading-relaxed">
                Das war der Anfang meiner <TooltipComponent trigger="Transformation" content="Ein tiefgreifender Wandlungsprozess, der über oberflächliche Veränderungen hinausgeht und unser ganzes Sein umfasst" />: Ich kündigte, reiste, vertiefte mich in Yoga & Tanz, gründete mein eigenes Wirken mit Kursen, Workshops, meinem Podcast <a href="https://open.spotify.com/show/5UhLT3NQwHcN4ZRaFtrqRg" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:text-forest-700 font-medium transition-colors underline">{"\"Generation Om\""}</a>. Die Natur wurde mein Zuhause und Anker, mein Körper, mein Tempel und <TooltipComponent trigger="Kompass" content="Ein inneres Navigationssystem, das uns durch Intuition und Körperweisheit führt" />, die Liebe zum Leben, mein Glaube und grösster Lehrer.
              </p>
              
              <p className="text-lg leading-relaxed">
                Diese gelebte Erfahrung, die Höhen und Tiefen, ist das Herz und die Essenz von Golden Hours. Sie erlaubt mir, dich einfühlsam dabei zu unterstützen, deinen eigenen inneren Kompass wiederzufinden und zu aktivieren – und deiner Wahrheit zu folgen.
              </p>
            </div>
            
            {/* Video Placeholder with improved styling */}
            <div className="mt-10 bg-white rounded-xl shadow-sm border border-golden-100 overflow-hidden">
              <div className="aspect-video bg-forest-50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center border border-golden-200 mb-4 cursor-pointer hover:bg-white transition-colors duration-300">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-10 border-l-forest-800 ml-1"></div>
                  </div>
                  <p className="text-forest-800 font-medium">Persönliche Vorstellung (1-2 Min)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
