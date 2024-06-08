import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.png";
import { FaRocket, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
	const skillsRef = useRef(null);
	const experienceRef = useRef(null);
	const educationRef = useRef(null);

	const scrollToRef = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<>
			<Head>
				<title>Ritesh Pradhan | About Page</title>
				<meta name="description" content="About Ritesh Pradhan" />
			</Head>
			<TransitionEffect/>
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text="Empowered by Innovation!"
						className="text-6xl lg:!text-6xl mb-16 sm:!text-5xl xs:!text-4xl sm:mb-8"
					/>
					<div
						className="grid w-full grid-cols-8 gap-16
					sm:gap-8
					"
					>
						{/* biography */}
						<div
							className="col-span-3 flex flex-col items-start justify-start
						xl:col-span-4 md:order-2 md:col-span-8
						"
						>
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								Biography
							</h2>
							<p className="font-medium text-sm text-justify">
								I&apos;m Ritesh Pradhan, a web developer and ML enthusiast with a
								year of experience creating websites. I focus on
								user-centered design, solving real-world problems, and enhancing
								user experiences through meticulous attention to detail.
							</p>
							<p className="font-medium my-4 text-sm">
								I pursued a B.Tech in Computer Science and Engineering with a
								specialization in AI and ML at Vellore Institute of Technology,
								Chennai. I stay updated with industry trends, continuously
								improving my skills as a web developer and competitive
								programmer.
							</p>
							<p className="font-medium text-sm">
								From Odisha, I draw inspiration from my roots to create unique
								designs. I commit to excellence and user-centered thinking in
								all projects, whether it&apos;s an e-commerce platform, social app,
								or portfolio website.
							</p>
						</div>
						{/* image */}
						<div
							className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light dark:shadow-light
							xl:col-span-4 md:order-1 md:col-span-8
						"
						>
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
							<Image
								src={profilePic}
								alt="Ritesh Pradhan"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="{max-width: 640px} 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						{/* buttons */}
						<div
							className=" col-span-2  flex flex-col justify-start pt-10 gap-8
							xl:flex-row md:flex-col items-center xl:col-span-8 xl:justify-evenly md:justify-start md:gap-4 xl:pt-0 md:order-3
							"
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.9 }}
								className="flex items-center space-x-4 p-4 rounded-lg cursor-pointer shadow-lg border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light dark:shadow-light w-3/4
								md:shadow-md
								"
								onClick={() => scrollToRef(skillsRef)}
							>
								<FaRocket className=" xl:text-sm dark:text-white" />
								<h2 className="font-semibold xl:text-sm dark:text-white">
									Skills
								</h2>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.9 }}
								className="flex items-center space-x-4 p-4 rounded-lg cursor-pointer shadow-lg border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light dark:shadow-light w-3/4
								md:shadow-md
								"
								onClick={() => scrollToRef(experienceRef)}
							>
								<FaLightbulb className="text-xl xl:text-sm dark:text-white" />
								<h2 className="font-semibold xl:text-sm dark:text-white">
									Experience
								</h2>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.9 }}
								className="flex items-center gap-4 p-4 rounded-lg cursor-pointer shadow-lg border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light dark:shadow-light w-3/4
								md:shadow-md
								"
								onClick={() => scrollToRef(educationRef)}
							>
								<FaGraduationCap className="text-xl xl:text-sm dark:text-white" />
								<h2 className="font-semibold  xl:text-sm dark:text-white">
									Education
								</h2>
							</motion.div>
							<div className="arrow dark:bg-dark md:inline-block xl:hidden mt-8">
								<span className="dark:border-light"></span>
								<span className="dark:border-light"></span>
								<span className="dark:border-light"></span>
							</div>
						</div>
					</div>
					<div className="arrow dark:bg-dark col-span-8 hidden xl:block w-10 mx-auto mt-8 md:hidden">
						<span className="dark:border-light"></span>
						<span className="dark:border-light"></span>
						<span className="dark:border-light"></span>
					</div>
					<div ref={skillsRef}>
						<Skills />
					</div>
					<div ref={experienceRef}>
						<Experience />
					</div>
					<div ref={educationRef}>
						<Education />
					</div>
				</Layout>
			</main>
		</>
	);
};

export default About;
