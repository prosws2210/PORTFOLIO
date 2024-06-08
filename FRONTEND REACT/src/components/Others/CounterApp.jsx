import React, { useState } from "react";

function CounterApp() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-4">Counter App</h1>
			<p className="text-2xl mb-4">Count: {count}</p>
			<div className="space-x-4">
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded-lg"
					onClick={increment}
				>
					Increment
				</button>
				<button
					className="px-4 py-2 bg-red-500 text-white rounded-lg"
					onClick={decrement}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default CounterApp;
