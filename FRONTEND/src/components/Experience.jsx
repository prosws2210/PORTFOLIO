import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, work, address }) => {
    const ref = useRef(null);

	return (
		<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]
        ">
            <LiIcon reference={ref}/>
			<motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.8,type:"spring"}}   
            >
				<h3 className="capitalize font-bold text-2xl
                sm:text-xl xs:text-lg
                ">
					{position}&nbsp;
					<span className="text-primary dark:text-primaryDark capitalize">@{company}</span>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 
                xs:text-sm
                ">
					{time} | {address}
				</span>
				<p className="font-medium w-full md:text-sm">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center
            md:text-6xl xs:text-4xl md:mb-16
            ">
				Experience
			</h2>
			<div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
				<motion.div 
                style={{scaleY:scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                        <Details
                            position="Web Developer"
                            company="IEEE RAS Club"
                            time="2023 - Present"
                            address="VIT Chennai"
                            work="Developed a website for the club to showcase its activities and events. The website is built using NextJS, Tailwind CSS and Framer Motion."
                        />
                        <Details
                            position="Web Developer"
                            company="Google Developer Student Club"
                            time="2023 - Present"
                            address="VIT Chennai"
                            work="Created user-friendly and interactive websites for conducting events and workshops."
                        />
                        <Details
                            position="Team Lead (Technical Department)"
                            company='Kalinga Jyoti'
                            time="2022 - Present"
                            address="VIT Chennai"
                            work="Led a team of developers and created multiple websites such as Ticket Validation and Management System, Blogging Platform, Live Voting System, and more."
                        />
                    </ul>
		    </div>
        </div>
	);
};

export default Experience;
