import { useSelector } from "react-redux";

const Home = () => {
	const user = useSelector((state) => state.user.value);
	return (
		<div>
			<h1>Home</h1>
			<h3>Hi {user.username}</h3>
		</div>
	);
};

export default Home;
