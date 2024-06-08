import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light bg-light dark:bg-dark dark:border-light 
    sm:text-base "
		>
			<Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:gap-y-2">
				<div className=" space-x-4 text-sm font-semibold sm:block hidden text-dark/75 dark:text-light/75 underline underline-offset-2 drop-shadow-md ">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
				<div className="flex items-center  lg:text-sm">
					Built with <span className="text-red-500 text-2xl px-1">&#9825;</span>{" "}
					by &nbsp;{" "}
					<Link href="/about" className="underline underline-offset-2">
						Ritesh Pradhan
					</Link>
				</div>
				<Link
					href="/contact"
					className="underline underline-offset-2 sm:hidden"
				>
					Say Hello
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
