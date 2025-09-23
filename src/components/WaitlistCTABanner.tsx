
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import InfoBox from '@/components/ui/InfoBox';

const WaitlistCTABanner = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  Anmeldung geöffnet 02.11.25 – 01.02.26
                </p>
              </div>
              <Button 
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto"
                size="lg"
              >
                1:1 Deep Dive Check-in
                <ArrowRight className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTABanner;
