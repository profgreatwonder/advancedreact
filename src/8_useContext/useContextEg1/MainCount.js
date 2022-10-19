// import { useState } from "react";
// import DisplayCount from "./DisplayCount";

// const MainCount = () => {
// 	const [count, setCount] = useState(0);
// 	return (
// 		<div className="App">
// 			<DisplayCount count={count} setCount={setCount} />
// 		</div>
// 	);
// };

// export default MainCount;

import { useState } from "react";
import DisplayCount from "./DisplayCount";
import { countContext } from "./Context";

const MainCount = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<countContext.Provider value={{ count, setCount }}>
				<DisplayCount />
			</countContext.Provider>
		</div>
	);
};

export default MainCount;
