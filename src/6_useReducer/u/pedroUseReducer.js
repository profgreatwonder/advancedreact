import e from "cors";
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
		case "increment":
			// return { count: state.count + 1, showText: state.showText };
			// even better
			return { ...state, count: state.count + 1 };
		case "toggle":
			// return { count: state.count, showText: !state.showText };
			// even better
			return { ...state, showText: !state.showText };
		default:
			throw new Error("this action does not exist");
	}
};

// even further better
const ACTION = {
	INCREMENT: "increment",
	TOGGLE: "toggle",
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
					// dispatch({ type: 'increment' });
					// dispatch({ type: 'toggle' });
					dispatch({ type: ACTION.INCREMENT });
					dispatch({ type: ACTION.TOGGLE });
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

// 	// const decrease = () => {
// 	// 	setCount((prevCount) => {
// 	// 		return prevCount - 1;
// 	// 	});
// 	// };

// 	const increase = () => {
// 		setCount((prevCount) => {
// 			return prevCount + 1;
// 		});
// 	};

// 	const updateColor = () => {
// 		setColor((prevColor) => {
// 			return !prevColor;
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
// 				<button className="btn" onClick={() => setCount((prev) => prev - 1)}>
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

// // translate the above code using the reducer function

// const initValues = {
// 	count: 0,
// 	color: false,
// 	userInput: "",
// };

// const comReducer = (state, action) => {
// 	switch (action.type) {
// 		case "increment":
// 			return { ...state, count: state.count + 1 };
// 		case "decrement":
// 			return { ...state, count: state.count - 1 };
// 		case "toggleColor":
// 			return { ...state, color: !state.color };
// 		case "newUserInput":
// 			return { ...state, userInput: action.payload };
// 		default:
// 			throw new Error("this action does not exist");
// 	}
// };

// export const AnotherReducerEg = () => {
// 	const [state, dispatch] = useReducer(comReducer, initValues);
// 	// const [userInput, setUserInput] = useState("");
// 	// const [count, setCount] = useState(0);
// 	// const [color, setColor] = useState(false);

// 	// const decrease = () => {
// 	// 	setCount((prevCount) => {
// 	// 		return prevCount - 1;
// 	// 	});
// 	// };

// 	// const increase = () => {
// 	// 	setCount((prevCount) => {
// 	// 		return prevCount + 1;
// 	// 	});
// 	// };

// 	// const updateColor = () => {
// 	// 	setColor((prevColor) => {
// 	// 		return !prevColor;
// 	// 	});
// 	// };

// 	return (
// 		<main style={{ color: state.color ? "#FFF" : "#FFF952" }}>
// 			<input
// 				type="text"
// 				value={state.userInput}
// 				onChange={(e) =>
// 					dispatch({ type: "newUserInput", payload: e.target.value })
// 				}
// 			/>
// 			<br /> <br />
// 			<p>{state.count}</p>
// 			<section>
// 				<button className="btn" onClick={() => dispatch({ type: "decrement" })}>
// 					-
// 				</button>
// 				<button className="btn" onClick={() => dispatch({ type: "increment" })}>
// 					+
// 				</button>
// 				<button
// 					className="btn"
// 					onClick={() => dispatch({ type: "toggleColor" })}>
// 					color
// 				</button>
// 			</section>
// 			<p>{state.userInput}</p>
// 		</main>
// 	);
// };

// another version of the translated code but I prefer the one above cos this one is not necessary.

const initValues = {
	count: 0,
	color: false,
	userInput: "",
};

const comReducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		case "toggleColor":
			return { ...state, color: !state.color };
		case "newUserInput":
			return { ...state, userInput: action.payload };
		default:
			throw new Error("this action does not exist");
	}
};

const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	TOGGLE: "toggleColor",
	NEW_USER_INPUT: "newUserInput",
};

export const AnotherReducerEg = () => {
	const [state, dispatch] = useReducer(comReducer, initValues);
	// const [userInput, setUserInput] = useState("");
	// const [count, setCount] = useState(0);
	// const [color, setColor] = useState(false);

	// const decrease = () => {
	// 	setCount((prevCount) => {
	// 		return prevCount - 1;
	// 	});
	// };

	// const increase = () => {
	// 	setCount((prevCount) => {
	// 		return prevCount + 1;
	// 	});
	// };

	// const updateColor = () => {
	// 	setColor((prevColor) => {
	// 		return !prevColor;
	// 	});
	// };

	return (
		<main style={{ color: state.color ? "#FFF" : "#FFF952" }}>
			<input
				type="text"
				value={state.userInput}
				onChange={(e) =>
					dispatch({ type: ACTIONS.NEW_USER_INPUT, payload: e.target.value })
				}
			/>
			<br /> <br />
			<p>{state.count}</p>
			<section>
				<button
					className="btn"
					onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
					-
				</button>
				<button
					className="btn"
					onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
					+
				</button>
				<button
					className="btn"
					onClick={() => dispatch({ type: ACTIONS.TOGGLE })}>
					color
				</button>
			</section>
			<p>{state.userInput}</p>
		</main>
	);
};

// const initialValues = {
// 	counter: 0,
// };

const ACTION1 = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
};

const webReducer = (state, action) => {
	switch (action.type) {
		case ACTION1.INCREMENT:
			return { counter: state.counter + 1 };
		case "decrement":
			return { counter: state.counter - 1 };
		default:
			return state;
	}
};

