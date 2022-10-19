import React from "react";
import { useContext } from "react";
import { DisplayDataContext } from "./appContexts";

const DisplayData = () => {
	const { counter } = useContext(DisplayDataContext);
	return (
		<div>
			<h2>{counter}</h2>
		</div>
	);
};

export default DisplayData;
