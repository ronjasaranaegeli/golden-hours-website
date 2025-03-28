
"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect, ReactNode } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const EvervaultCard = ({
  text,
  className,
  customWords,
}: {
  text?: ReactNode;
  className?: string;
  customWords?: string[];
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    // Erhöhte Menge an Text für vollständige Abdeckung
    let str = generateRandomString(7000, customWords);
    setRandomString(str);
  }, [customWords]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(7000, customWords);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-none w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center text-forest-800 font-bold">
            <div className="absolute w-full h-full bg-white/[0.85] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-forest-800 z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  // Vergrößerter Maskierungsradius für bessere Abdeckung
  let maskImage = useMotionTemplate`radial-gradient(450px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#e2d1c3] to-[#F2FCE2] opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 inset-y-0 h-full w-full break-words whitespace-pre-wrap text-forest-800 font-serif font-medium transition duration-500 overflow-hidden text-xl md:text-2xl lg:text-3xl">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length: number, customWords?: string[]) => {
  if (customWords && customWords.length > 0) {
    let result = "";
    while (result.length < length) {
      const randomWord = customWords[Math.floor(Math.random() * customWords.length)];
      result += randomWord + " ";
    }
    return result.substring(0, length);
  } else {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
