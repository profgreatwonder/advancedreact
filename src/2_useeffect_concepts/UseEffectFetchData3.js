import React, { useState, useEffect } from "react";
import { useFHook } from "./UseFHook";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
	// const [users, setUsers] = useState([]);

	// const getUsers = async () => {
	// 	const response = await fetch(url);
	// 	const users = await response.json();
	// 	// console.log(users);
	// 	setUsers(users);
	// };

	// // useEffect cannot return a promise
	// useEffect(() => {
	// 	getUsers();
	// }, []);

	// or
	// useEffect(() => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((users) => setUsers(users));
	// }, []);

	const [users] = useFHook(url);

	return (
		<>
			<h2>useEffect fetch data</h2>
			<h3>Github Users</h3>
			<ul className="users">
				{users.map((user) => {
					const { id, login, avatar_url, html_url, gists_url, repos_url } =
						user;

					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>Profile</a>
								{/* <a href={gists_url}>Gist URL</a>
								<a href={repos_url}>Repos URL</a> */}
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;
