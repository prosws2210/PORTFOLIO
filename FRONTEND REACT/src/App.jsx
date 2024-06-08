import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Others from "./pages/Others";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App() {
	return (
		<div>
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/others" element={<Others />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}
