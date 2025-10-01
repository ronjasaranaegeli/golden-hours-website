import { useEffect, useState } from 'react';

const ComingSoonOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: "url('/images/jungle.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight uppercase max-w-4xl">
          Golden Hours 1:1 Deep Dive coming soon
        </h1>
        <p className="mt-8 text-white text-3xl sm:text-4xl md:text-5xl font-medium">
          02.11.2025
        </p>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
