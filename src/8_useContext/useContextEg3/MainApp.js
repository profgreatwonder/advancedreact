import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Error404 from "./Error404";
import { ChangeProfileContext } from "./Helpers/appContexts";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";

// the code using prop drilling(before the intro to state management)

// const MainApp = () => {
// 	const [username, setUsername] = useState("jack");
// 	return (
// 		<Router>
// 			<Navbar />
// 			<Routes>
// 				<Route path="/" element={<Home username={username} />} />
// 				<Route
// 					path="/profile"
// 					element={<Profile username={username} setUsername={setUsername} />}
// 				/>
// 				<Route path="/contact" element={<Contact />} />
// 				<Route path="*" element={<Error404 />} />
// 			</Routes>
// 		</Router>
// 	);
// };

// the code using the useContext state management(helps with prop drilling)

const MainApp = () => {
	const [username, setUsername] = useState("name");

	return (
		<ChangeProfileContext.Provider value={{ username, setUsername }}>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</Router>
		</ChangeProfileContext.Provider>
	);
};

export default MainApp;
