import React from "react";
import { useContext } from "react";
import { LoginContext } from "./Helpers/appContexts";

const Profile = () => {
	const { loggedIn } = useContext(LoginContext);
	return (
		<div>
			Profile
			{loggedIn ? <p>welcome</p> : <p>not logged in</p>}
		</div>
	);
};

export default Profile;
