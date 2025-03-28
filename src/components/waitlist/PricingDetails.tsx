
import React from 'react';

const PricingDetails = () => {
  return (
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
  );
};

export default PricingDetails;
