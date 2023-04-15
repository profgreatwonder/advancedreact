import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
	// const username = useSelector((state) => state.user.value.username);
	// const username = useSelector((state) => state.user.value.username);
	// or
	const newName = useSelector((state) => state.user.value);

	return (
		<div>
			<h3>Contact {newName.username}</h3>
		</div>
	);
};

export default Contact;
