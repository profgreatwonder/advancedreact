import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
	// const username = useSelector((state) => state.user.value.username);
	// or
	const newName = useSelector((state) => state.user.value);
	return (
		<div>
			<h1>Come Home {newName.username}</h1>
		</div>
	);
};

export default Home;
