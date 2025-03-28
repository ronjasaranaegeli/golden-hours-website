
import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Brain, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";

const BewusstseinSection = () => {
  return (
    <section id="bewusstsein" className="relative py-24 md:py-32 overflow-hidden">
      {/* Mystischer Hintergrund mit Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-golden-50/50 via-forest-50/30 to-transparent z-0" />
      
      {/* Dekorative Elemente */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-golden-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-forest-200/20 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Headline mit Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight text-forest-800">
            Entfalte dein höheres Bewusstsein
          </h2>
          <div className="w-20 h-1 bg-golden-300 mx-auto mb-8" />
          <p className="text-lg text-forest-700 max-w-xl mx-auto">
            Erlebe tiefgreifende Transformation durch Bewusstseinserweiterung, 
            Persönlichkeitsentwicklung und Selbstheilungsaktivierung.
          </p>
        </motion.div>

        {/* Karten mit Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-20">
          {[
            {
              icon: <Brain className="w-12 h-12" />,
              title: "Bewusstseinserweiterung",
              description: "Erfahre neue Dimensionen deiner Wahrnehmung",
              gradient: "from-golden-200 to-golden-100",
              delay: 0
            },
            {
              icon: <Lightbulb className="w-12 h-12" />,
              title: "Persönlichkeitsentwicklung",
              description: "Entfalte dein wahres Potenzial",
              gradient: "from-forest-100 to-forest-50",
              delay: 0.15
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: "Selbstheilungsaktivierung",
              description: "Erwecke deine inneren Heilkräfte",
              gradient: "from-golden-300 to-golden-200",
              delay: 0.3
            }
          ].map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: card.delay, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center"
            >
              <div className="group h-[280px] w-full overflow-hidden rounded-2xl mb-6 bg-gradient-to-br hover:shadow-xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 z-0" />
                <div className="absolute inset-0 bg-gradient-to-br group-hover:opacity-70 transition-opacity duration-500" />
                <EvervaultCard text={card.icon} />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
                  <h3 className="font-serif text-xl text-white font-medium mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unterer Abschnitt mit Bild und Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-center md:space-x-12 max-w-5xl mx-auto"
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-golden-200 rounded-full" />
              <div className="relative overflow-hidden rounded-full aspect-square">
                <img 
                  src="/images/golden-hours-image-16.JPG" 
                  alt="Bewusstseinserweiterung" 
                  className="object-cover w-full h-full transform transition-transform duration-1000 hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="font-serif text-2xl md:text-3xl text-forest-800 mb-4">Der Weg zu deinem Selbst</h3>
            <p className="text-forest-700 mb-8">
              In unseren Sitzungen begleite ich dich auf einer Reise zu tieferen 
              Bewusstseinsebenen und helfe dir, deine innere Weisheit zu entdecken.
            </p>
            <a 
              href="#waitlist" 
              className="inline-block px-8 py-3 bg-golden-400 text-white rounded-full hover:bg-golden-500 transition-colors duration-300 font-medium"
            >
              Beginne deine Reise
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BewusstseinSection;
