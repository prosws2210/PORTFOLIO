import React, { useState } from "react";

const AboutUsSection = () => {
    // Define your team members here
    const teamMembers = [
        {
            name: "Team Member Name 1",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Team Member Name 2",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Team Member Name 3",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Team Member Name 4",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Team Member Name 5",
            image: "https://via.placeholder.com/150"
        }
        // Add more team members as needed
    ];

    const [visibleCount, setVisibleCount] = useState(3);

    const handleMoreClick = () => {
        setVisibleCount(visibleCount + 3);
    };

    const handleLessClick = () => {
        setVisibleCount(3);
    };

    return (
        <section className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Us section content */}
                <h2 className="text-3xl font-extrabold mb-10">About Us</h2>
                <p className="text-xl mb-10">Brief description of your company or organization.</p>

                {/* Team photos */}
                <div className="flex flex-wrap justify-between gap-10">
                    {teamMembers.slice(0, visibleCount).map((member, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center mb-2 bg-white p-4 rounded-lg shadow-md">
                            <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mb-4" />
                            <p className="font-semibold text-lg">{member.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    {visibleCount < teamMembers.length ? (
                        <button onClick={handleMoreClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">More</button>
                    ) : (
                        <button onClick={handleLessClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Less</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
