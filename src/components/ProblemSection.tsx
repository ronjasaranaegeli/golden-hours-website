import { useEffect, useRef } from 'react';
import { Separator } from '@/components/ui/separator';
const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (contentRef.current) contentRef.current.classList.add('active');
        if (imageRef.current) imageRef.current.classList.add('active');
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="problem" className="py-24 md:py-32 relative z-20" ref={sectionRef}>
      {/* Background image */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-left lg:bg-center z-0" style={{
      backgroundImage: "url('/lovable-uploads/plant-leaves-shadow-background.jpg')"
    }}></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="reveal" ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">Zwischen dem Leben, das du führst, und dem Leben, das in dir ruft</h2>
            
            <p className="text-lg leading-relaxed mb-6">Du spürst die leise Stimme, die mehr will als den gewohnten Alltag. </p>
            
            {/* Simple Line Divider */}
            <div className="my-8 w-full flex justify-center">
              <div className="h-px w-1/2 bg-[#2b2621] opacity-50"></div>
            </div>
            
            <p className="text-lg leading-relaxed mb-6 font-serif italic">
              Sie stellt die wichtigen Fragen:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-900">Wer bin ich wirklich?</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-900">Was ist mein Lebenszweck auf dieser Erde?</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-serif text-lg mr-3">&bull;</span>
                <p className="text-lg italic text-forest-900">Wie finde ich meinen ureigenen, authentischen Weg?</p>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed font-medium">
              Dieses innere Wissen ist der Startpunkt deiner Reise zur wahren Transformation.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-[600px] reveal overflow-hidden rounded-2xl shadow-xl" ref={imageRef}>
            <img alt="Golden Hours Coaching - Transformative Reise" className="h-full w-full object-cover object-[center_85%]" src="/lovable-uploads/f93d3155-6044-4692-b6f1-0de291f53779.jpg" />
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;