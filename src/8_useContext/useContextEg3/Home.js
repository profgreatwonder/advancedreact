import React from "react";
import { useContext } from "react";
import { ChangeProfileContext } from "./Helpers/appContexts";

// passing down props using prop drilling

// const Home = (props) => {
// 	return (
// 		<div>
// 			<p>This is {props.username} Home Page</p>
// 		</div>
// 	);
// };

// passing down props using state management

const Home = () => {
	const { username } = useContext(ChangeProfileContext);
	return (
		<div>
			<p>This is {username}'s Home Page</p>
		</div>
	);
};

export default Home;
