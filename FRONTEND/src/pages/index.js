import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profile-pic-4.jpg";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Ritesh Pradhan | Portfolio Website</title>
				<meta name="description" content="Ritesh Pradhan Portfolio website" />
			</Head>
			<TransitionEffect/>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout className="pt-0 md:p-16 sm:pt-8">
					<div className="flex items-center justify-between w-full lg:flex-col">
						<div className="w-1/2 md:w-full">
							<Image
								src={profilePic}
								alt="Profile Picture"
								className="w-3/4 mx-auto h-auto lg:hidden md:inline-block md:w-full"
								priority
								sizes="{max-width: 640px} 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
							<AnimatedText
								text="Bridging Creativity and Code for Smarter Solutions"
								className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl sm:!text-3xl"
							/>
							<p className="my-4 text-base font-medium md:text-sm sm:text-xs">
							A full-stack developer creating beautiful, functional websites using machine learning for enhancing user experiences.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href="https://drive.google.com/drive/folders/1f9fE_SgWoeJoVAJxpzP-nDvhfSuncH_E?usp=sharing"
									target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-300 dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-dark hover:dark:border-light
				  md:p-2 md:px-4 md:text-base 
				  "
								>
									Resume
                  <LinkArrow className="w-6 h-6 ml-1" />
								</Link>
								<Link href="mailto:riteshpradhan2003@gmail.com" target="_blank"
                className="ml-4  text-lg font-medium capitalize text-dark underline dark:text-light
				md:text-base
				"
                >
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>
        <HireMe />
        <div  className="absolute right-8 bottom-8 inline-block w-24 lg:hidden">
          <Image src={lightBulb} alt="Ritesh Pradhan" className="w-full h-auto" />
        </div>
			</main>
		</>
	);
}
