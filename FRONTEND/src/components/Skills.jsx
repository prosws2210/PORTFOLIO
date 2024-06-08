import React from "react";
import { motion } from "framer-motion";

const Skill =({name,x,y})=>{
    return(
        <motion.div className="flex items-center juc rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute
        dark:bg-light dark:text-dark dark:shadow-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
        "
        whileHover={{ scale: 1.05 }}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}} 
        // uncomment to animate only once
        >
            {name}
        </motion.div>
    )
}


const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-8xl mt-64 w-full text-center
            md:text-6xl md:mt-32 
            ">Skills</h2>
			{/* repeating radial gradient */}
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            k">
				<motion.div className="flex items-center juc rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                dark:bg-light dark:text-dark dark:shadow-light
                lg:p-6 md:p-4 xs:text-xs xs:p-2
                "
        whileHover={{ scale: 1.05 }}
        >
					Web
				</motion.div>
        <Skill name="ReactJS" x="-18vw" y="-3vw" />
        <Skill name="NextJS" x="-5vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="20vw" y="6vw" />
        <Skill name="Node.js" x="0vw" y="10vw" />
        <Skill name="Pyhon" x="-20vw" y="-15vw" />
        <Skill name="C++" x="15vw" y="-12vw" />
        <Skill name="Java" x="28vw" y="-5vw" />
        <Skill name="ML" x="14vw" y="-3vw" />
        <Skill name="Firebase" x="0vw" y="-18vw" />
        <Skill name="MongoDB" x="-24vw" y="6vw" />
        <Skill name="SQL" x="18vw" y="15vw" />
        <Skill name="Supabase" x="-10vw" y="16vw" />
			</div>
		</>
	);
};

export default Skills;
