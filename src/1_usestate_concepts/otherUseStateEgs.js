import { useRef } from "react";
import { useState, Component } from "react";
import { data } from "../data";

export const PapaReactUseState = () => {
	const [count, setCount] = useState(0);

	console.log(count);

	const minusClick = () => {
		setCount(count - 1);
	};

	return (
		<>
			<h2>My Counter App</h2>
			<p>This counter reads: {count}</p>
			<button
				className="btn btn-primary"
				onClick={() => {
					setCount(count + 1);
				}}>
				+
			</button>
			<button className="btn btn-primary" onClick={() => minusClick()}>
				-
			</button>
		</>
	);
};

// writing the above code in a class based component
// export default class PRUseState extends Component {
export class PRUseState extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment = () => {
		// this.setState({
		// 	count: this.state.count + 1,
		// });
		//  this method keeps us from updating other parts of the code where count is used i.e we don't want it to update leaving behind another aspect of the code out of sync. we solve it by getting the previous code and updating it.
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	decrement = () => {
		// this.setState({
		// 	count: this.state.count - 1,
		// });

		this.setState((prevState) => ({
			count: prevState.count - 1,
		}));
	};

	render() {
		return (
			<>
				<h2>My Counter App</h2>
				<p>This counter reads: {this.state.count}</p>
				<button className="btn btn-primary" onClick={this.decrement}>
					+
				</button>
				<button className="btn btn-primary" onClick={this.increment}>
					-
				</button>
			</>
		);
	}
}

// export class ModelWrapper extends Component {
// 	state = {
// 		loginOpened: false,
// 		signupOpened: false,
// 	};

// 	openModal = (modalType) => () => {
// 		if (modalType === "login") {
// 			this.setState({
// 				loginOpened: true,
// 				signupOpened: false,
// 			});
// 		} else if (modalType === "signup") {
// 			this.setState({
// 				loginOpened: false,
// 				signupOpened: true,
// 			});
// 		}
// 	};
// 	closeModal = (modalType) => () => {
// 		if (modalType === "login") {
// 			this.setState({
// 				loginOpened: false,
// 			});
// 		} else if (modalType === "signup") {
// 			this.setState({
// 				signupOpened: false,
// 			});
// 		}
// 	};
// 	render() {
// 		const { loginOpened, signupOpened } = this.state;
// 		return (
// 			<>
// 				<div isopen={loginOpened} onRequestClose={this.closeModal("login")}>
// 					<h1>Login</h1>
// 					<button onClick={this.openModal("signup")}>Open Signup</button>
// 					<button onClick={this.closeModal("login")}>Close this modal</button>
// 				</div>
// 				<div isopen={signupOpened} onRequestClose={this.closeModal("signup")}>
// 					<h1>Sign Up</h1>
// 					<button onClick={this.openModal("login")}>Open Login</button>
// 					<button onClick={this.closeModal("signup")}>Close this modal</button>
// 				</div>
// 				<button onClick={this.openModal("login")}>Open Login</button>
// 				<button onClick={this.openModal("signup")}>Open Signup</button>
// 			</>
// 		);
// 	}
// }

// export const PedroUseState = () => {
// 	const [initValue, setInitValue] = useState("name");

// 	const handleChange = (e) => {
// 		let newValue = e.target.value;
// 		setInitValue(newValue);
// 	};
// 	return (
// 		<form>
// 			<input type="text" placeholder="hello" onChange={handleChange} />
// 			<p>{initValue}</p>
// 		</form>
// 	);
// };

export const PedroUseState = () => {
	const inputRef = useRef(null);

	const handleChange = () => {
		//clears out the input on click of the button
		inputRef.current.value = "";
	};
	return (
		<form>
			<input type="text" placeholder="hello" ref={inputRef} />
			<button className="btn" onClick={handleChange}>
				Update
			</button>
			{/* <p>{inputRef}</p> */}
		</form>
	);
};
