
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageMergeAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set a timeout to mark animation as complete
    const timeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Animation takes 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Final merged image (current hero background) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: animationComplete ? 1 : 0,
        }}
        transition={{ duration: 0.8, delay: 2.2 }}
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>
      
      {/* Left image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-left bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/7f530417-8f71-4393-933b-096bbe45a69e.png")',
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: animationComplete ? -100 : 0, 
          opacity: animationComplete ? 0 : 1 
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Right image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/f07e6c66-dbb5-4609-909f-99904edf8d66.png")',
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: animationComplete ? 100 : 0,
          opacity: animationComplete ? 0 : 1
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay to create merge effect */}
      <motion.div
        className="absolute inset-0 bg-golden-100"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 1.4, 
          delay: 1.2,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default ImageMergeAnimation;
