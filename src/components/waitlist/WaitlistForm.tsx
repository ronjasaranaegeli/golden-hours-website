
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface WaitlistFormProps {
  onSubmitSuccess: () => void;
}

const WaitlistForm = ({ onSubmitSuccess }: WaitlistFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

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
      onSubmitSuccess();
      toast({
        title: "Erfolgreich eingetragen!",
        description: "Du stehst jetzt auf der Warteliste für Golden Hours Coaching.",
      });
    }, 1000);
  };

  return (
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
        IC•You Check In
      </Button>
    </form>
  );
};

export default WaitlistForm;
