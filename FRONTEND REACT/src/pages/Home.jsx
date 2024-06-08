import React from "react";
import HeroSection from "../components/Home/HeroSection.jsx";
import FeaturedContent from "../components/Home/FeaturedContent.jsx";
import AboutUsSection from "../components/Home/AboutUsSection.jsx";
import Calculator from "../components/Home/Calculator.jsx";
import Home_Slider from "../components/Home/Home_Slider"
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures"
import Home_DoctorsMessage from "../components/Home/Home_DoctorsMessage"
import Home_DoctorsDomain from "../components/Home/Home_DoctorsDomain"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedContent />
            <AboutUsSection />
            <Calculator />
            <Home_Slider />
			<Home_KeyFeatures />
			<Home_DoctorsMessage />
			<Home_DoctorsDomain />
        </div>
    );
};

export default Home;
