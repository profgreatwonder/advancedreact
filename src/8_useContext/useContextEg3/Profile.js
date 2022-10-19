import React from "react";
import { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { ChangeProfileContext } from "./Helpers/appContexts";

// passing down props using prop drilling

// const Profile = (props) => {
// 	return (
// 		<div>
// 			<p>This is my Profile: {props.username} </p>
// 			<ChangeProfile
// 				setUsername={props.setUsername}
// 				username={props.username}
// 			/>
// 		</div>
// 	);
// };

// passing down props using state management

const Profile = () => {
	const { username } = useContext(ChangeProfileContext);
	return (
		<div>
			<p>This is my Profile: {username} </p>
			<ChangeProfile />
		</div>
	);
};

export default Profile;
