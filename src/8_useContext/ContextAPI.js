import React, { useState, useContext } from "react";
import { data } from "../data";

const PersonContext = React.createContext();
// the code above gives us access to 2 components:
// Provider, Consumer
const ContextAPI = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		// wrap the root component in the context and provider
		<PersonContext.Provider value={{ removePerson, people }}>
			<h2>context API/useContext</h2>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const mainData = useContext(PersonContext);
	return (
		<>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	// I access the PersonContext using useContext
	const { removePerson } = useContext(PersonContext);
	return (
		<div className="item">
			<h4>{name}</h4>
			<button
				onClick={() => {
					removePerson(id);
				}}>
				remove
			</button>
		</div>
	);
};

export default ContextAPI;
