"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // *** MODIFICATION HERE ***
  const startAnimation = () => {
    // 1. Clear any potentially existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // 2. Start the new interval
    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 2500);
  };
  // *** END MODIFICATION ***

  useEffect(() => {
    // We call startAnimation, which is now safe (idempotent)
    startAnimation();

    const abortController = new AbortController();
    const { signal } = abortController;

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        // Clear the interval when the tab is not visible
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Ensure the ref is nullified
      } else if (document.visibilityState === "visible") {
        // Show the next sentence immediately
        setCurrentSentence((prev) => (prev + 1) % sentences.length); 
        // Restart the interval (startAnimation handles cleanup internally)
        startAnimation(); 
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      { signal }
    );

    return () => {
      // Cleanup on unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      abortController.abort();
    };
    // If sentences change, the effect needs to rerun to ensure cycle length is correct.
  }, [sentences]); 

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={`current-sentence-${currentSentence}`}
        className={cn(
          "font-mono text-sm text-balance text-muted-foreground select-none",
          className
        )}
        initial={{
          y: 8,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -8,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
