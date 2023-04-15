import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../stores";
// import React, { useState } from "react";
// import { login, logout } from "../stores";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {
// 	const [newUserName, setNewUserName] = useState("");

// 	const dispatch = useDispatch();

// 	const username = useSelector((state) => state.user.value.username);

// 	return (
// 		<div>
// 			<h1>Login {username}</h1>

// 			<input
// 				type="text"
// 				placeholder="Enter Name"
// 				onChange={(e) => {
// 					setNewUserName(e.target.value);
// 				}}
// 			/>

// 			<button
// 				className="btn"
// 				onClick={() => dispatch(login({ username: newUserName }))}>
// 				Login
// 			</button>

// 			<button className="btn" onClick={() => dispatch(logout())}>
// 				Logout
// 			</button>
// 		</div>
// 	);
// };

// export default Login;

const Login = () => {
	const [newUser, setNewUser] = useState("");
	const dispatch = useDispatch();
	// const newName = useSelector((state) => state.user.value.username);
	// or
	const newName = useSelector((state) => state.user.value);
	// user - name of the reducer in the store
	return (
		<div>
			<h1>Login</h1>

			<h3>You are Logged in {newName.username}</h3>

			<input
				type="text"
				placeholder="Name"
				onChange={(e) => {
					setNewUser(e.target.value);
				}}
			/>
			<button
				className="btn"
				onClick={() => dispatch(login({ username: newUser }))}>
				Login
			</button>
		</div>
	);
};

export default Login;
