
import { useEffect, useRef } from 'react';
import { Timeline } from "@/components/ui/timeline";
import { Clock, BookOpen, Heart, Star, Award } from "lucide-react";

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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

  const journeyData = [
    {
      title: "2018",
      content: (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-golden-100 mb-10">
          <div className="flex items-center mb-4">
            <Clock className="text-primary mr-2 w-5 h-5" />
            <h3 className="text-xl font-serif text-forest-800">Der Anfang</h3>
          </div>
          <p className="text-forest-600 mb-6">
            Nach jahrelanger Karriere in der Unternehmensberatung kam der innere Ruf nach mehr Tiefe und Authentizität. Ein Wendepunkt, der meine Reise zur Selbstfindung einleitete.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/golden-hours-image-7.JPG"
              alt="Der Anfang meiner Reise"
              className="rounded-sm object-cover h-40 md:h-48 w-full shadow-sm hover:shadow-md transition-all duration-300"
            />
            <img
              src="/images/golden-hours-image-8.JPG"
              alt="Erste Schritte"
              className="rounded-sm object-cover h-40 md:h-48 w-full shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-golden-100 mb-10">
          <div className="flex items-center mb-4">
            <BookOpen className="text-primary mr-2 w-5 h-5" />
            <h3 className="text-xl font-serif text-forest-800">Die Ausbildung</h3>
          </div>
          <p className="text-forest-600 mb-4">
            Beginn meiner Ausbildung in verschiedenen Coaching-Methoden, Yoga und spirituellen Praktiken. Ein Zeitraum intensiven Lernens und persönlicher Transformation.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-forest-600 text-sm md:text-base mb-2">
              ✓ Zertifizierte Yoga-Lehrerin (200h)
            </div>
            <div className="flex gap-2 items-center text-forest-600 text-sm md:text-base mb-2">
              ✓ Ausbildung in Coaching & Beratung
            </div>
            <div className="flex gap-2 items-center text-forest-600 text-sm md:text-base mb-2">
              ✓ Studium der spirituellen Praktiken
            </div>
          </div>
          <img
            src="/images/golden-hours-image-5.JPG"
            alt="Ausbildungszeit"
            className="rounded-sm object-cover h-40 md:h-60 w-full shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-golden-100 mb-10">
          <div className="flex items-center mb-4">
            <Heart className="text-primary mr-2 w-5 h-5" />
            <h3 className="text-xl font-serif text-forest-800">Der Durchbruch</h3>
          </div>
          <p className="text-forest-600 mb-6">
            Was als persönlicher Zusammenbruch begann, entpuppte sich als Durchbruch. In dieser Zeit entstand die Vision für Golden Hours – ein Raum für tiefe Transformation und authentisches Leben.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/golden-hours-image-9.JPG"
              alt="Persönliche Transformation"
              className="rounded-sm object-cover h-40 md:h-48 w-full shadow-sm hover:shadow-md transition-all duration-300"
            />
            <img
              src="/images/golden-hours-image-10.JPG"
              alt="Entstehung der Vision"
              className="rounded-sm object-cover h-40 md:h-48 w-full shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Heute",
      content: (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-golden-100">
          <div className="flex items-center mb-4">
            <Star className="text-primary mr-2 w-5 h-5" />
            <h3 className="text-xl font-serif text-forest-800">Golden Hours</h3>
          </div>
          <p className="text-forest-600 mb-6">
            Heute verbinde ich meine analytischen Fähigkeiten mit meiner intuitiven Gabe und begleite Menschen auf ihrem Weg des bewussten Erwachens – durch meinen Podcast "Generation Om", Workshops und vor allem durch tiefgreifende 1:1 Coachings.
          </p>
          <div className="p-5 rounded-sm bg-forest-50 border-l-4 border-primary my-6">
            <p className="text-lg leading-relaxed italic font-serif">
              "Meine eigene Transformationsreise gibt mir das Verständnis für die Herausforderungen und die Schönheit dieses Weges."
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Award className="text-primary h-16 w-16 opacity-50" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="journey" 
      className="relative z-20 bg-golden-50/30" 
      ref={sectionRef}
    >
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0 opacity-10"
        style={{ 
          backgroundImage: "url('/images/golden-hours-image-16.JPG')"
        }}
      ></div>
      
      <div className="relative z-10">
        <Timeline data={journeyData} />
      </div>
    </section>
  );
};

export default JourneySection;
