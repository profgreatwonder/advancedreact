import React, { useState, useEffect } from "react";
// conditional rendering: this is not a hook. we will display different components or content based on some conditions.
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
	// 1. Basic Example(static example):
	// const [loading, setLoading] = useState(true);

	// if (loading) {
	//     return <h2>Loading...</h2>;
	// }
	// return <h3>multiple returns</h3>;

	// 2. More Complex Example(dynamic example[fetching]):
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState("default user");

	useEffect(() => {
		// setIsLoading(true);

		// basically, you need to fetch your response, data, and error

		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				} else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
				}
			})
			.then((user) => {
				const { login } = user;
				setUser(login);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));

		// or

		// const getUsers = async () => {
		//     const response = await fetch(url);
		//     const users = await response.json();
		//     setUsers(users);
		//     // console.log(users);
		// }

		// useEffect(() => {
		//     getUsers();
		// }, [])
	}, []);

	if (isLoading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}

	if (isError) {
		return (
			<div>
				<h2>Error...</h2>
			</div>
		);
	}

	return (
		<div>
			<h2>{user}</h2>
		</div>
	);
};

export default MultipleReturns;
