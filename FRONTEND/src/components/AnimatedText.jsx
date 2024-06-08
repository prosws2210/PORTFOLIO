import React from "react";
import { motion, stagger } from "framer-motion";

const quote = {
	intial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const singleWord = {
	intial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const AnimatedText = ({ text, className = "" }) => {
	return (
		<div
			className="w-full mx-auto py-2 flex items-center justify-center
     text-center overflow-hidden sm:py-0"
		>
			<motion.h1
				variants={quote}
				initial="intial"
				animate="animate"
				className={`inline-block w-full text-dark font-bold  text-8xl dark:text-light ${className}`}
			>
				{text.split(" ").map((word, index) => (
					<motion.span
						variants={singleWord}
						key={index}
						className="inline-block"
					>
						{word}
						{index < text.split(" ").length - 1 && <>&nbsp;</>}
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
