import React from "react";
import { useContext } from "react";
import { ChangeProfileContext } from "./Helpers/appContexts";

// passing down props using prop drilling

// const ChangeProfile = () => {
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				onChange={(e) => {
// 					setUsername(e.target.value);
// 				}}
// 			/>
// 			<button className="btn" onClick={() => props.setUsername(props.username)}>
// 				change profile
// 			</button>
// 		</div>
// 	);
// };

// passing down props using state management

const ChangeProfile = () => {
	const { username, setUsername } = useContext(ChangeProfileContext);
	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<button className="btn" onClick={() => setUsername(username)}>
				change profile
			</button>
		</div>
	);
};

export default ChangeProfile;
