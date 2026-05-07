import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollRevealText Component
 * Animates text word-by-word or as a whole block when it enters the viewport.
 */
const ScrollRevealText = ({ text, className = "", stagger = 0.05, duration = 0.5 }) => {
  if (!text) return null;

  // Split text into words, preserving newlines
  const words = text.split(/(\s+)/);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      filter: "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`scroll-reveal-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ScrollRevealText;
