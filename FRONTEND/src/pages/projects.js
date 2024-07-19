import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

import TokenImg from "../../public/images/projects/Token.png";
import FFCSImg from "../../public/images/projects/FFCS.jpg"
import DoctorImg from "../../public/images/projects/Doctor.jpg"
import BloggingBlitzImg from "../../public/images/projects/BloggingBlitz.png"
import VoteImg from "../../public/images/projects/Vote.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
	return (
		<article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
		lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
		">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light
			xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "  />

			<Link
				href={link}
				target="_blank"
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg
				lg:w-full"
			>
				<Image
					src={img}
					alt={title}
					className="w-full h-auto max-h-80 object-cover"
				/>
			</Link>
			<div className="w-1/2 flex flex-col items-start justify-between pl-6
			lg:w-full lg:pl-0 lg:pt-6
			">
				<span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
				</Link>
				<p className="my-2 font-medium text-dark/80 dark:text-light/80 sm:text-sm ">{summary}</p>
				<div className="mt-2 flex items-center">
					<Link href={github} target="_blank" className="w-10">
						<GithubIcon className="dark:text-light"/>
					</Link>
					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold dark:bg-light dark:text-dark flex items-center justify-center space-x-2
						sm:px-4 sm:text-base
						"
					>
						Visit Project
						<LinkArrow className="w-2.5 h-auto ml-1 " />
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, img, link, github }) => {
	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light
			md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
			" />
			<Link
				href={link}
				target="_blank"
				className="w-full cursor-pointer overflow-hidden rounded-lg"
			>
				<Image
					src={img}
					alt={title}
					className="w-full h-auto max-h-60 object-cover"
				/>
			</Link>
			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary dark:text-primaryDark font-medium text-xl  lg:text-lg md:text-base">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
				</Link>
				<div className="w-full mt-2 flex items-center justify-between">
					<Link
						href={link}
						target="_blank"
						className="underline text-lg font-semibold md:text-base"
					>
						Visit
					</Link>
					<Link href={github} target="_blank" className="w-8 md:w-6">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const Projects = () => {
	return (
		<>
			<Head>
				<title>Shakti Swaroop Sahu | Projects Page</title>
				<meta
					name="description"
					content="Projects description by Shakti Swaroop Sahu"
				/>
			</Head>
			<TransitionEffect/>
			<main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText text="Imagination to Reality!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

					<div className="grid grid-cols-12 gap-24 gap-y-32
					xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
					">
						<div className="col-span-12">
							<FeaturedProject
								title="FFCS Helper"
								summary="FFCS Helper revolutionizes timetable management for VIT Chennai students by providing an intuitive platform to effortlessly generate personalized schedules based on individual preferences and available slots without clashes. It simplifies the scheduling process by eliminating manual work, ensuring students can focus more on their studies and less on logistical challenges. With features like code sharing and downloading timetables, it promotes seamless collaboration among peers, making academic planning more efficient and accessible."
								img={FFCSImg}
								link="https://ffcs-helper.vercel.app/"
								github="https://github.com/prosws2210/FFCS-TimeTable-Generator"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title="Token Generation & Validation"
								type="Digital Token Generation and Managing Website"
								summary="Developed interactive and responsive user interfaces using ReactJS and Tailwind CSS. Utilized Supabase for backend development, managing user databases with UUIDs for user identification. Integrated Google Sheets for mail merge functionality, implemented QR-based authentication to reduce user waiting time by 50%, and resolved redundancy issues with physical tokens."
								img={TokenImg}
								link="https://kj-ticket.vercel.app"
								github="https://github.com/prosws2210/E-Ticket.io/"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title="College Finance"
								type="Finance managing Website"
								img={TokenImg}
								link="https://riteshp36.github.io/Eat_Out/"
								github="https://github.com/prosws2210/FINANCE"
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								title="Dr. Symptoms"
								summary="Designed an engaging and responsive user interface using ReactJS for the frontend, styled with Tailwind CSS. The website was seamlessly hosted on Vercel. For the backend, I implemented Node.js and Express, utilizing MongoDB to store user details and blogs. Additionally, I employed Firebase for image uploads and JWT for user authentication, resulting in a significant boost in online traffic during Kalinga Jyoti’s inaugural online event."
								img={DoctorImg}
								link="https://health-care-website-two.vercel.app/"
								github="https://github.com/prosws2210/HEALTHCARE"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title="Blogging Blitz"
								type="Website for writing blogs"
								img={BloggingBlitzImg}
								link="https://kj-bloggingblitz.vercel.app/"
								github="https://github.com/prosws2210/KJBlog"
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title="Real-Time Voting"
								type="Website with realtime database"
								img={VoteImg}
								link="https://kj-poll.vercel.app/"
								github="https://github.com/prosws2210/KJ_Polls"
							/>
						</div>

					</div>
				</Layout>
			</main>
		</>
	);
};

export default Projects;
