
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AnimatedDemo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [doorState, setDoorState] = useState('initial');
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine when to trigger the door animation
      if (heroSectionRef.current) {
        const heroHeight = heroSectionRef.current.offsetHeight;
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        
        if (heroBottom < viewportHeight * 0.7 && doorState === 'initial') {
          setDoorState('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [doorState]);

  return (
    <div className="animated-demo-container">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
          scrollY > 50 ? 'bg-white/20 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-xl font-bold text-white">Logo</div>
          <div className="nav-links space-x-6">
            <Link to="/" className="text-white hover:text-primary transition-colors">Link 1</Link>
            <Link to="/" className="text-white hover:text-primary transition-colors">Link 2</Link>
            <Link to="/" className="text-white hover:text-primary transition-colors">Link 3</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        ref={heroSectionRef} 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with scale and fade effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{ 
            backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
            transform: `scale(${1 + scrollY * 0.0005})`,
            filter: `brightness(${Math.max(0.5, 1 - scrollY * 0.002)})`
          }}
        >
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-1000"
            style={{ opacity: Math.min(0.6, scrollY * 0.002) }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Main Headline Placeholder
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Sub-headline explaining the main point
          </p>
          <Link to="/" className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 transition-colors py-3 px-6 rounded-md text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Sliding Doors */}
        <div
          ref={leftDoorRef}
          className="absolute inset-0 z-20 w-1/2 bg-forest-800 transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateX(${doorState === 'animate' ? '0' : '-100%'})`,
            left: 0
          }}
        ></div>
        <div
          ref={rightDoorRef}
          className="absolute inset-0 z-20 w-1/2 bg-golden-100 transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateX(${doorState === 'animate' ? '0' : '100%'})`,
            right: 0
          }}
        ></div>

        {/* Marquee Text (appears after doors slide in) */}
        <div 
          className={`absolute z-30 bottom-20 left-0 right-0 overflow-hidden transition-opacity duration-500 ${
            doorState === 'animate' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: doorState === 'animate' ? '800ms' : '0ms' }}
        >
          <div className="marquee-container">
            <div className="marquee-content whitespace-nowrap animate-marquee">
              <span className="text-white text-xl md:text-2xl px-4">
                Placeholder Scrolling Text • More Placeholder Text • Placeholder Scrolling Text • More Placeholder Text •
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Additional Content Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Content Block {item}</h3>
                <p className="text-forest-600 mb-6">
                  This is placeholder content for the section below the animated hero area. 
                  Scroll back up to see the animation again.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedDemo;
