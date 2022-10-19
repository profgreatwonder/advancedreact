import { useContext } from "react";
import { DisplayDataContext } from "./appContexts";

const UpdateUser = () => {
	const { username } = useContext(DisplayDataContext);
	return (
		<div style={{ marginBottom: "20px" }}>
			<h3>{username}</h3>
		</div>
	);
};

export default UpdateUser;
