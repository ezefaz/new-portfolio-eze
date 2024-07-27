"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#AFDBFC",
        position: "fixed",
        pointerEvents: "none",
      }}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    />
  );
};

export default CustomCursor;