// export const WebDevUseReducer = () => {
// 	// const [counter, setCounter] = useState(0);
// 	const [state, dispatch] = useReducer(webReducer, { counter: 0 });

// 	const increment = () => {
// 		dispatch({ type: ACTION1.INCREMENT });
// 	};

// 	return (
// 		<div>
// 			<p>{state.counter}</p>
// 			<button className="btn" onClick={increment}>
// 				+
// 			</button>

// 			<button
// 				className="btn"
// 				onClick={() => {
// 					dispatch({ type: "decrement" });
// 				}}>
// 				-
// 			</button>
// 		</div>
// 	);
// };

// const ACTION2 = {
// 	ADD_TODO: "add_todo",

// };
// const todoReducer = (todos, action) => {
// 	switch (action.type) {
// 		case ACTION2.ADD_TODO:
// 			return [...todos, newTodo(action.payload.uname)];
// 	}
// };

// const newTodo = (uname) => {
// 	return { id: Date.now(), uname: uname, complete: false };
// };

// export const Todos = () => {
// 	const [todos, dispatch] = useReducer(todoReducer, []);
// 	const [uname, setUname] = useState("");

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		dispatch({ type: ACTION2.ADD_TODO, payload: { uname: uname } });
// 		setUname("");
// 	};
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				value={uname}
// 				onChange={(e) => setUname(e.target.value)}
// 			/>
// 		</form>
// 	);
// };

// complex use of useReducer

// const firstValues = [
// 	{
// 		id: Date.now(),
// 		myName: "Chidinma",
// 		email: "myMail@gamil.com",
// 	},
// ];

// const personData = {
// 	myName: "",
// 	email: "",
// };

// const reduceContact = (state, action) => {
// 	switch (action.type) {
// 		case "add":
// 			return [...state, action.payload];
// 		case "delete":
// 			return state.filter((contact) => {
// 				return contact.id !== action.payload.id;
// 			});
// 	}
// };

// export const AnotherUseReducerEg = () => {
// 	const [state, dispatch] = useReducer(reduceContact, firstValues);

// 	const [person, setPerson] = useState(personData);

// 	const handleChange = (e) => {
// 		let name = e.target.name;
// 		let value = e.target.value;

// 		setPerson({ ...person, [name]: value });
// 	};

// 	const addContact = (e) => {
// 		e.preventDefault();

// 		const contact = {
// 			id: Date.now(),
// 			myName: person.myName,
// 			email: person.email,
// 			// the code below would have worked if I had stored name and email states separately
// 			// myName,
// 			// email,
// 			// or
// 		};
// 		setPerson({ myName: "", email: "" });
// 		// or
// 		// setPerson({ ...personData, person: "" });
// 		dispatch({ type: "add", payload: contact });
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={addContact}>
// 				{/* <label htmlFor="">Name:</label>
// 			<br /> */}
// 				<div>
// 					<input
// 						type="text"
// 						placeholder="Name"
// 						name="myName"
// 						value={person.myName}
// 						onChange={handleChange}
// 					/>
// 				</div>

// 				{/* <label htmlFor="">Email:</label>
// 			<br /> */}
// 				<div style={{ marginTop: "10px" }}>
// 					<input
// 						type="text"
// 						placeholder="Email"
// 						name="email"
// 						value={person.email}
// 						onChange={handleChange}
// 					/>
// 				</div>

// 				<div>
// 					<button className="btn">Add Contact</button>
// 				</div>
// 			</form>

// 			<ul style={{ marginTop: "30px" }}>
// 				{state.map((contact) => {
// 					return (
// 						<li key={contact.id} style={{ marginBottom: "40px" }}>
// 							<h3>{contact.myName}</h3>
// 							<p style={{ marginBottom: "0px" }}>{contact.email}</p>
// 							<button
// 								className="btn"
// 								style={{ marginTop: "0px" }}
// 								onClick={() =>
// 									dispatch({ type: "delete", payload: { id: contact.id } })
// 								}>
// 								delete
// 							</button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// };

const firstValues = [
	{
		myName: "Chidi",
		email: "chidi@gmail.com",
	},
];

const reduceContact = (state, action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "delete":
			return state.filter((contact) => {
				return contact.id !== action.payload.id;
			});
	}
};

export const AnotherUseReducerEg = () => {
	const [state, dispatch] = useReducer(reduceContact, firstValues);

	const personData = {
		myName: "",
		email: "",
	};
	const [person, setPerson] = useState(personData);

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setPerson({ ...person, [name]: value });
	};

	const addContact = (e) => {
		e.preventDefault();

		let contact = {
			id: Date.now(),
			myName: person.myName,
			email: person.email,
		};

		setPerson({ ...personData, person: "" });
		dispatch({ type: "add", payload: contact });
	};

	return (
		<div>
			<form onSubmit={addContact}>
				<div>
					<input
						type="text"
						placeholder="Name"
						name="myName"
						value={person.myName}
						onChange={handleChange}
					/>
				</div>

				<div style={{ marginTop: "10px" }}>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={person.email}
						onChange={handleChange}
					/>
				</div>

				<div>
					<button className="btn">Add Contact</button>
				</div>
			</form>

			<ul>
				{state.map((contact) => {
					return (
						<li key={contact.id} style={{ marginTop: "40px" }}>
							<h3>{contact.myName}</h3>
							<p>{contact.email}</p>
							<button
								className="btn"
								onClick={() =>
									dispatch({ type: "delete", payload: { id: contact.id } })
								}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
