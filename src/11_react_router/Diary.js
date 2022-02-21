import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const Diary = () => {
	const [people, setPeople] = useState(data);
	return (
		<div>
			<h1>People Page</h1>
			{people.map((person) => {
				return (
					<div key={person.id}>
						<h4>{person.name}</h4>
						<Link to={`/person/${person.id}`}>Learn More</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Diary;
