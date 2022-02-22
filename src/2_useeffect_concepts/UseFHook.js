import { useState, useEffect } from "react";

export const useFHook = (url) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		// console.log(users);
		setUsers(users);
	};

	// useEffect cannot return a promise
	useEffect(() => {
		getUsers();
	}, [url]);

	return [users];
};
