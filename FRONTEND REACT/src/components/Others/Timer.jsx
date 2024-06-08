import React, { useState, useEffect } from "react";

function Timer() {
	const [initialTime, setInitialTime] = useState(60);
	const [time, setTime] = useState(initialTime);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let timer = null;
		if (isActive && time > 0) {
			timer = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else if (time === 0) {
			clearInterval(timer);
			setIsActive(false);
		}
		return () => {
			clearInterval(timer);
		};
	}, [isActive, time]);

	const handleStart = () => {
		setTime(initialTime)
		setIsActive(true);
	};

	const handleReset = () => {
		setTime(0);
		setIsActive(false);
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-4 text-blue-500">
				{formatTime(time)}
			</h1>
			<div className="flex items-center space-x-4">
				<input
					type="number"
					value={initialTime}
					onChange={(e) => setInitialTime(parseInt(e.target.value))}
					disabled={isActive}
					className="border-2 border-blue-500 rounded w-20 text-center"
				/>
				<button
					onClick={handleStart}
					disabled={isActive}
					className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
				>
					Start
				</button>
				<button
					onClick={handleReset}
					className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700"
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Timer;
