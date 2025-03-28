
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AffirmationAnimation = () => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'merging' | 'final' | 'complete'>('initial');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const sequence = async () => {
      // Wait for initial images to appear
      await new Promise(r => setTimeout(r, 1000));
      
      // Start merging
      setAnimationStage('merging');
      
      // Show the final merged image
      await new Promise(r => setTimeout(r, 1500));
      setAnimationStage('final');
      
      // Show the affirmation text
      await new Promise(r => setTimeout(r, 700));
      setShowText(true);
      
      // Complete the animation (fade out slowly)
      await new Promise(r => setTimeout(r, 3500));
      setAnimationStage('complete');
    };
    
    sequence();
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto mb-2">
      {/* Left Image */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-golden-200"
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: animationStage === 'initial' ? 0 : animationStage === 'merging' ? 40 : 0,
          opacity: animationStage === 'complete' ? 0 : 1,
          scale: animationStage === 'merging' ? 0.8 : 1
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img 
          src="/images/golden-hours-image-4.JPG" 
          alt="Potential" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Right Image */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-forest-200"
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: animationStage === 'initial' ? 0 : animationStage === 'merging' ? -40 : 0,
          opacity: animationStage === 'complete' ? 0 : 1,
          scale: animationStage === 'merging' ? 0.8 : 1
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img 
          src="/images/golden-hours-image-5.JPG" 
          alt="Transformation" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Merged Image (Center) */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: animationStage === 'merging' || animationStage === 'final' ? 1 : 0,
          scale: animationStage === 'merging' ? 0.8 : animationStage === 'final' ? 1 : 0.5,
          y: animationStage === 'complete' ? -20 : 0
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img 
          src="/images/golden-hours-image-3.JPG" 
          alt="Wholeness" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Affirmation Text */}
      <motion.div 
        className="text-center absolute -bottom-16 left-0 right-0 mx-auto w-full font-serif"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showText ? 1 : 0, 
          y: showText ? 0 : 20 
        }}
        transition={{ duration: 1 }}
      >
        <p className="text-white text-lg md:text-xl italic">
          "Vereint in <span className="text-golden-300">Bewusstsein</span> und <span className="text-forest-300">Potenzial</span>"
        </p>
      </motion.div>
      
      {/* Space holder for the animation */}
      <div className="w-full h-48 md:h-64"></div>
    </div>
  );
};

export default AffirmationAnimation;
