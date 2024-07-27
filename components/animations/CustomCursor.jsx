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
			className='fixed top-0 left-0 pointer-events-none z-50'
			style={{
				width: 20,
				position: "fixed",
				pointerEvents: "none",
				height: 20,
				borderRadius: "50%",
				backgroundColor: "#AFDBFC",
				// border: "2px solid #000",
				x: position.x,
				y: position.y,
			}}
			animate={{
				x: position.x - 10,
				y: position.y - 10,
			}}
			transition={{
				type: "tween",
				stiffness: 200,
				damping: 30,
			}}
		/>
	);
};

export default CustomCursor;
