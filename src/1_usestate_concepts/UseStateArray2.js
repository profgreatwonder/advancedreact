import React, { useState } from "react";
// you don't have to import useState, we could just say,
// e.g. const [people, setPeole] = React.useState(); (you can use this method when you need useState only once in a component)
import { data } from "../data";

const UseStateArray = () => {
	// 1. we create our hook and pass data(which is a file with an array of objects) into the useState function.
	const [people, setPeople] = useState(data);

	// 7. Next we want to set up the function for the click event. this function is going to be looking for the id. This is possible cos it is all located in the iterations(map). What it does is that for each and every item, we grab the id, const { id, name } = person; then we set up onClick={() => removeItem(id)} which invokes the removeItem with the specific id (when it is clicked, this is why there is the arrow function before it)

	// 8. we add the id to removeItem cos it is always going to be looking for the id of each item
	// 9. then we add the functionality. What we want to do is to filter out the array. All the items that doesn't have the matching id, we would want to leave them in the list. the items that has the matching id, we want to remove them. We can add all the functionality into the setPeople
	// const removeItem = (id) => {
	//     setPeople(people.filter((person) => person.id !== id));
	// }

	// or just create a variable and pass it to the setPeople
	// const removeItem = (id) => {
	//     let newPeople = people.filter((person) => person.id !== id);
	//     setPeople(newPeople);
	// }

	// 10. we could also use a functional approach to this method. either way works
	const removeItem = (id) => {
		setPeople((oldPeople) => {
			let newPeople = oldPeople.filter((person) => person.id !== id);
			return newPeople;
		});
	};

	return (
		<>
			<h3>UseState Array Example</h3>
			{/* 2. Next, we want to iterate over our array found in data.js(we never forget that since we are now in JSX, we are not to forget to put our JavaScript into a curly braces*/}
			{people.map((person) => {
				console.log(person);
				// 3. we destructure the object(the id and name)
				const { id, name } = person;
				return (
					// 4. When we render a list, we need to add the key prop and pass in the unique value
					<div key={id} className="item">
						<h4>{name}</h4>

						{/* 6. We want to remove each item from the list rather than all at once, so we add a button. We add the id in order to reference the individual element we want to delete */}
						<button className="btn" onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}

			{/* 5. Next, we want to set up our event(inline this time). We pass an empty array into the 'setPeople' function. It is an empty array because we want to clear all the items from the list. we start with the arrow function because we want to prevent it from being invoked before it is clicked i.e. we only want to invoke it when we click on it*/}
			<button
				className="btn"
				onClick={() => {
					setPeople([]);
				}}>
				{" "}
				clear items
			</button>
		</>
	);
};

export default UseStateArray;
