import { useState, useReducer } from "react";

export const ReducerLesson = () => {
	const [count, setCount] = useState(0);
	const [showText, setShowText] = useState(true);

	return (
		<div>
			<h1>{count}</h1>
			<button
				className="btn"
				onClick={() => {
					setCount(count + 1);
					setShowText(!showText);
				}}>
				click here
			</button>

			{showText && <p>This is a text</p>}
		</div>
	);
};

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return { count: state.count + 1, showtext: state.showText };

// 		case "TOGGLESHOWTEXT":
// 			return { count: state.count, showText: !state.showText };

// 		default:
// 			return state;
// 	}
// };

// const defaultValues = {
// 	count: 0,
// 	showText: true,
// };

// export const ReducerToUseReducer = () => {
// 	const [state, dispatch] = useReducer(reducer, defaultValues);

// 	return (
// 		<div>
// 			<h1>{state.count}</h1>
// 			<button
// 				className="btn"
// 				onClick={() => {
// 					dispatch({ type: "INCREMENT" });
// 					dispatch({ type: "TOGGLESHOWTEXT" });
// 				}}>
// 				click here
// 			</button>

// 			{state.showText && <p>This is a text</p>}
// 		</div>
// 	);
// };

const defaultValues = {
	count: 0,
	showText: true,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1, showText: state.showText };
		case "TOGGLE":
			return { count: state.count, showText: !state.showText };
	}
};
export const ReducerToUseReducer = () => {
	// const [count, setCount] = useState(0);
	// const [showText, setShowText] = useState(true);
	const [state, dispatch] = useReducer(reducer, defaultValues);

	return (
		<div>
			<h3>{state.count}</h3>
			<button
				className="btn"
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "TOGGLE" });
				}}>
				click here
			</button>

			{state.showText && <p>This is a text</p>}
		</div>
	);
};

// export const AnotherReducerEg = () => {
// 	const [userInput, setUserInput] = useState("");
// 	const [count, setCount] = useState(0);
// 	const [color, setColor] = useState(false);

// 	const decrease = () => {
// 		setCount((prevCount) => {
// 			return prevCount - 1;
// 		});
// 	};

// 	const increase = () => {
// 		setCount((prevCount) => {
// 			return prevCount + 1;
// 		});
// 	};

// 	const updateColor = () => {
// 		setColor((prevCount) => {
// 			return !color;
// 		});
// 	};

// 	return (
// 		<main style={{ color: color ? "#FFF" : "#FFF952" }}>
// 			<input
// 				type="text"
// 				value={userInput}
// 				onChange={(e) => setUserInput(e.target.value)}
// 			/>
// 			<br /> <br />
// 			<p>{count}</p>
// 			<section>
// 				<button className="btn" onClick={decrease}>
// 					-
// 				</button>
// 				<button className="btn" onClick={increase}>
// 					+
// 				</button>
// 				<button className="btn" onClick={updateColor}>
// 					color
// 				</button>
// 			</section>
// 			<p>{userInput}</p>
// 		</main>
// 	);
// };

const initialValues = {
	userInput: "",
	count: 0,
	color: false,
};

const stateReducer = (state, action) => {
	switch (action.type) {
		case "USERINPUT":
			return { userInput: state };
	}
};

export const AnotherReducerEg = () => {
	const [state, reducer] = useReducer(stateReducer, initialValues);
	const [userInput, setUserInput] = useState("");
	const [count, setCount] = useState(0);
	const [color, setColor] = useState(false);

	const decrease = () => {
		setCount((prevCount) => {
			return prevCount - 1;
		});
	};

	const increase = () => {
		setCount((prevCount) => {
			return prevCount + 1;
		});
	};

	const updateColor = () => {
		setColor((prevCount) => {
			return !color;
		});
	};

	return (
		<main style={{ color: color ? "#FFF" : "#FFF952" }}>
			<input
				type="text"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<br /> <br />
			<p>{count}</p>
			<section>
				<button className="btn" onClick={decrease}>
					-
				</button>
				<button className="btn" onClick={increase}>
					+
				</button>
				<button className="btn" onClick={updateColor}>
					color
				</button>
			</section>
			<p>{userInput}</p>
		</main>
	);
};
