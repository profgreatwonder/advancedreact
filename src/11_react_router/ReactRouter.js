import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

```
npm install react-router-dom 
```;

// pages
import Home from "./Home";
import Navbar from "./Navbar";
import Counter from "./Counter";
import Diary from "./Diary";
import Person from "./Person";
import Todo from "./Todo";

const ReactRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/Counter">
					<Counter />
				</Route>
				<Route path="/diary">
					<Diary />
				</Route>
				<Route path="/todo">
					<Todo />
				</Route>
				<Route path="/person/:id" children={<Person />}></Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default ReactRouter;
