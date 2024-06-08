import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const Contact = () => {
	const text1 = "Let's Connect!";
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append("access_key", "6b237d09-d693-4ee1-bb63-022b43df10d3");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			setSuccess(true);
			setError(false);
		} else {
			setError(true);
			setSuccess(false);
		}
	}

	return (
		<>
			<Head>
				<title>Ritesh Pradhan | Contact Page</title>
				<meta name="description" content="Ritesh Pradhan Contact Page" />
			</Head>
			<TransitionEffect/>
			<main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <div className="h-full flex flex-row lg:flex-col ">
						{/* text */}
                        <div className=" lg:min-h-[20vh] lg:w-full w-1/2 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dark dark:text-light font-medium">
							{text1.split("").map((letter, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 1 }}
									animate={{ opacity: 0 }}
									transition={{
										duration: 3,
										repeat: Infinity,
										delay: index * 0.1,
									}}
								>
									{letter}
									{letter === " " ? "\u00A0" : ""}
								</motion.span>
							))}
							😊
						</div>
						{/* form */}

						<form
                            onSubmit={handleSubmit}
                            className="h-1/2 lg:h-full lg:w-full w-1/2 bg-primary/10 flex flex-col gap-8 justify-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl 
                            dark:bg-primaryDark/90 dark:text-dark dark:border-light dark:border-2 dark:border-solid shadow-md dark:shadow-light
                            "
                        >
							<span className="font-semibold">Dear Ritesh Pradhan,</span>
							<textarea
								name="message"
								rows={6}
								className="bg-transparent border-b-2 border-b-black outline-none resize-none"
							></textarea>
							<span className="font-semibold ">My email address is:</span>
							<input
								name="email"
								type="text"
								className="bg-transparent border-b-2 border-b-black outline-none "
							/>
							<span className="font-semibold ">Regards</span>
							<button className="bg-primary/75 text-light rounded-xl font-semibold p-2 sm:p-3 md:p-4 border-2 border-light shadow-sm  hover:border-dark
                            dark:bg-dark/90 dark:text-light dark:border-light dark:shadow-light  hover:scale-105 duration-300 
                            ">
								Send
							</button>
							{success && (
								<span className="text-green-600 font-semibold sm:text-sm">
									Message sent successfully
								</span>
							)}
							{error && (
								<span className="text-red-600 font-semibold sm:text-sm">
									Something went wrong
								</span>
							)}
						</form>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default Contact;
