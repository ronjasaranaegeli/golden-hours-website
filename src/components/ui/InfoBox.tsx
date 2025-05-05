
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoBoxProps {
  children: ReactNode;
  isQuote?: boolean;
  className?: string;
}

const InfoBox = ({ children, isQuote = false, className }: InfoBoxProps) => {
  return (
    <div className={cn(
      "relative pl-6 py-4 pr-5 bg-[#F1F0FB] rounded-sm",
      className
    )}>
      <div className="absolute top-0 left-0 h-full w-1.5 bg-golden-400"></div>
      <div className={cn(
        "text-forest-700",
        isQuote && "italic font-serif"
      )}>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
