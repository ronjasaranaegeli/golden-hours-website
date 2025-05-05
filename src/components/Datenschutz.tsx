import { FC } from 'react';
import FooterSection from '@/components/FooterSection';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// Create a modified Navbar component specifically for legal pages
const OpaqueNavbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-background py-2 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            alt="Golden Hours Logo" 
            className="h-10 md:h-12" 
            src="/lovable-uploads/296779d4-52dd-4fd5-a032-80f37b5bcca8.png" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button 
              onClick={navigateToHome} 
              className="relative text-sm transition-colors py-1 px-3 font-medium group text-foreground"
            >
              <span className="relative z-10">Zurück zur Startseite</span>
              <span className="absolute inset-0 bg-golden-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-full backdrop-blur-sm text-foreground bg-black/5"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button 
                onClick={navigateToHome} 
                className="w-full text-left py-2 px-4 rounded-lg text-foreground hover:bg-golden-100 hover:text-golden-800 transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-golden-400 rounded-full mr-2"></span>
                Zurück zur Startseite
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Datenschutz: FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <OpaqueNavbar />
      
      <main className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl mb-2 text-forest-800">Datenschutzerklärung</h1>
          <p className="text-sm opacity-70 mb-10">Version 1.0, Stand 3.&nbsp;Mai 2025</p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">1. Verantwortliche Stelle</h2>
            <p className="text-forest-600">Ronja Sara Nägeli<br />Obere Gasse 13, 5400 Baden, Schweiz<br /><a href="mailto:ronja@golden-hours.ch" className="text-primary hover:underline">ronja@golden-hours.ch</a><br />Tel. +41 76 280 05 50</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">2. Erhobene Personendaten</h2>
            <ul className="list-disc pl-5 space-y-1 text-forest-600">
              <li>Name, E-Mail, Nachricht (Kontakt- / Wartelistenformular)</li>
              <li>Name, E-Mail (Newsletter-Anmeldung, Mailchimp oder gleichwertig)</li>
              <li>Nutzungs- und Gerätedaten (Google Analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">3. Verarbeitungszwecke & Rechtsgrundlagen</h2>
            <ul className="list-disc pl-5 space-y-1 text-forest-600">
              <li>Anfragenbearbeitung (Einwilligung)</li>
              <li>Betrieb & Sicherheit der Website (berechtigtes Interesse)</li>
              <li>Webanalyse & Optimierung (berechtigtes Interesse)</li>
              <li>Gesetzliche Aufbewahrungspflichten</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">4. Drittanbieter</h2>
            <ul className="list-disc pl-5 space-y-1 text-forest-600">
              <li>Hosting / CDN: Cloudflare Inc., USA</li>
              <li>Newsletter: Mailchimp, USA (oder gleichwertiger Dienst)</li>
              <li>Analyse: Google LLC, USA (Google Analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">5. Speicherdauer</h2>
            <p className="text-forest-600">Personendaten werden nur solange aufbewahrt, wie es für die genannten Zwecke nötig oder gesetzlich vorgeschrieben ist; anschliessend Löschung oder Anonymisierung.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">6. Datensicherheit</h2>
            <p className="text-forest-600">Diese Website verwendet SSL/TLS-Verschlüsselung und angemessene technische sowie organisatorische Schutzmassnahmen.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">7. Rechte der Betroffenen</h2>
            <p className="text-forest-600">Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Direktmarketing. Kontaktieren Sie uns unter obiger Adresse.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-3 text-forest-800">8. Änderungen dieser Erklärung</h2>
            <p className="text-forest-600">Die aktuelle Version wird stets auf dieser Seite veröffentlicht.</p>
          </section>

          <p className="text-sm opacity-70 mt-10">Stand: 3.&nbsp;Mai 2025 (Europe/Zurich)</p>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Datenschutz;