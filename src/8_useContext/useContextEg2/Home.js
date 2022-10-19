import React from "react";
import { useContext } from "react";
import { LoginContext } from "./Helpers/appContexts";

const Home = () => {
	const { loggedIn } = useContext(LoginContext);
	return (
		<div>
			Home
			{loggedIn ? <p>welcome</p> : <p>not logged in</p>}
		</div>
	);
};

export default Home;
