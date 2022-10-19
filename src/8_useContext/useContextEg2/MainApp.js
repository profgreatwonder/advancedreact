import React from "react";
import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import { LoginContext } from "./Helpers/appContexts";

const MainApp = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
			<Home />
			<Login />
			<Profile />
		</LoginContext.Provider>
	);
};

export default MainApp;
