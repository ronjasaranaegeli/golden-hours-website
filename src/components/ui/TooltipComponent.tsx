import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

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
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>
          <span className="border-dotted border-b-2 border-primary/70 cursor-help inline">{trigger}</span>
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
