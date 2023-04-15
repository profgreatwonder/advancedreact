import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newAge, setNewAge] = useState("");

	const dispatch = useDispatch();
	return (
		<div>
			<h1>Login</h1>
			<div>
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => setNewName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					onChange={(e) => setNewEmail(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Age"
					onChange={(e) => setNewAge(e.target.value)}
				/>
			</div>

			<button
				className="btn"
				onClick={() =>
					dispatch(login({ username: newName, email: newEmail, age: newAge }))
				}>
				Login
			</button>
			<button className="btn" onClick={() => dispatch(logout())}>
				Logout
			</button>
		</div>
	);
};

export default Login;
