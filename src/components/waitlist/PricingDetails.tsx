import React from 'react';
import { Laptop, MapPin, Check } from 'lucide-react';
import InfoBox from '../ui/InfoBox';
const PricingDetails = () => {
  return <div className="text-center">
      <div className="mb-8">
        <h3 className="font-serif text-2xl mb-4 text-forest-800">Investment in deine Zukunft</h3>
        <p className="text-forest-600 mb-8">3-monatiges 1:1 Premium-Coaching</p>
        
        <div className="flex flex-col space-y-4">
          {/* Online Coaching Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Laptop className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-forest-800">Online-Coaching</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-forest-800">CHF 3'900</span>
              <div className="text-xs text-forest-600">oder 3× CHF 1'350</div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gray-200"></div>
          
          {/* In-Person Coaching Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-forest-800">Vor-Ort-Coaching<span className="block text-xs text-forest-600">(70 km ab Baden)</span></span>
            </div>
            <div className="text-right">
              <span className="font-bold text-forest-800">CHF 5'490</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-golden-200 my-8"></div>
      
      <div className="text-left">
        <p className="font-medium text-forest-800 mb-4">Die IC•You-Journey umfasst:</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>12 wöchentliche 1:1 Sessions à 120 Minuten</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Täglicher Support via WhatsApp</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Praxisplan – Individuell mit dem Coach erstellt und auf deine Bedürfnisse abgestimmt</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Personalisiertes Workbook & Übungsmaterial</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Mit voller Präsenz und achtsamer Begleitung – exklusiv für deinen einzigartigen Herzensweg.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Bonus: Zugang zum Golden Hours Netzwerk mit 20% auf alle weiteren Golden Hours Events (Workshops, Retreats & Co)</span>
          </li>
        </ul>
        
        <InfoBox>
          <p className="text-sm">Begrenzte Teilnehmerzahl: Nur 5 Plätze pro Quartal verfügbar.</p>
        </InfoBox>
      </div>
    </div>;
};
export default PricingDetails;