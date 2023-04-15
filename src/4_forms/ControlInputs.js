import e from "cors";
import React, { useState } from "react";
// In JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// In React:
// value, onChange
// In react, we have the controlled and uncontrolled(we'll look at it when you want to look at useRef) input. Whenever we deal with controlled input, we will be hooking up our input to a state value.

// In order to access the data that is inside the input (as we are typing or submitting), we have  to connect our input to our state value:

// 1)First we set up state values using the useState hooks.

// 2) Next, we need to add two attribute on the input(a.the value that will reference the state value, b.onChange eventListener to fire the callback function each and everytime we type something in the input)

// 3) Next, we head over to our input and input the values that we want to reference(firstName and email). This will throw an error in the console and make our form disabled in the browser.

// 4) Finally, we want to set up the onChange event so that each and every time that we type something into the form field, we will fire that function. Within the function, we will set up the state value and return, we will see it right away in the form. Now the value in a form depends on the state value.

export const ControlInputs = () => {
	// our state values
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	// a. now we want to add people to a list
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// c. we want to submit form only if both fields have details.
		if (firstName && email) {
			// const person = { firstname:firstName, email:email };
			// or (since the value and key has the same name)
			// const person = { firstName, email };
			// g. we want to set up our own unique id using the date object
			// const person = { id: new Date().getTime().toString(), firstName:firstName, email:email };

			// or for short

			const person = { id: new Date().getTime().toString(), firstName, email };
			// console.log(person);
			// d. we want to add the new person to my useState people array
			setPeople((prevPeople) => {
				return [...prevPeople, person];
			});
			// e. here, we want to set the form values back to an empty string(i.e. clear the form field) once the form is submitted
			setFirstName("");
			setEmail("");
		} else {
			console.log("empty values");
		}
		console.log(firstName, email); // b. we want to be able to grab the people that we are creating and adding them to the form.
	};
	return (
		<article>
			<h2>controlled input</h2>
			<form className="form" onSubmit={handleSubmit}>
				{/* in react, you can submit a form using the onSubmit event(placed in the form element) or the onClick event(placed in the button element. Make sure the button type is set to submit) */}
				<div className="form-control">
					<label htmlFor="firstName">Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>

				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit">add person</button>
			</form>

			{/* f. next, we want to show the people that we are adding to the browser. We do that by iterating though the values from the form*/}
			{people.map((person) => {
				// we then destructure
				const { id, firstName, email } = person;

				return (
					// h. now we can set up our id using the key prop
					<div className="item" key={id}>
						<h4>{firstName}</h4>
						<p>{email}</p>
					</div>
				);
			})}
		</article>
	);
};

// export default ControlInputs;

export const FormEg = () => {
	const [values, setValues] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setValues(e.target.value);
	};

	return (
		<div>
			<form action="">
				<input type="text" value={values} onChange={handleChange} />
			</form>

			<h1>{values}</h1>
		</div>
	);
};
