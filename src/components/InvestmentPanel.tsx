import { useRef, useEffect } from 'react';
import { Laptop, MapPin, ArrowRight } from 'lucide-react';
import { FaqSection } from '@/components/ui/faq-section';
import { Button } from '@/components/ui/button';
import { TooltipComponent } from '@/components/ui/TooltipComponent';

const InvestmentPanel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-0 md:pt-0 pb-12 md:pb-16 bg-cream-50 relative z-20" id="investment" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 reveal" ref={headerRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 heading-underline inline-block">
              Investment
            </h2>
          </div>
          
          <div className="reveal" ref={contentRef}>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-0">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-golden-100 rounded-xl">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <Laptop className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="font-serif text-xl font-medium text-forest-800">Online-Coaching:</span>
                  </div>
                  <div>
                    <span className="text-forest-700 font-bold text-xl">CHF 3.900</span>
                    <span className="text-forest-600 text-sm ml-2">(Einmalzahlung oder 3 x CHF 1.350)</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-golden-100 rounded-xl">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <MapPin className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="font-serif text-xl font-medium text-forest-800">Vor-Ort-Coaching:</span>
                  </div>
                  <div>
                    <span className="text-forest-700 font-bold text-xl">CHF 5.490</span>
                    <span className="text-forest-600 text-sm ml-2">(im Umkreis von 70km ab Baden, AG)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <FaqSection
              title="Ist Golden Hours wirklich das Richtige für DICH?"
              description="Golden Hours ist eine tiefgreifende, transformative Reise – und sie ist nicht für jeden geeignet. Dieses Programm ist wahrscheinlich nichts für dich, wenn du:"
              className="elegant-card text-center bg-white p-4 sm:p-8 rounded-sm shadow-md mt-16"
              items={[
                {
                  question: "Schnelle Lösungen suchst",
                  answer: (
                    <p className="text-forest-700">
                      Echte Veränderung braucht Zeit, Commitment und die Bereitschaft, wirklich hinzuschauen – nicht nur an der <TooltipComponent trigger="Oberfläche" content="Oberflächliche Veränderungen führen selten zu tiefgreifenden und langfristigen Transformationen" /> zu kratzen.
                    </p>
                  )
                },
                {
                  question: "Starre Programme erwartest",
                  answer: (
                    <p className="text-forest-700">
                      Wir folgen DEINEM einzigartigen Weg und deiner <TooltipComponent trigger="Intuition" content="Die innere Stimme und Weisheit, die oft ohne bewusste Analyse zu tieferen Erkenntnissen führt" />, nicht einem festen Schema F. Wenn du eine vorgefertigte <span className="text-primary">Formel</span> bevorzugst, passen wir nicht zusammen.
                    </p>
                  )
                },
                {
                  question: "Dich Schatten nicht stellen willst",
                  answer: (
                    <p className="text-forest-700">
                      Wahre <TooltipComponent trigger="Transformation" content="Ein tiefgreifender Wandlungsprozess, der über oberflächliche Veränderungen hinausgeht und unser ganzes Sein umfasst" /> beinhaltet auch die liebevolle Auseinandersetzung mit dem, was herausfordernd ist. Wir gehen tief – dazu braucht es Mut.
                    </p>
                  )
                },
                {
                  question: "Verantwortung im Aussen suchst",
                  answer: (
                    <p className="text-forest-700">
                      Dieses Programm stärkt DEINE innere Führung und <TooltipComponent trigger="Selbstermächtigung" content="Der Prozess, die eigene Kraft zu erkennen und zu nutzen, um selbstbestimmt zu handeln und zu leben" />. Es erfordert die Bereitschaft, aktiv Verantwortung für deinen Prozess zu übernehmen.
                    </p>
                  )
                },
                {
                  question: "Körperarbeit vermeiden willst",
                  answer: (
                    <p className="text-forest-700">
                      In diesem Coaching arbeiten wir <TooltipComponent trigger="ganzheitlich" content="Ein Ansatz, der Körper, Geist und Seele als untrennbare Einheit betrachtet" /> – Körper, Geist und Seele sind untrennbar verbunden. Transformation geschieht nicht nur im Kopf, sondern muss verkörpert werden.
                    </p>
                  )
                },
                {
                  question: "Nur Theorie ohne Praxis suchst",
                  answer: (
                    <p className="text-forest-700">
                      Golden Hours lebt von der <TooltipComponent trigger="Integration" content="Der Prozess, neue Erkenntnisse in das tägliche Leben einzubinden und zu verkörpern" /> und Verkörperung neuer Erkenntnisse im Alltag.
                    </p>
                  )
                }
              ]}
            />
            
            {/* Removed waitlist button - now using WaitlistCTABanner component instead */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPanel;