// import { Button } from "./Button";

// const DisplayCount = (props) => {
// 	return (
// 		<div>
// 			{props.count}
// 			<Button setCount={props.setCount} />
// 		</div>
// 	);
// };

// export default DisplayCount;

import { useContext } from "react";
import CountButton from "./Button";
import { countContext } from "./Context";

const DisplayCount = () => {
	const { count } = useContext(countContext);
	return (
		<div>
			{count}
			<CountButton />
		</div>
	);
};

export default DisplayCount;
