import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookList = () => {
	return (
		<div>
			{/* <h1>BookLists</h1>
			<Link to="/books/1">Book 1</Link>
			<br />
			<Link to="/books/2">Book 2</Link>
			<br />
			<Link to="/books/new">New Book</Link>
			<Outlet /> */}

			{/* the above code is if we use the method 2 in our MainApp.js (which I prefer) */}
			<h1>BookLists</h1>
		</div>
	);
};

export default BookList;
