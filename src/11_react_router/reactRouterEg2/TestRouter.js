import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const TestRouter = () => {
	return (
		<Router>
			<nav>
				<Link to="/" style={{ display: "block" }}>
					Home
				</Link>
				<Link to="/">Courses</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	return (
		<div>
			<h1>This is the Homepage</h1>
		</div>
	);
};

const Courses = () => {
	return (
		<div>
			<h1>Course Lists</h1>
			<h4>Our Courses are stored her</h4>
		</div>
	);
};

const CoursesId = () => {
	return <div></div>;
};

const Bundles = () => {
	return <div></div>;
};

export default TestRouter;
