import React from "react";
import { motion } from "framer-motion";

/**
 * GradualBlur Component
 * Animates the CSS blur filter and opacity when the element enters the viewport.
 */
const GradualBlur = ({ children, initialBlur = 20, finalBlur = 0, duration = 1.2, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={`gradual-blur-container ${className}`}
      initial={{ 
        filter: `blur(${initialBlur}px)`, 
        opacity: 0,
        scale: 0.95
      }}
      whileInView={{ 
        filter: `blur(${finalBlur}px)`, 
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Custom quint ease out
      }}
    >
      {children}
    </motion.div>
  );
};

export default GradualBlur;
