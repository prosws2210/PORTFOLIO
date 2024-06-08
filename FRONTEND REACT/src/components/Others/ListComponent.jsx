import React, { useState } from "react";

function ListComponent() {
	const [items, setItems] = useState([
		{ id: 1, name: "Apple", price: 1.5 },
		{ id: 2, name: "Banana", price: 2.0 },
		{ id: 3, name: "Orange", price: 1.2 },
		{ id: 4, name: "Mango", price: 3.5 },
		{ id: 5, name: "Pineapple", price: 4.0 },
	]);
	const [filter, setFilter] = useState("");
	const [newItemName, setNewItemName] = useState("");
	const [newItemPrice, setNewItemPrice] = useState("");

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	const handleNewItemNameChange = (e) => {
		setNewItemName(e.target.value);
	};

	const handleNewItemPriceChange = (e) => {
		setNewItemPrice(e.target.value);
	};

	const handleAddItem = () => {
		if (newItemName && newItemPrice) {
			const newItem = {
				id: items.length + 1,
				name: newItemName,
				price: parseFloat(newItemPrice),
			};
			setItems([...items, newItem]);
			setNewItemName("");
			setNewItemPrice("");
		}
	};

	const filteredItems = items.filter(
		(item) =>
			item.name.toLowerCase().includes(filter.toLowerCase()) ||
			item.price.toString().includes(filter.toLowerCase())
	);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-3xl font-bold mb-4">List Component</h1>
			<input
				className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
				type="text"
				placeholder="Filter items by name or price..."
				value={filter}
				onChange={handleFilterChange}
			/>
			<ul className="border border-gray-300 rounded-lg px-4 py-2 max-h-80 overflow-y-auto">
				{filteredItems.map((item) => (
					<li key={item.id} className="text-lg py-1">
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
			<div className="flex flex-col items-center mt-4">
				<input
					className="border border-gray-300 rounded-lg px-4 py-2 mb-2"
					type="text"
					placeholder="Enter item name..."
					value={newItemName}
					onChange={handleNewItemNameChange}
				/>
				<input
					className="border border-gray-300 rounded-lg px-4 py-2 mb-2"
					type="text"
					placeholder="Enter item price..."
					value={newItemPrice}
					onChange={handleNewItemPriceChange}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={handleAddItem}
				>
					Add Item
				</button>
			</div>
		</div>
	);
}

export default ListComponent;
