import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/counter">Counter</Link>
					<Link to="/diary">Diary</Link>
					<Link to="/todo">Todo</Link>
				</li>
				{/* <li>Counter</li>
				<li>Todo</li> */}
			</ul>
		</div>
	);
};

export default Navbar;
