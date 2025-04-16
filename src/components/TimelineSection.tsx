import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { TooltipComponent } from '@/components/ui/TooltipComponent';

const TimelineSection = () => {
  const timelineData = [
    {
      title: "Phase 1",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-golden-800 mb-4">Fundament & Standortbestimmung</h3>
          <div className="text-neutral-700 text-base md:text-lg font-normal mb-4">
            <span className="text-forest-700 font-semibold">Woche 1-4:</span> In dieser Phase erforschen wir deine aktuelle Position und schaffen ein solides Fundament für deine Transformation.
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Bewusstsein</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg">Energetischer Check-in: Wo stehst du? (<span className="inline-block">
                <TooltipComponent 
                  trigger="Chakren"
                  content="Energiezentren im Körper, die nach der yogischen Tradition die physische und spirituelle Energie lenken."
                /></span>, <span className="inline-block">
                <TooltipComponent 
                  trigger="Doshas"
                  content="Aus dem Ayurveda stammende Konstitutionstypen (Vata, Pitta, Kapha), die unsere physischen und mentalen Eigenschaften bestimmen."
                /></span>, <span className="inline-block">
                <TooltipComponent 
                  trigger="Gunas Analyse"
                  content="Betrachtung der drei grundlegenden Qualitäten (Sattva, Rajas, Tamas) der indischen Philosophie, die alle Aspekte des Lebens beeinflussen."
                /></span>)
              </li>
              <li className="text-base md:text-lg">Grundlagen der Achtsamkeit & Präsenz im Alltag</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Persönlichkeit</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg">Bestandsaufnahme: Wer bin ich heute?</li>
              <li className="text-base md:text-lg">Vision & Wunsch: Wer will ich sein?</li>
              <li className="text-base md:text-lg">Analyse: Äussere Welten vs. Innere Welten</li>
              <li className="text-base md:text-lg">Erste Ausrichtung deines persönlichen Wachstumspfades</li>
            </ul>
          </div>
          
          <div className="w-full h-[32rem] md:h-[36rem] rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/images/golden-hours-image-20.JPG')` }}
              aria-label="Fundament & Standortbestimmung"
            ></div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-golden-800 mb-4">Vertiefung & Kernpraktiken</h3>
          <div className="text-neutral-700 text-base md:text-lg font-normal mb-4">
            <span className="text-forest-700 font-semibold">Woche 5-8:</span> In dieser Phase vertiefen wir deine Praktiken und entwickeln kraftvolle Routinen für nachhaltiges Wachstum.
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Bewusstsein</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg">Einführung & Vertiefung individueller Praktiken:</li>
              <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                <li className="text-base md:text-lg">Yoga-Formen (<span className="inline-block">
                  <TooltipComponent 
                    trigger="Yin"
                    content="Eine langsame, passive Form des Yoga, bei der Positionen für längere Zeit gehalten werden, um tiefes Bindegewebe und Faszien zu dehnen."
                  /></span>, <span className="inline-block">
                  <TooltipComponent 
                    trigger="Hatha"
                    content="Eine traditionelle Form des Yoga, die Körperhaltungen (Asanas), Atemübungen und Meditation kombiniert."
                  /></span>, <span className="inline-block">
                  <TooltipComponent 
                    trigger="Kundalini"
                    content="Eine kraftvolle Form des Yoga, die auf das Erwecken der Kundalini-Energie ausgerichtet ist, mit dynamischen Bewegungen, Atemarbeit und Mantras."
                  /></span>, <span className="inline-block">
                  <TooltipComponent 
                    trigger="Vinyasa"
                    content="Ein fliessender Yoga-Stil, bei dem Bewegungen mit der Atmung synchronisiert werden, um einen meditativen Bewegungsfluss zu erzeugen."
                  /></span>)
                </li>
                <li className="text-base md:text-lg">Selbsthypnose für das Unterbewusstsein</li>
                <li className="text-base md:text-lg"><span className="inline-block">
                  <TooltipComponent 
                    trigger="EFT"
                    content="Emotional Freedom Techniques (EFT) ist eine psychologische Akupressur-Technik, die durch sanftes Klopfen auf bestimmte Körperpunkte emotionale Blockaden löst und tiefe Heilung ermöglicht."
                  /></span> (Emotional Freedom Techniques)
                </li>
                <li className="text-base md:text-lg">Bewusste Atemarbeit (<span className="inline-block">
                  <TooltipComponent 
                    trigger="Pranayama"
                    content="Yogische Atemübungen zur Kontrolle der Lebensenergie (Prana), die Körper und Geist reinigen, Energie steigern und das Bewusstsein erweitern."
                  /></span>)
                </li>
              </ul>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Persönlichkeit</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg">Selbstliebe & Selbstannahme kultivieren</li>
              <li className="text-base md:text-lg">Ankommen bei sich selbst: Innere Ruhe finden</li>
              <li className="text-base md:text-lg"><span className="inline-block">
                <TooltipComponent 
                  trigger="Naturverbindung"
                  content="Bewusste Zeit in der Natur, um sich mit elementaren Kräften zu verbinden, Stress abzubauen und die eigene Verbundenheit mit allem Leben zu spüren."
                /></span> als Kraftquelle nutzen
              </li>
              <li className="text-base md:text-lg"><span className="inline-block">
                <TooltipComponent 
                  trigger="Intuition"
                  content="Die innere Weisheit und das Bauchgefühl, das über das rationale Denken hinausgeht und tiefere Erkenntnisse ermöglicht."
                /></span> stärken und ihr vertrauen lernen
              </li>
              <li className="text-base md:text-lg">Erforschung von Lebenssinn & -zweck</li>
            </ul>
          </div>
          
          <div className="w-full h-[32rem] md:h-[36rem] rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/images/golden-hours-image-24.JPG')` }}
              aria-label="Vertiefung & Kernpraktiken"
            ></div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-golden-800 mb-4">Integration & Verkörperung</h3>
          <div className="text-neutral-700 text-base md:text-lg font-normal mb-4">
            <span className="text-forest-700 font-semibold">Woche 9-12:</span> In dieser abschliessenden Phase integrieren wir das Gelernte und verankern deine Transformation nachhaltig in deinem Leben.
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Bewusstsein</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg">Integration der erlernten Praktiken in den Alltag</li>
              <li className="text-base md:text-lg">Entwicklung persönlicher <span className="inline-block">
                <TooltipComponent 
                  trigger="Rituale"
                  content="Bewusst gestaltete, regelmässige Handlungen, die spirituelle Bedeutung tragen und einen heiligen Raum im Alltag schaffen."
                /></span> und stärkender Gewohnheiten
              </li>
              <li className="text-base md:text-lg">Bewusste Anwendung im täglichen Leben</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-golden-700 mb-2">Persönlichkeit</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li className="text-base md:text-lg"><span className="inline-block">
                <TooltipComponent 
                  trigger="Mindshift"
                  content="Eine fundamentale Veränderung der Denkweise, die neue Perspektiven und Möglichkeiten eröffnet."
                /></span> & Perspektivwechsel verankern
              </li>
              <li className="text-base md:text-lg">Die eigene Transformation bewusst gestalten</li>
              <li className="text-base md:text-lg">Nutzen der Kraft von <span className="inline-block">
                <TooltipComponent 
                  trigger="Affirmationen"
                  content="Positive Aussagen, die regelmässig wiederholt werden, um Unterbewusstsein zu programmieren und Glaubensmuster zu verändern."
                /></span>
              </li>
              <li className="text-base md:text-lg">Prinzipien der <span className="inline-block">
                <TooltipComponent 
                  trigger="Manifestation"
                  content="Der Prozess, durch den Gedanken, Gefühle und Überzeugungen in physische Realität übersetzt werden."
                /></span> verstehen und anwenden
              </li>
              <li className="text-base md:text-lg">Verkörperung des neuen Selbst & der eigenen Wahrheit</li>
            </ul>
          </div>
          
          <div className="w-full h-[32rem] md:h-[36rem] rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/images/golden-hours-image-12.JPG')` }}
              aria-label="Integration & Verkörperung"
            ></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Top right palm leaf */}
      <div className="absolute top-12 right-0 overflow-hidden w-64 md:w-72 lg:w-96 z-0">
        <img 
          src="/images/palm-leaf-h-left.png" 
          alt=""
          className="w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto opacity-5 pointer-events-none ml-auto"
        />
      </div>
      
      {/* Between Phase 1 and Phase 2 - left side */}
      <div className="absolute top-[35%] left-0 overflow-hidden w-64 md:w-72 lg:w-96 z-0">
        <img 
          src="/images/palm-leaf-h-right.png" 
          alt=""
          className="w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto opacity-5 pointer-events-none"
        />
      </div>
      
      {/* Near Phase 2 - right side */}
      <div className="absolute top-[55%] right-8 overflow-hidden w-48 md:w-56 lg:w-64 z-0">
        <img 
          src="/images/palm-leaf-v-up-right.png" 
          alt=""
          className="w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto opacity-5 pointer-events-none ml-auto"
        />
      </div>
      
      {/* Bottom left - near Phase 3 */}
      <div className="absolute bottom-32 left-20 overflow-hidden w-64 md:w-72 lg:w-96 z-0">
        <img 
          src="/images/palm-leaf-h-right-bottom.png" 
          alt=""
          className="w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto opacity-5 pointer-events-none"
        />
      </div>
      
      <div className="container mx-auto">
        <div className="relative z-20">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
