import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import KVS_Logo from "../../public/images/profile/KVS_Logo.jpg";
import VIT_Logo from "../../public/images/profile/VIT_Logo.jpg";
import Image from "next/image";

const Details = ({ type, time, institution, logo, performance }) => {
	const ref = useRef(null);

	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
		md:w-[80%]
		"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.8, type: "spring" }}
				className="self-start space-y-1 sm:space-y-2"
			>
				<h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					{type}&nbsp;
				</h3>
				<div className="flex gap-3 ">
					<Image
						src={logo}
						alt="Logo"
						className=" rounded-full sm:w-12 sm:h-12 md:w-14 md:h-14 w-14 h-14 object-cover"
					/>
					<p className="font-medium w-full text-xl sm:text-base">
						{institution}
					</p>
				</div>
				<span
					className="capitalize font-semibold text-dark/75 text-lg dark:text-light/75 
				xs:text-sm
				"
				>
					{time}
				</span>
				<p className="font-medium w-full md:text-sm">{performance}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2
				className="font-bold text-8xl mb-32 w-full text-center
			md:text-6xl xs:text-4xl md:mb-16
			"
			>
				Education
			</h2>
			<div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						type="BTech in CSE with Specialization in AI and ML"
						time="2022 - Present"
						institution="Vellore Institute of Technology, Chennai Campus"
						logo={VIT_Logo}
						performance="CGPA: 9.72/10"
					/>
					<Details
						type="Senior Secondary (Class XII)"
						time="2019 - 2021"
						institution="Kendriya Vidyalaya, No.1, Vasco, Goa"
						logo={KVS_Logo}
						performance="Percentage: 96.2%"
					/>
					<Details
						type="Secondary (Class X)"
						time="2017-2019"
						institution="Kendriya Vidyalaya, No.2, Kochi, Kerala"
						logo={KVS_Logo}
						performance="Percentage: 97.2%"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
