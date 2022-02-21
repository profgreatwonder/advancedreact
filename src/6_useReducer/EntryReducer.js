import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../data";
import { reducer } from "./reducer";

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
};

const EntryReducer = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newPeople = { id: new Date().getTime().toString(), name };
			dispatch({ type: "ADD_ITEM", payload: newPeople });
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};

	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};

	return (
		<>
			<h2>useReducer</h2>
			{state.isModalOpen && (
				<Modal closeModal={closeModal} modalContent={state.modalContent} />
			)}

			<form onSubmit={handleSubmit} className="form">
				<div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit">add</button>
			</form>

			{state.people.map((person) => {
				return (
					<div key={person.id} className="item">
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({ type: "REMOVE_ITEM", payload: person.id })
							}>
							remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default EntryReducer;

// Initial

// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../data";

// const EntryReducer = () => {
// 	const [name, setName] = useState("");
// 	const [people, setPeople] = useState(data);
// 	const [showModal, setShowModal] = useState(false);
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (name) {
// 			setShowModal(true);
// 			setPeople([...people, { id: new Date().getTime().toString(), name }]);
// 			setName("");
// 		} else {
// 			setShowModal(true);
// 		}
// 	};

// 	return (
// 		<>
// 			<h2>useReducer</h2>
// 			{showModal && <Modal />}
// 			<form onSubmit={handleSubmit} className="form">
// 				<div>
// 					<input
// 						type="text"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 				</div>
// 				<button type="submit">add</button>
// 			</form>

// 			{people.map((person) => {
// 				return (
// 					<div key={person.id}>
// 						<h4>{person.name}</h4>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// };

// export default EntryReducer;

// refactor 2

// const reducer = (state, action) => {
// 	// console.log(state, action);
// 	if (action.type === "ADD_ITEM") {
// 		const newPeople = [...state.people, action.payload];
// 		return {
// 			...state,
// 			people: newPeople,
// 			isModalOpen: true,
// 			modalContent: "item added",
// 		};
// 	}

// 	if (action.type === "NO_VALUE") {
// 		return {
// 			...state,
// 			isModalOpen: true,
// 			modalContent: "please enter a value",
// 		};
// 	}

// 	if (action.type === "CLOSE_MODAL") {
// 		return {
// 			...state,
// 			isModalOpen: false,
// 		};
// 	}

// 	if (action.type === "REMOVE_ITEM") {
// 		const newPeople = state.people.filter(
// 			(person) => person.id !== action.payload
// 		);
// 		return { ...state, people: newPeople };
// 	}
// 	// return state;
// 	// you could throw the error when something is wrong with the action
// 	throw new Error("no matching action type");
// };

// const defaultState = {
// 	people: [],
// 	isModalOpen: false,
// 	modalContent: "",
// };

// const EntryReducer = () => {
// 	const [name, setName] = useState("");
// 	const [state, dispatch] = useReducer(reducer, defaultState);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (name) {
// 			const newPeople = { id: new Date().getTime().toString(), name };
// 			dispatch({ type: "ADD_ITEM", payload: newPeople });
// 			setName("");
// 		} else {
// 			dispatch({ type: "NO_VALUE" });
// 		}
// 	};

// 	const closeModal = () => {
// 		dispatch({ type: "CLOSE_MODAL" });
// 	};

// 	return (
// 		<>
// 			<h2>useReducer</h2>
// 			{state.isModalOpen && (
// 				<Modal closeModal={closeModal} modalContent={state.modalContent} />
// 			)}
// 			<form onSubmit={handleSubmit} className="form">
// 				<div>
// 					<input
// 						type="text"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 				</div>
// 				<button type="submit">add</button>
// 			</form>

// 			{state.people.map((person) => {
// 				return (
// 					<div key={person.id} className="item">
// 						<h4>{person.name}</h4>
// 						<button
// 							onClick={() =>
// 								dispatch({ type: "REMOVE_ITEM", payload: person.id })
// 							}>
// 							remove
// 						</button>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// };

// export default EntryReducer;
