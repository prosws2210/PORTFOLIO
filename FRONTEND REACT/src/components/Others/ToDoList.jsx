import React, { useState } from "react";

function TodoList() {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([
		{ id: 0, text: "First task", completed: false },
		{ id: 1, text: "Second task", completed: false },
		{ id: 2, text: "Third task", completed: false },
	]);
	const [editId, setEditId] = useState(null);

	const handleAddTask = () => {
		if (task.trim() !== "") {
			if (editId !== null) {
				const updatedTasks = tasks.map((t) =>
					t.id === editId ? { ...t, text: task } : t
				);
				setTasks(updatedTasks);
				setEditId(null);
			} else {
				setTasks([...tasks, { id: tasks.length, text: task, completed: false }]);
			}
			setTask("");
		}
	};

	const handleRemoveTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const handleToggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const handleEditTask = (id) => {
		const taskToEdit = tasks.find((t) => t.id === id);
		setTask(taskToEdit.text);
		setEditId(id);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-200">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h1 className="text-2xl font-bold mb-4">To-Do List</h1>
				<div className="flex mb-4">
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Enter task..."
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						onClick={handleAddTask}
					>
						{editId !== null ? "Edit Task" : "Add Task"}
					</button>
				</div>
				<h2 className="text-xl font-bold mb-2">Incomplete Tasks</h2>
				<ul>
					{tasks
						.filter((task) => !task.completed)
						.map((task) => (
							<li
								key={task.id}
								className="cursor-pointer py-2"
								onClick={() => handleToggleComplete(task.id)}
							>
								{task.text}
								<button
									className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
									onClick={() => handleRemoveTask(task.id)}
								>
									Remove
								</button>
								<button
									className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
									onClick={() => handleEditTask(task.id)}
								>
									Edit
								</button>
							</li>
						))}
				</ul>
				<h2 className="text-xl font-bold mb-2 mt-4">Completed Tasks</h2>
				<ul>
					{tasks
						.filter((task) => task.completed)
						.map((task) => (
							<li
								key={task.id}
								className="cursor-pointer py-2 line-through text-gray-500"
								onClick={() => handleToggleComplete(task.id)}
							>
								{task.text}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default TodoList;
