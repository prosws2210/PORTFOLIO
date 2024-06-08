import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-blue-500 text-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero section content */}
                <h1 className="text-5xl font-extrabold mb-6">Your Hero Section Headline</h1>
                <p className="text-xl mb-10">Brief Description of Your Hero Section</p>
                <button className="bg-white text-blue-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 px-8 py-3 rounded-full font-semibold">Call to Action</button>
            </div>
        </section>
    );
};

export default HeroSection;
