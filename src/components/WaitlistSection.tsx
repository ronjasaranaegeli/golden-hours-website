
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const WaitlistSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (formRef.current) formRef.current.classList.add('active');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !agreed) {
      toast({
        title: "Bitte alle Pflichtfelder ausfüllen",
        description: "Name, Email und Zustimmung zu den Datenschutzbestimmungen sind erforderlich.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Erfolgreich eingetragen!",
        description: "Du stehst jetzt auf der Warteliste für Golden Hours Coaching.",
      });
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-24 md:py-32 relative" ref={sectionRef}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/golden-hours-image-16.JPG")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="p-8 md:p-12 reveal" ref={formRef}>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 heading-underline inline-block text-forest-800">
                Sei bereit für deine Transformation
              </h2>
              
              <p className="text-lg mb-8 text-forest-600">
                Melde dich jetzt für die Warteliste an und erhalte als eine(r) der Ersten Zugang zum Golden Hours Coaching-Programm, das im Oktober 2024 startet.
              </p>
              
              {formSubmitted ? (
                <div>
                  <h3 className="font-serif text-2xl mb-4 text-primary">Vielen Dank!</h3>
                  <p className="mb-6 text-forest-700">
                    Deine Anfrage wurde erfolgreich übermittelt. Ich werde mich in Kürze bei dir melden, um den nächsten Schritt zu besprechen.
                  </p>
                  <p className="text-forest-600">
                    In der Zwischenzeit kannst du mir gerne auf Instagram folgen oder meinen Podcast anhören, um mehr über meine Arbeit zu erfahren.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="bg-white/80 border-golden-200 text-foreground placeholder:text-forest-400 mt-2"
                      placeholder="Dein Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="bg-white/80 border-golden-200 text-foreground placeholder:text-forest-400 mt-2"
                      placeholder="deine@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">Nachricht (optional)</Label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      className="w-full rounded-md bg-white/80 border border-golden-200 text-foreground placeholder:text-forest-400 p-3 mt-2"
                      placeholder="Wieso interessierst du dich für das Coaching? Was erhoffst du dir?"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreed} 
                      onCheckedChange={(checked) => setAgreed(checked === true)} 
                      className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <Label htmlFor="terms" className="text-sm text-forest-600">
                      Ich stimme zu, dass meine Daten für die Bearbeitung meiner Anfrage gespeichert werden. 
                      Weitere Informationen in der Datenschutzerklärung. *
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cream"
                    className="w-full py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300 btn-shine"
                  >
                    Jetzt auf die Warteliste eintragen
                  </Button>
                </form>
              )}
            </div>
            
            {/* Right Column: Image */}
            <div className="reveal bg-golden-50 flex items-center justify-center p-8 md:p-12" ref={imageRef}>
              <div className="text-center">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl mb-4 text-forest-800">Investment in deine Zukunft</h3>
                  <p className="text-forest-600 mb-8">3-monatiges 1:1 Premium-Coaching</p>
                  <div className="flex justify-center items-baseline mb-2">
                    <span className="text-4xl font-serif text-forest-800 mr-2">CHF 3,900</span>
                    <span className="text-forest-600">einmalig</span>
                  </div>
                  <p className="text-forest-600 text-sm">oder 3 monatliche Raten à CHF 1,350</p>
                </div>
                
                <div className="w-full h-px bg-golden-200 my-8"></div>
                
                <div className="text-left">
                  <p className="font-medium text-forest-800 mb-4">Das Programm umfasst:</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary text-lg mr-3">✓</span>
                      <p className="text-forest-600">12 wöchentliche 1:1 Sessions à 90 Minuten</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-lg mr-3">✓</span>
                      <p className="text-forest-600">Täglicher Support via WhatsApp</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-lg mr-3">✓</span>
                      <p className="text-forest-600">Personalisiertes Workbook & Übungsmaterial</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-lg mr-3">✓</span>
                      <p className="text-forest-600">Exklusiver Zugang zur Golden Hours App</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-lg mr-3">✓</span>
                      <p className="text-forest-600">Bonus: Zugang zum Golden Hours Netzwerk</p>
                    </li>
                  </ul>
                  
                  <div className="p-4 rounded-lg bg-forest-50 border border-forest-100">
                    <p className="text-forest-700 text-sm">Begrenzte Teilnehmerzahl: Nur 6 Plätze pro Quartal verfügbar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
