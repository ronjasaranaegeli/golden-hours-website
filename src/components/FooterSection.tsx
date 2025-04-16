import { Instagram, Podcast, Mail, ArrowUp } from 'lucide-react';
const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="py-16 bg-white border-t border-golden-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src="/lovable-uploads/2a2fa4d3-c1e3-4889-b3f7-d82ededb0533.png" alt="Golden Hours Logo" className="h-10" />
            <p className="text-forest-600 text-sm mt-4">
              Transformatives Coaching für Menschen am Anfang ihres bewussten Erwachens.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-forest-800">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-forest-600 hover:text-primary transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#about" className="text-forest-600 hover:text-primary transition-colors">Über mich</a>
              </li>
              <li>
                <a href="#program" className="text-forest-600 hover:text-primary transition-colors">Programm</a>
              </li>
              <li>
                <a href="#testimonials" className="text-forest-600 hover:text-primary transition-colors">Erfahrungen</a>
              </li>
              <li>
                <a href="#waitlist" className="text-forest-600 hover:text-primary transition-colors">Warteliste</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-forest-800">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-forest-600 hover:text-primary transition-colors">Impressum</a>
              </li>
              <li>
                <a href="#" className="text-forest-600 hover:text-primary transition-colors">Datenschutz</a>
              </li>
              <li>
                <a href="#" className="text-forest-600 hover:text-primary transition-colors">AGB</a>
              </li>
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-forest-800">Kontakt & Social</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-forest-600 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-forest-600 hover:text-primary transition-colors">
                <Podcast size={20} />
              </a>
              <a href="mailto:kontakt@goldenhours.com" className="text-forest-600 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-forest-600 text-sm">ronja@golden-hours.ch</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-golden-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Golden Hours Coaching. Alle Rechte vorbehalten.
          </p>
          
          <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center text-forest-600 hover:text-primary transition-colors">
            <span className="mr-2">Nach oben</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>;
};
export default FooterSection;