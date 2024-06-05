import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App() {
	return (
		<div>
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}
