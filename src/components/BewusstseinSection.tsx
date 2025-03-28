
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Brain, Lightbulb, Heart } from "lucide-react";
import { useRef, useEffect } from "react";

const BewusstseinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

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
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <section id="bewusstsein" className="py-24 md:py-32 bg-gradient-to-b from-golden-50 to-transparent" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal" ref={titleRef}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block">
            Die Reise zu deinem wahren Selbst
          </h2>
          <p className="text-lg leading-relaxed text-forest-800">
            Entdecke die transformative Kraft von Bewusstseinserweiterung, Persönlichkeitsentwicklung und Selbstheilungsaktivierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 reveal" ref={cardsRef}>
          <div className="flex flex-col items-center">
            <div className="h-[300px] w-full md:h-[350px] overflow-hidden rounded-3xl mb-6 bg-gradient-to-br from-golden-100 to-golden-50">
              <EvervaultCard text={<Brain className="w-10 h-10" />} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-forest-800">Bewusstseinserweiterung</h3>
            <p className="text-center text-forest-600">Erweitere deine Wahrnehmung und entdecke neue Perspektiven jenseits deiner bisherigen Grenzen.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-[300px] w-full md:h-[350px] overflow-hidden rounded-3xl mb-6 bg-gradient-to-br from-forest-100 to-forest-50">
              <EvervaultCard text={<Lightbulb className="w-10 h-10" />} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-forest-800">Persönlichkeitsentwicklung</h3>
            <p className="text-center text-forest-600">Entfalte dein volles Potenzial und wachse zu der Person, die du wirklich sein möchtest.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-[300px] w-full md:h-[350px] overflow-hidden rounded-3xl mb-6 bg-gradient-to-br from-golden-200 to-golden-100">
              <EvervaultCard text={<Heart className="w-10 h-10" />} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-3 text-forest-800">Selbstheilungsaktivierung</h3>
            <p className="text-center text-forest-600">Aktiviere die natürlichen Selbstheilungskräfte deines Körpers, Geistes und deiner Seele.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-golden-100 reveal" ref={descriptionRef}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="font-serif text-2xl mb-4 text-forest-800">Dein Weg zum höheren Bewusstsein</h3>
              <p className="mb-4 text-forest-700">In unseren Coaching-Sitzungen begleite ich dich auf einer tiefgreifenden Reise zu deinem wahren Selbst. Durch speziell entwickelte Techniken und Methoden öffnen wir gemeinsam Türen zu neuen Bewusstseinsebenen.</p>
              <p className="text-forest-700">Jede Sitzung ist ein Schritt auf dem Weg zu mehr Klarheit, innerer Ruhe und einem tieferen Verständnis deines Lebenswegs.</p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square max-w-[300px] mx-auto overflow-hidden rounded-full border-8 border-golden-100/50">
                <img 
                  src="/images/golden-hours-image-16.JPG" 
                  alt="Bewusstseinserweiterung" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden-100 rounded-full flex items-center justify-center z-10 shadow-md">
                <span className="font-serif text-forest-800 text-sm font-medium text-center">Entdecke dich selbst</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BewusstseinSection;
