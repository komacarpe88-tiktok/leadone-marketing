"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  // Add spring physics for smooth, natural movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[40] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, rgba(201,168,76,0.5), #C9A84C, rgba(201,168,76,0.5))",
        boxShadow: "0 0 10px rgba(201,168,76,0.5)",
      }}
    />
  );
}
