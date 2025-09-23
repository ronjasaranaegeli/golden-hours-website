import React, { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface TooltipComponentProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  delayDuration?: number;
}

export const TooltipComponent = ({
  trigger,
  content,
  side = "top",
  delayDuration = 300
}: TooltipComponentProps) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(hover: none)'),
      window.matchMedia('(pointer: coarse)')
    ];

    const updateTouchState = () => {
      setIsTouchDevice(mediaQueries.some((query) => query.matches));
    };

    mediaQueries.forEach((query) => {
      if (query.addEventListener) {
        query.addEventListener('change', updateTouchState);
      } else if ((query as MediaQueryList).addListener) {
        (query as MediaQueryList).addListener(updateTouchState);
      }
    });

    updateTouchState();

    return () => {
      mediaQueries.forEach((query) => {
        if (query.removeEventListener) {
          query.removeEventListener('change', updateTouchState);
        } else if ((query as MediaQueryList).removeListener) {
          (query as MediaQueryList).removeListener(updateTouchState);
        }
      });
    };
  }, []);

  const triggerClasses = "border-dotted border-b-2 border-primary/70 cursor-help inline";

  if (isTouchDevice) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" className={`${triggerClasses} bg-transparent p-0 text-inherit focus:outline-none focus-visible:ring-0`}>
            {trigger}
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-white/95 backdrop-blur-sm text-forest-800 p-3 max-w-[280px] rounded-sm border border-golden-200 shadow-lg text-sm" side="bottom" align="start">
          {typeof content === 'string' ? <span>{content}</span> : content}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>
          <span className={triggerClasses}>{trigger}</span>
        </TooltipTrigger>
        <TooltipContent 
          className="bg-white/95 backdrop-blur-sm text-forest-800 p-3 max-w-[280px] rounded-sm border border-golden-200 shadow-lg text-sm"
          side={side}
        >
          {typeof content === 'string' ? <span>{content}</span> : content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
