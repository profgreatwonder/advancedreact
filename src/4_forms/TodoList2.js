import React, { useState } from "react";

// todoList.js: basic but this todoList2.js is going to be refactored.

const TodoList2 = () => {
	// const [taskName, setTaskName] = useState("");
	// const [startTask, setStartTask] = useState("");
	// const [endTask, setEndTask] = useState("");
	const [task, setTask] = useState({
		taskName: "",
		startTask: "",
		endTask: "",
	});

	const [taskList, setTaskList] = useState([]);

	const targetField = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		// console.log(name, value);
		setTaskList({ ...task, [name]: value });
	};

	const addTask = (e) => {
		e.preventDefault();
		if (task.taskName && task.startTask && task.endTask) {
			const newTask = { ...task, id: new Date().getTime().toString() };
			setTaskList([...taskList, newTask]);
			setTask({ taskName: "", startTask: "", endTask: "" });
		}
	};

	return (
		<div>
			<form className="form" onSubmit={addTask}>
				<div className="form-control">
					<label htmlFor="taskname">Task Name:</label>
					<input
						type="text"
						id="taskname"
						name="taskname"
						// value={taskName}
						value={task.taskName}
						onChange={targetField}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="starttask">Start Task:</label>
					<input
						type="text"
						id="starttask"
						name="starttask"
						// value={startTask}
						value={task.startTask}
						onChange={targetField}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="endtask">End Task:</label>
					<input
						type="text"
						id="endtask"
						name="endtask"
						// value={endTask}
						value={task.endTask}
						onChange={targetField}
					/>
				</div>
				<button className="btn">Add Task</button>
			</form>

			{taskList.map((oneTask) => {
				const { id, taskName, startTask, endTask } = oneTask;
				return (
					// <table key={id}>
					// 	<thead>
					// 		<tr>Task Name</tr>
					// 		<tr>Start task by</tr>
					// 		<tr>end task by</tr>
					// 	</thead>

					// 	<tbody>
					// 		<tr>
					// 			<td>{taskName}</td>
					// 			<td>{startTask}</td>
					// 			<td>{endTask}</td>
					// 		</tr>
					// 	</tbody>
					// </table>
					<div className="item" key={id}>
						<div>
							<h4>Task Name</h4>
							<p>{taskName}</p>
						</div>
						<div>
							<h4>Start task by</h4>
							<p>{startTask}</p>
						</div>
						<div>
							<h4>end task by</h4>
							<p>{endTask}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList2;
