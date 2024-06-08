import React, { useState } from "react";

function Calculator() {
	const [display, setDisplay] = useState("");
	const [result, setResult] = useState("");

	const handleButtonClick = (value) => {
		if (value === "=") {
			try {
				setResult(eval(display).toString());
			} catch (error) {
				setResult("Error");
			}
		} else if (value === "C") {
			setDisplay("");
			setResult("");
		} else {
			setDisplay(display + value);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-4 text-blue-500">Calculator</h1>
			<div className="bg-white p-4 rounded-lg mb-4 shadow-lg">
				<div className="text-right text-2xl mb-2 text-gray-700">{display}</div>
				<div className="text-right text-3xl text-blue-500">{result}</div>
			</div>
			<div className="grid grid-cols-4 gap-2">
				{[
					"7",
					"8",
					"9",
					"/",
					"4",
					"5",
					"6",
					"*",
					"1",
					"2",
					"3",
					"-",
					"0",
					".",
					"=",
					"+",
				].map((value) => (
					<button
						key={value}
						onClick={() => handleButtonClick(value)}
						className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
					>
						{value}
					</button>
				))}
			</div>
			<button
				onClick={() => handleButtonClick("C")}
				className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700"
			>
				Clear
			</button>
		</div>
	);
}

export default Calculator;
