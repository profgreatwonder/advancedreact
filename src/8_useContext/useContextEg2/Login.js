import React from "react";
import { useContext } from "react";
import { LoginContext } from "./Helpers/appContexts";

const Login = () => {
	const { loggedIn, setLoggedIn } = useContext(LoginContext);

	const handleLogin = () => {
		if (loggedIn === false) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	};

	return (
		<div>
			Login
			<button className="btn" onClick={handleLogin}>
				Login
			</button>
			{loggedIn ? <p>welcome</p> : <p>not logged in</p>}
		</div>
	);
};

export default Login;
