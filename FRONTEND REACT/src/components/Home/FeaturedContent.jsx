import React from "react";

const FeaturedContent = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured content */}
                <h2 className="text-3xl font-extrabold mb-10">Featured Content</h2>
                {/* Featured content items */}
                {/* Example item */}
                <div className="flex items-start mb-8 bg-white p-4 rounded-2xl shadow-md">
                    <img src="https://via.placeholder.com/150" alt="Featured Content" className="w-32 h-32 mr-6" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Featured Content Title</h3>
                        <p className="text-gray-700">Brief description of the featured content</p>
                    </div>
                </div>
                <div className="flex items-start mb-8 bg-white p-4 rounded-2xl shadow-md">
                    <img src="https://via.placeholder.com/150" alt="Featured Content" className="w-32 h-32 mr-6" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Featured Content Title</h3>
                        <p className="text-gray-700">Brief description of the featured content</p>
                    </div>
                </div>
                {/* Repeat for other featured content items */}
            </div>
        </section>
    );
};

export default FeaturedContent;
