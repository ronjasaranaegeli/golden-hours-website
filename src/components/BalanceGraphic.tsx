import React, { useRef, useEffect } from 'react';

const BalanceGraphic: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (svgRef.current) {
              svgRef.current.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (svgRef.current) observer.observe(svgRef.current);

    return () => {
      if (svgRef.current) observer.unobserve(svgRef.current);
    };
  }, []);

  return (
    <section 
      className="relative bg-[url('/images/jungle.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:z-0"
    >
      <section 
        className="py-16 md:py-24 relative z-10" 
        ref={sectionRef}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto reveal relative" style={{ maxWidth: '900px' }}>
            <svg 
              ref={svgRef}
              viewBox="0 0 800 640" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-labelledby="balanceTitle balanceDesc" 
              role="img"
              className="w-full h-auto opacity-0 transition-opacity duration-1000 relative z-20 text-white"
            >
            <title id="balanceTitle">Wenn dir das Leben eine Zitrone gibt, mach Limonade draus.</title>
            <desc id="balanceDesc">Visualisierung von acht Lebensbereichen in Balance</desc>

            <text 
              x="400" 
              y="40" 
              textAnchor="middle" 
              fontSize="44" 
              fontWeight="700" 
              fill="currentColor"
            >
              <tspan x="400" dy="0">WENN DIR DAS LEBEN</tspan>
              <tspan x="400" dy="52">EINE ZITRONE GIBT,</tspan>
              <tspan x="400" dy="52">MACH LIMONADE DRAUS.</tspan>
            </text>

            <g textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="400">
              {/* Top row */}
              <text x="100" y="140">work</text>
              <text x="300" y="140">stillness</text>
              <text x="500" y="140">solitude</text>
              <text x="700" y="140">discipline</text>
              
              {/* Bottom row */}
              <text x="100" y="505">play</text>
              <text x="300" y="505">movement</text>
              <text x="500" y="505">socializing</text>
              <text x="700" y="505">freedom</text>
            </g>

            <g fill="none" stroke="currentColor" strokeWidth="2">
              {/* First column - Work/Play */}
              <polygon points="100,170 90,190 110,190" />
              <line x1="100" y1="220" x2="100" y2="400" />
              <circle cx="100" cy="450" r="12" strokeDasharray="2,4" />

              {/* Second column - Stillness/Movement */}
              <line x1="290" y1="180" x2="310" y2="170" />
              <line x1="300" y1="220" x2="300" y2="400" />
              <path d="M290 450 q10 -12 20 0" />

              {/* Third column - Solitude/Socializing */}
              <circle cx="500" cy="180" r="11" />
              <line x1="500" y1="220" x2="500" y2="400" />
              <circle cx="500" cy="450" r="11" />
              <circle cx="480" cy="465" r="11" />
              <circle cx="520" cy="465" r="11" />

              {/* Fourth column - Discipline/Freedom */}
              <polyline points="690,170 700,180 710,170 720,180" />
              <line x1="700" y1="220" x2="700" y2="400" />
              <path d="M690 450 q10 -12 20 0 q10 12 20 0" />
            </g>

            <style>
              {`.quote { 
                font-size: 20px;
                letter-spacing: 1px;
                word-spacing: 4px;
              }
              @media (max-width: 600px) { .quote { font-size: 16px } }`}
            </style>
            <text 
              className="quote"
              x="400" 
              y="590" 
              textAnchor="middle"
              fill="currentColor"
            >
              Nichts ist ohne Gift. Allein die Dosis macht, dass ein Ding kein Gift ist.
            </text>
          </svg>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BalanceGraphic;
