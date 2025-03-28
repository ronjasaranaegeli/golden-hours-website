
import React from 'react';

const ImageMergeAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Final merged image (hero background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/golden-hours-image-1.JPG")',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default ImageMergeAnimation;
