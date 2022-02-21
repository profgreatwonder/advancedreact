import React, { useState } from "react";

// here want to be able to add multiple input with the same onChange handler. the idea is to help us handle a scenario where we have 10 imputs or more, we don't want to have 10 different state values and 10 different onChange handler. we will be refactoring our code from the controlInput.

const MultipleInputs = () => {
	// const [firstName, setFirstName] = useState('');
	// const [email, setEmail] = useState('');
	// const [age, setAge] = useState('');

	// 1. now, instead of setting up different useStates for the different inputs, we can now set up one state fo all the inputs
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
	const [people, setPeople] = useState([]);

	// 2. we want to set up our handle change
	const handleChange = (e) => {
		// we want to target two things, the name and value stored in the form
		const name = e.target.name;
		const value = e.target.value;
		// accessing using dynamic object properties
		setPerson({ ...person, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// now we want to set up conditions for submitting the form
		if (person.firstName && person.email && person.age) {
			const newPerson = { ...person, id: new Date().getTime().toString() };
			// instead of passing in function here, we will pass in a arrays instead
			setPeople([...people, newPerson]);

			// we always set the form values back to an empty string(i.e. clear the form field) once the form is submitted
			setPerson({ firstName: "", email: "", age: "" });
		}
	};

	return (
		<article>
			<h2>controlled input</h2>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="firstName">Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={person.firstName}
						onChange={handleChange}
					/>
				</div>

				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						name="email"
						value={person.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-control">
					<label htmlFor="age">age:</label>
					<input
						type="text"
						id="age"
						name="age"
						value={person.age}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" onClick={handleSubmit}>
					add person
				</button>
			</form>

			{people.map((person) => {
				const { id, firstName, email, age } = person;
				return (
					<div className="item" key={id}>
						<h4>{firstName}</h4>
						<p>{email}</p>
						<p>{age}</p>
					</div>
				);
			})}
		</article>
	);
};

export default MultipleInputs;
