import React from "react";
import { useContext } from "react";
import { DisplayDataContext } from "./appContexts";

// 1. prop drilling
// const DisplayCounter = ({ count }) => {
// 	return (
// 		<div>
// 			<h3>{count}</h3>
// 		</div>
// 	);
// };

// export default DisplayCounter;

const DisplayCounter = () => {
	const { count } = useContext(DisplayDataContext);
	return (
		<div>
			<h3>{count}</h3>
		</div>
	);
};

export default DisplayCounter;
