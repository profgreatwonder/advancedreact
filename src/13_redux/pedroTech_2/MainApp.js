import React from "react";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";

const MainApp = () => {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Link to="./">Home</Link>
					<Link to="./login">Login</Link>
					<Link to="./profile">Profile</Link>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</Router>
			</Provider>
		</>
	);
};

export default MainApp;
