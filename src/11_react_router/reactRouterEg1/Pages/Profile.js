import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
	let navigate = useNavigate();
	let { username } = useParams();
	// let { id } = useParams();
	return (
		<div>
			<h2>Profile</h2>
			<h4>
				{/* My profile name is {username} and my id is {id}! */}
				My profile name is {username}!
			</h4>
			<button className="btn" onClick={() => navigate("/about")}>
				Go to about us
			</button>
		</div>
	);
};

export default Profile;
