import React, { useState } from "react";

function DynamicBackground() {
	const [color, setColor] = useState("#FFFFFF");

	const handleClick = () => {
		// Generate a random color in hex format
		const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		setColor(randomColor);
	};

	return (
		<div
			className="h-screen flex items-center justify-center"
			style={{ backgroundColor: color, transition: "background-color 0.5s" }}
			onClick={handleClick}
		>
			<h1 className="text-4xl text-white font-bold">
				Click to Change Background
			</h1>
		</div>
	);
}

export default DynamicBackground;
