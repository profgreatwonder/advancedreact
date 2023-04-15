import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const MainApp = () => {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/profile">Profile</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				{/* <Route path="/profile" element={<Profile />} /> */}
				<Route path="/profile/:username" element={<Profile />} />
				{/* <Route path="/profile/:id" element={<Profile />} /> */}
			</Routes>
		</Router>
	);
};

export default MainApp;
