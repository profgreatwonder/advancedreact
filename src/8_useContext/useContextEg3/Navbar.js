import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div style={{ marginBottom: "50px" }}>
			<div>
				<Link to="/">Home</Link>
			</div>

			<div>
				<Link to="/profile">Profile</Link>
			</div>

			<div>
				<Link to="/contact">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
