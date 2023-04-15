import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
	const { id } = useParams();
	const person = useOutletContext();
	return (
		<div>
			<h2>Books</h2>
			<h5>
				Book {id} {person.Name}
			</h5>
		</div>
	);
};

export default Book;
