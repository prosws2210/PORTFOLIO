import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const Logo = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<Link href="/">
				<MotionDiv
					whileHover={{
						backgroundColor: [
							"#121212",
							"rgba(131,58,180,1)",
							"rgba(253,29,29,1)",
							"rgba(252,176,69,1)",
							"rgba(131,58,180,1)",
							"#121212",
						],
						transition: { duration: 1, repeat: Infinity },
					}}
				className="w-20 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-extrabold border-2 border-solid border-transparent dark:border-light cursor-pointer"
				>
					SWS
				</MotionDiv>
			</Link>
		</div>
	);
};

export default Logo;
