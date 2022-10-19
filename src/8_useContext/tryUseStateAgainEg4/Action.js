import e from "cors";
import React from "react";
import { useReducer } from "react";
import { useState } from "react";

// stage 3 imports
import { ACTIONS, reducer } from "./reducer";
import DisplayCounter from "./DisplayCounter";
import DisplayUser from "./DisplayUser";
import { DisplayDataContext } from "./appContexts";

//stage 4 imports

// stage 1: the beginning with useState

// const Action = () => {
// 	const [count, setCount] = useState(0);
// 	const [username, setUsername] = useState("");

// 	const increase = () => {
// 		setCount((prevCount) => prevCount + 1);
// 	};

// 	const decrease = () => {
// 		setCount((prevCount) => prevCount - 1);
// 	};

// 	const handleChange = (e) => {
// 		setUsername(e.target.value);
// 	};

// 	return (
// 		<div>
// 			<h3>{count}</h3>
// 			<h2>{username}</h2>

// 			<div>
// 				<button className="btn" onClick={increase}>
// 					Increase
// 				</button>
// 				<button className="btn" onClick={decrease}>
// 					Decrease
// 				</button>
// 			</div>

// 			<div style={{ marginTop: "50px" }}>
// 				<input type="text" value={username} onChange={handleChange} />
// 				{/* <button className="btn" onClick={(e) => setUsername(e.target.value)}>
// 					Update
// 				</button> */}
// 			</div>
// 		</div>
// 	);
// };

// export default Action;

// // stage 2: converting to usereducer to handle multiple state

// const initialValues = {
// 	count: 0,
// 	username: "",
// };

// const ACTIONS = {
// 	INCREMENT: "increment",
// 	DECREMENT: "decrement",
// 	NEW_USER_INPUT: "userInput",
// };

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case ACTIONS.INCREMENT:
// 			return { ...state, count: state.count + 1 };

// 		case ACTIONS.DECREMENT:
// 			return { ...state, count: state.count - 1 };

// 		case ACTIONS.NEW_USER_INPUT:
// 			return { ...state, username: action.payload };
// 	}
// };

// const Action = () => {
// 	const [state, dispatch] = useReducer(reducer, initialValues);

// 	return (
// 		<div>
// 			<h3>{state.count}</h3>
// 			<h2>{state.username}</h2>

// 			<div>
// 				<button
// 					className="btn"
// 					onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
// 					Increase
// 				</button>
// 				<button
// 					className="btn"
// 					onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
// 					Decrease
// 				</button>
// 			</div>

// 			<div style={{ marginTop: "50px" }}>
// 				<input
// 					type="text"
// 					value={state.username}
// 					onChange={(e) =>
// 						dispatch({
// 							type: ACTIONS.NEW_USER_INPUT,
// 							payload: e.target.value,
// 						})
// 					}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Action;

// // stage 3: splitting stuffs to their various files using the prop drilling method

// const initialValues = {
// 	count: 0,
// 	username: "",
// };

// const Action = () => {
// 	const [state, dispatch] = useReducer(reducer, initialValues);

// 	return (
// 		<div>
// 			<DisplayCounter count={state.count} />
// 			<DisplayUser username={state.username} />

// 			<div>
// 				<button
// 					className="btn"
// 					onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
// 					Increase
// 				</button>
// 				<button
// 					className="btn"
// 					onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
// 					Decrease
// 				</button>
// 			</div>

// 			<div style={{ marginTop: "50px" }}>
// 				<input
// 					type="text"
// 					value={state.username}
// 					onChange={(e) =>
// 						dispatch({
// 							type: ACTIONS.NEW_USER_INPUT,
// 							payload: e.target.value,
// 						})
// 					}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Action;

// stage 4: using useContext

const initialValues = {
	count: 0,
	username: "",
};

const Action = () => {
	const [state, dispatch] = useReducer(reducer, initialValues);

	return (
		<div>
			<DisplayDataContext.Provider
				value={{ count: state.count, username: state.username }}>
				<DisplayCounter />
				<DisplayUser />
			</DisplayDataContext.Provider>

			<div>
				<button
					className="btn"
					onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
					Increase
				</button>
				<button
					className="btn"
					onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
					Decrease
				</button>
			</div>

			<div style={{ marginTop: "50px" }}>
				<input
					type="text"
					value={state.username}
					onChange={(e) =>
						dispatch({
							type: ACTIONS.NEW_USER_INPUT,
							payload: e.target.value,
						})
					}
				/>
			</div>
		</div>
	);
};

export default Action;
