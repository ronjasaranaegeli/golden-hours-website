
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
    <section id="waitlist" className="py-24 md:py-32 bg-primary/10" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Form */}
          <div className="reveal order-2 lg:order-1" ref={formRef}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 heading-underline">
              Sicher dir deinen Platz
            </h2>
            
            <p className="text-lg mb-8">
              Melde dich jetzt für die Warteliste an und erhalte als eine(r) der Ersten Zugang zum Golden Hours Coaching-Programm, das im Oktober 2024 startet.
            </p>
            
            {formSubmitted ? (
              <div className="elegant-card">
                <h3 className="font-serif text-2xl mb-4 text-primary">Vielen Dank!</h3>
                <p className="mb-6">
                  Deine Anfrage wurde erfolgreich übermittelt. Ich werde mich in Kürze bei dir melden, um den nächsten Schritt zu besprechen.
                </p>
                <p className="text-forest-600">
                  In der Zwischenzeit kannst du mir gerne auf Instagram folgen oder meinen Podcast anhören, um mehr über meine Arbeit zu erfahren.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 elegant-card">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="bg-white border-golden-200 text-foreground placeholder:text-forest-400 mt-2"
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
                    className="bg-white border-golden-200 text-foreground placeholder:text-forest-400 mt-2"
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
                    className="w-full rounded-md bg-white border border-golden-200 text-foreground placeholder:text-forest-400 p-3 mt-2"
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
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg btn-hover-effect"
                >
                  Jetzt auf die Warteliste eintragen
                </Button>
              </form>
            )}
          </div>
          
          {/* Right Column: Image */}
          <div className="flex items-center justify-center reveal order-1 lg:order-2" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-golden-100 rounded-xl -z-10"></div>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2103&auto=format&fit=crop" 
                  alt="Cozy coaching environment" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-xl -z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
                <p className="font-serif text-xl mb-2 text-primary">Oktober 2024</p>
                <p className="text-forest-800">Start des nächsten 3-monatigen Golden Hours Coaching-Programms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
