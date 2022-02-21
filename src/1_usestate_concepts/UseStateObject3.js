import React, { useState } from "react";

// With array, things were straight forward but with objects, there are some values that we want to preserve.
const UseStateObject = () => {
	// 1. you can directly pass the object into the useState.
	const [person, setPerson] = useState({
		name: "peter",
		age: 24,
		message: "random message",
	});

	// 8. You can set up as many state values as you want in a component. e.g.
	// const [name, setName] = useState('peter');
	// const [age, setAge] = useState(24);
	// const [message, setMessage] = useState('random message');

	// 4. now we want to set up our function to change message.
	// const changeMessage = () => {
	//     // setPerson({...person, message: 'hello world'});

	//     // The functional approach
	//     // setPerson((prevPerson) => {...prevPerson, message: 'hello world'});

	//     // 10. After setting of the values, we cause the change to happen here
	//     setMessage('hello world');
	// }

	// 7. The if...else statement to change the message back and forth didn't work. This is because I was calling setPerson conditionally which should not be done.
	const changeMessage = () => {
		if (person.message === "random message") {
			setPerson({ ...person, message: "hello world" });
		} else {
			setPerson({ ...person, message: "random message" });
		}
	};

	// or we could try the functional approach
	// const changeMessage = () => {
	// 	setPerson((oldMessage) => {
	// 		if (person.oldMessage === "random message") {
	// 			setPerson({ ...person, message: "hello world" });
	// 		} else {
	// 			setPerson({ ...person, message: "random message" });
	// 		}
	// 	});
	// };
	// I'm guessing that this is one of those situations where functional approach won't work.

	// 5. The problem with the approach of just passing the change we want ('hello world') is that when we click on the button, everything gets wiped out. we could solve it by targeting just the message only, setPerson({message: 'hello world'}); but the problem is that the message changes but the other data get wiped leaving only the message,

	// 6. the solution to this problem is using the spread operator. we copy the values(person in this case), then come up with the value that we want to overwrite(in this case, message) --> setPerson({...person, message: 'hello world'});

	// N/B: With objects, always use the spread operator. there are older setup that we can use.

	// console.log(person). We are checking to see if we have access to the person object

	return (
		<div>
			<h3>UseState Object Example</h3>

			{/* 2. We want to access the values of our state value */}
			{/* <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.message}</p> */}

			{/* 9. here, in order to test that we can create multiple hooks, we access our state values created at number 8  */}
			<p>{person.name}</p>
			<p>{person.age}</p>
			<p>{person.message}</p>

			{/* 3. We need a button to changes the message */}
			<button className="btn" onClick={changeMessage}>
				change message
			</button>
		</div>
	);
};

export default UseStateObject;
