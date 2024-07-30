"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      animate={{
        x: position.x - (isHovered ? 15 : 7.5),
        y: position.y - (isHovered ? 15 : 7.5),
      }}
      transition={{
        type: "tween",
        stiffness: 100,
        damping: 10,
      }}
      style={{
        width: isHovered ? 40 : 15,
        height: isHovered ? 40 : 15,
        borderRadius: "50%",
        backgroundColor: "#AFDBFC",
        position: "fixed",
        pointerEvents: "none",
      }}
    />
  );
};

export default CustomCursor;
