import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import { store } from "./stores";

const MainApp = () => {
	return (
		<Provider store={store}>
			<Router>
				<Link to="./">Home</Link>
				<Link to="./contact">Contact</Link>
				<Link to="./login">Login</Link>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default MainApp;
