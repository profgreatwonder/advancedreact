// export const Button = (props) => {
// 	return (
// 		<div>
// 			<button
// 				className="btn"
// 				onClick={() => {
// 					props.setCount((prevCount) => prevCount + 1);
// 				}}>
// 				Increase
// 			</button>
// 		</div>
// 	);
// };

import { useContext } from "react";
import { countContext } from "./Context";

// export default Button;

const CountButton = () => {
	const { setCount } = useContext(countContext);
	return (
		<div>
			<button className="btn" onClick={() => setCount((prev) => prev + 1)}>
				increase
			</button>
		</div>
	);
};

export default CountButton;
