import React, { useState } from "react";

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [items, setItems] = useState([
		"Apple",
		"Banana",
		"Orange",
		"Mango",
		"Pineapple",
		"Strawberry",
	]);

	const filteredItems = items.filter((item) =>
		item.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-2xl font-bold mb-4">Search Bar</h1>
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul className="mt-4">
				{filteredItems.map((item, index) => (
					<li key={index} className="text-gray-800">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchBar;
