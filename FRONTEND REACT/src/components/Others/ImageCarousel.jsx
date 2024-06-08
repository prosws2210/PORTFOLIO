import React, { useState, useEffect } from "react";

function ImageCarousel() {
	const images = [
		"https://via.placeholder.com/600x400?text=Image+1",
		"https://via.placeholder.com/600x400?text=Image+2",
		"https://via.placeholder.com/600x400?text=Image+3",
		"https://via.placeholder.com/600x400?text=Image+4",
		"https://via.placeholder.com/600x400?text=Image+5",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000);

		return () => {
			clearInterval(intervalId);
		};
	}, [images]);

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<>
			<h2 className="bg-blue-500 text-white py-1 px-2 rounded-t text-3xl font-bold text-center">
				Image Carousel
			</h2>
			<div className="relative w-full h-96 overflow-hidden rounded shadow-lg">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Image ${index + 1}`}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 object-cover ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
					/>
				))}
				<button
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
					onClick={goToPrevious}
				>
					Previous
				</button>
				<button
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
					onClick={goToNext}
				>
					Next
				</button>
			</div>
		</>
	);
}

export default ImageCarousel;
