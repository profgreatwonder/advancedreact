import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { DisplayDataContext } from "./appContexts";
import DisplayData from "./DisplayData";
import { reducer, ACTIONS } from "./reducer";
import UpdateUser from "./UpdateUser";

// here, I converted from usestate to usereducer, then moved the reducer to a separate file. then i worked on getting access to the displayData using prop drilling

// const initValues = {
// 	counter: 0,
// 	username: "",
// };

// //moved to reducer.js

// // const ACTIONS = {
// // 	INCREMENT: "increment",
// // 	DECREMENT: "decrement",
// // 	NEW_USER_INPUT: "updateUser",
// // };

// // const reducer = (state, action) => {
// // 	switch (action.type) {
// // 		case ACTIONS.INCREMENT:
// // 			return { ...state, counter: state.counter + 1 };
// // 		case ACTIONS.DECREMENT:
// // 			return { ...state, counter: state.counter - 1 };
// // 		case ACTIONS.NEW_USER_INPUT:
// // 			return { ...state, username: action.payload };
// // 	}
// // };

// const Counter = () => {
// 	// const [counter, setCounter] = useState(0);
// 	const [state, dispatch] = useReducer(reducer, initValues);

// 	// const increase = () => {
// 	// 	setCounter((prevCount) => prevCount + 1);
// 	// };

// 	// const decrease = () => {
// 	// 	setCounter((prevCount) => prevCount - 1);
// 	// };

// 	return (
// 		<div>
// 			{/* <h4>{state.counter}</h4> */}
// 			<DisplayData counter={state.counter} username={state.username} />

// 			<div style={{ marginBottom: "50px" }}>
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

// 			<div style={{ marginBottom: "20px" }}>
// 				<input
// 					type="text"
// 					onChange={(e) => {
// 						dispatch({ type: ACTIONS.NEW_USER_INPUT, payload: e.target.value });
// 					}}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// here, I took the file above and worked on accessing data using useContext

const initValues = {
	counter: 0,
	username: "",
};

//moved to reducer.js

// const ACTIONS = {
// 	INCREMENT: "increment",
// 	DECREMENT: "decrement",
// 	NEW_USER_INPUT: "updateUser",
// };

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case ACTIONS.INCREMENT:
// 			return { ...state, counter: state.counter + 1 };
// 		case ACTIONS.DECREMENT:
// 			return { ...state, counter: state.counter - 1 };
// 		case ACTIONS.NEW_USER_INPUT:
// 			return { ...state, username: action.payload };
// 	}
// };

const Counter = () => {
	// const [counter, setCounter] = useState(0);
	const [state, dispatch] = useReducer(reducer, initValues);

	// const increase = () => {
	// 	setCounter((prevCount) => prevCount + 1);
	// };

	// const decrease = () => {
	// 	setCounter((prevCount) => prevCount - 1);
	// };

	return (
		<div>
			{/* <h4>{state.counter}</h4> */}
			<DisplayDataContext.Provider
				value={{ username: state.username, counter: state.counter }}>
				<DisplayData />
				<UpdateUser />
			</DisplayDataContext.Provider>

			<div style={{ marginBottom: "50px" }}>
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

			<div style={{ marginBottom: "20px" }}>
				<input
					type="text"
					onChange={(e) => {
						dispatch({ type: ACTIONS.NEW_USER_INPUT, payload: e.target.value });
					}}
				/>
			</div>
		</div>
	);
};

export default Counter;
