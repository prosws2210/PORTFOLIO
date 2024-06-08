import React, { useState, useEffect } from "react";

function ApiDataFetch() {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://randomuser.me/api/")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				return response.json();
			})
			.then((data) => {
				setUserData(data.results[0]);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				Error: {error}
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
				<img className="w-full" src={userData.picture.large} alt="User" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						{userData.name.title} {userData.name.first} {userData.name.last}
					</div>
					<p className="text-gray-700 text-base">Gender: {userData.gender}</p>
					<p className="text-gray-700 text-base">Email: {userData.email}</p>
					<p className="text-gray-700 text-base">
						Location: {userData.location.city}, {userData.location.state},{" "}
						{userData.location.country}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ApiDataFetch;
