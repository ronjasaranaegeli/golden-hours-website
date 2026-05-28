
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/41762800550?text=' + encodeURIComponent('Hallo du mutige Seele! Schön hast Du den Weg hierher gefunden. Bist du bereit für innere Arbeit, persönliche Weiterentwicklung und eine transformative Reise? Dann schlag mir 2-3 Daten vor für ein kostenloses Erstgespräch. Deine Prozessbegleiterin -Ronja');

const WaitlistCTABanner = () => {
  return (
    <section className="py-10 mb-6 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-forest-50 to-golden-50 rounded-lg shadow-md border border-golden-100 px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-serif text-xl sm:text-2xl text-forest-800 font-medium leading-tight text-center sm:text-left">
                  1:1 Deep Dive Check-in - sichere dir deinen Platz
                </h3>
                <p className="text-forest-600 leading-snug text-center sm:text-left">
                  Melde dich direkt per WhatsApp für ein kostenloses Erstgespräch
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1" />
                  Per WhatsApp melden
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTABanner;
