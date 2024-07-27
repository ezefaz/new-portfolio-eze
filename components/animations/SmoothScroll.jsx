"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const controls = useAnimation();
  let lastScrollY = 0;
  let ticking = false;

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        controls.start({ y: -lastScrollY });
        ticking = false;
      });

      ticking = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
