import React from "react";
import { useContext } from "react";
import { DisplayDataContext } from "./appContexts";

// 1. prop drilling
// const DisplayUser = (props) => {
// 	return (
// 		<div>
// 			<h2>{props.username}</h2>
// 		</div>
// 	);
// };

// export default DisplayUser;

// 2. useContext
const DisplayUser = () => {
	const { username } = useContext(DisplayDataContext);
	return (
		<div>
			<h2>{username}</h2>
		</div>
	);
};

export default DisplayUser;
