import { useSelector } from "react-redux";
// import { changeColor } from "../features/colortheme";
import ChangeColor from "./ChangeColor";

const Profile = () => {
	const user = useSelector((state) => state.user.value);
	const themeColor = useSelector((state) => state.theme.value);
	// const color = useSelector((state) => state.colorTheme.value);
	return (
		<div style={{ color: themeColor.colortheme }}>
			<h1>Profile</h1>
			<h3>Name: {user.username}</h3>
			<h3>Email: {user.email}</h3>
			<h3>Age: {user.age}</h3>
			<ChangeColor />
		</div>
	);
};

export default Profile;
