import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	Outlet,
	useParams,
	NavLink,
	useNavigate,
	useLocation,
} from "react-router-dom";

const MainApp = () => {
	return (
		<Router>
			<nav>
				<Link to="/" style={{ display: "block" }}>
					Home
				</Link>
				<Link to="/learn" style={{ display: "block" }}>
					Learn
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/myapps" element={<Navigate replace to="/learn" />} />
				<Route path="/learn" element={<Learn />}>
					{/* we do this for nested routes */}
					<Route path="course" element={<Courses />}>
						<Route path=":courseid" element={<CourseId />} />
					</Route>
					<Route path="bundle" element={<Bundles />} />
				</Route>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	return (
		<div>
			<h1>Home route</h1>
		</div>
	);
};

const Learn = () => {
	return (
		<div>
			<h1>Learn</h1>
			<h4>All our courses</h4>
			<Link
				to="/learn/course"
				className="btn btn-success"
				style={{ display: "block" }}>
				Courses
			</Link>
			<Link
				to="/learn/bundle"
				className="btn btn-secondary"
				style={{ display: "block" }}>
				Bundle
			</Link>
			{/* the outlet is placed inside of the parent component that is the parent route. the component that the parent route is pointing to  */}
			<Outlet />
		</div>
	);
};

const Courses = () => {
	const courseList = ["React", "Angular", "Vue", "NodeJS"];
	const randomCourseName =
		courseList[Math.floor(Math.random() * courseList.length)];
	return (
		<div>
			<h1>Courses List</h1>
			<h4>Courses card</h4>
			{/* <NavLink to={`/learn/course/courseid`} className="btn">
				{randomCourseName}
			</NavLink> */}
			{/* or */}
			<NavLink
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? "green" : "pink",
					};
				}}
				to={`/learn/course/${randomCourseName}`}
				className="btn">
				{randomCourseName}
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? "green" : "pink",
					};
				}}
				to={`/learn/course/test`}
				className="btn">
				test
			</NavLink>

			<Outlet />
		</div>
	);
};

const Bundles = () => {
	return (
		<div>
			<h1>Bundle List</h1>
			<h4>Bundle card</h4>
		</div>
	);
};

const CourseId = () => {
	const navigate = useNavigate();
	const { courseid } = useParams();
	return (
		<div>
			<h1>URL Params for this course is {courseid} </h1>
			<button
				className="btn btn-warning"
				// onClick={() => navigate("/dashboard", { state: "$399" })}>
				// or
				onClick={() => navigate("/dashboard", { state: courseid })}>
				Price
			</button>
			{/* or */}
			<Link to="/dashboard" state={courseid}>
				Test Link
			</Link>
		</div>
	);
};

const Dashboard = () => {
	const location = useLocation();
	return (
		<div>
			<h1>My Info</h1>
			<h3>{location.state}</h3>
		</div>
	);
};
// export const Bundle = () => {
// 	return (
// 		<div>
// 			<h1>Learn</h1>
// 			<h4>All our courses</h4>
// 			<Link
// 				to="/learn/course"
// 				style={{ display: "block" }}
// 				className="btn btn-primary">
// 				Courses
// 			</Link>
// 			<Link
// 				to="/learn/bundle"
// 				style={{ display: "block" }}
// 				className="btn btn-success">
// 				Bundle
// 			</Link>
// 		</div>
// 	);
// };

export default MainApp;
