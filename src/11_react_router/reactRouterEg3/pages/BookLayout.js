import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
	return (
		<div style={{ marginTop: "30px" }}>
			<h3>Layout</h3>
			<Link to="/books/1">Book 1</Link>
			<br />
			<Link to="/books/2">Book 2</Link>
			<br />
			<Link to="/books/new">New Book</Link>
			<Outlet context={{ Name: "Me" }} />
			{/* context helps you share logic across various pages that share this same layout. You can do that using the useOutletContext in anyone of these pages */}
		</div>
	);
};

export default BookLayout;
