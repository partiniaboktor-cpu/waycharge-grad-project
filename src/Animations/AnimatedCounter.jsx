import React, { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

/**
 * AnimatedCounter Component
 * Animates a number from 0 to the target value when it enters the viewport.
 * Handles formatting like commas and suffixes (e.g., "10,000+").
 */
const AnimatedCounter = ({ value, duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the value to find numbers and non-numbers
  const stringValue = String(value);
  const numericMatch = stringValue.match(/[\d.]+/g);
  const numericValue = numericMatch ? parseFloat(numericMatch.join('').replace(/,/g, '')) : 0;
  
  // Find prefix and suffix
  const prefix = stringValue.match(/^[^\d.]+/)?.[0] || "";
  const suffix = stringValue.match(/[^\d.]+$/)?.[0] || "";
  const hasCommas = stringValue.includes(",");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    let formatted = Math.floor(latest);
    if (hasCommas) {
      return formatted.toLocaleString();
    }
    return formatted;
  });

  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          const formatted = hasCommas ? Math.floor(latest).toLocaleString() : Math.floor(latest);
          setDisplayValue(prefix + formatted + suffix);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration, delay, prefix, suffix, hasCommas, count]);

  return (
    <motion.span ref={ref} className="animated-counter">
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
