"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "#4f46e5",
        transformOrigin: "0%",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgressBar;
