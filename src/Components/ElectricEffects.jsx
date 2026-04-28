import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const ElectricEffects = () => {
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Background Animation: Electric Currents
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Bolt {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 100 + 50;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.5 + 0.1;
        this.speed = Math.random() * 0.02 + 0.01;
        this.points = [];
        this.createPoints();
      }

      createPoints() {
        let curX = this.x;
        let curY = this.y;
        this.points = [{ x: curX, y: curY }];
        for (let i = 0; i < 5; i++) {
          curX += (Math.random() - 0.5) * 40;
          curY += Math.random() * 30 + 10;
          this.points.push({ x: curX, y: curY });
        }
      }

      draw() {
        this.opacity += this.speed;
        if (this.opacity > this.maxOpacity) {
          this.speed *= -1;
        }
        if (this.opacity < 0) {
          this.reset();
        }

        ctx.strokeStyle = `rgba(141, 198, 63, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#8DC63F";
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    const bolts = Array.from({ length: 15 }, () => new Bolt());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bolts.forEach((bolt) => bolt.draw());
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Electric Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* Electric Pointer Effect */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Glow Core */}
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#8DC63F",
            borderRadius: "50%",
            boxShadow: "0 0 15px 5px #8DC63F",
          }}
        />

        {/* Outer Pulses */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              border: "1px solid #8DC63F",
              borderRadius: "50%",
              opacity: 0,
            }}
            animate={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Spark Particles */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            style={{
              position: "absolute",
              width: "2px",
              height: "6px",
              backgroundColor: "#8DC63F",
              borderRadius: "2px",
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              rotate: [0, Math.random() * 360],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Global CSS for cursor hiding */}
      <style>
        {`
          body {
            cursor: none;
          }
          a, button, [role="button"], .faqButton8, .menu1, .menus2, .menus3, .menus8, .menus4, .menus5, .menus7, .menus6 {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default ElectricEffects;
