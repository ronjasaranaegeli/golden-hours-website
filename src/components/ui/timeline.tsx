"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans relative"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto pt-8 pb-0 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-2xl md:text-5xl mb-3 text-forest-900 font-serif font-medium relative inline-block">
          IC•You-Journey
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-golden-400 to-transparent"></span>
        </h2>
        <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto mb-2">
          Entdecke deine Transformation in drei kraftvollen Phasen
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-0 mt-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-4 md:pt-16 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#BAA898] border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#BAA898] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#C4954E] via-[#BAA898] to-transparent from-[0%] via-[30%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
