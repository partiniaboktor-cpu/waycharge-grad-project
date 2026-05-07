import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './CinematicStoryboard.css';

import scene1 from '../Assets/Img/Cinematic/scene1.png';
import scene2 from '../Assets/Img/Cinematic/scene2.png';
import scene3 from '../Assets/Img/Cinematic/scene3.png';
import scene4 from '../Assets/Img/Cinematic/scene4.png';

const scenes = [
  {
    image: scene1,
    title: "The Arrival",
    description: "Experience the future of mobility as your EV meets the smart WayCharge station.",
    accent: "#8DC63F"
  },
  {
    image: scene2,
    title: "Smart Connect",
    description: "Scan, connect, and monitor your charging in real-time with our intuitive mobile app.",
    accent: "#8DC63F"
  },
  {
    image: scene3,
    title: "WayCharge Café",
    description: "Relax in our premium café environment while your vehicle powers up.",
    accent: "#8DC63F"
  },
  {
    image: scene4,
    title: "Ready to Go",
    description: "Fully charged and ready for the road. Charge Smarter. Drive Further.",
    accent: "#8DC63F"
  }
];

const CinematicStoryboard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % scenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cinematic-storyboard-container">
      <div className="storyboard-window">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="storyboard-slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="image-wrapper">
              <motion.img 
                src={scenes[index].image} 
                alt={scenes[index].title} 
                animate={{ scale: [1, 1.05], x: [0, 10] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
              />
              <div className="vignette-overlay"></div>
            </div>

            <div className="content-overlay">
              <motion.div 
                className="content-inner"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="scene-indicator">
                  {scenes.map((_, i) => (
                    <div 
                      key={i} 
                      className={`dot ${i === index ? 'active' : ''}`}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
                <h4 className="scene-label">SCENE 0{index + 1}</h4>
                <h2 className="scene-title">{scenes[index].title}</h2>
                <p className="scene-desc">{scenes[index].description}</p>
                <div className="progress-line">
                  <motion.div 
                    key={`line-${index}`}
                    className="progress-fill"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CinematicStoryboard;
