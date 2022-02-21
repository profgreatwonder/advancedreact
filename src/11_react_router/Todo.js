import React, { useState } from "react";

const Todolist = () => {
	const [taskName, setTaskName] = useState("");
	const [startTask, setStartTask] = useState("");
	const [endTask, setEndTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const submitTask = (e) => {
		e.preventDefault();
		// console.log(taskName, startTask, endTask);
		if (taskName && startTask && endTask) {
			// console.log("submit");
			const singleTask = {
				id: new Date().getTime().toString(),
				taskName,
				startTask,
				endTask,
			};
			// console.log(singleTask);
			setTaskList((prevTask) => {
				return [...prevTask, singleTask];
			});
		}
		// else {
		// 	console.log("empty value");
		// }

		setTaskName("");
		setStartTask("");
		setEndTask("");
	};
	return (
		<div>
			<form className="form" onSubmit={submitTask}>
				<div className="form-control">
					<label htmlFor="taskname">Task Name:</label>
					<input
						type="text"
						id="taskname"
						name="taskname"
						value={taskName}
						onChange={(e) => {
							setTaskName(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="starttask">Start Task By:</label>
					<input
						type="text"
						id="starttask"
						name="starttask"
						value={startTask}
						onChange={(e) => {
							setStartTask(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="endtask">End Task By:</label>
					<input
						type="text"
						id="endtask"
						name="endtask"
						value={endTask}
						onChange={(e) => {
							setEndTask(e.target.value);
						}}
					/>
				</div>
				<button className="btn">Add Task</button>
			</form>

			{taskList.map((singleTask) => {
				const { id, taskName, startTask, endTask } = singleTask;
				return (
					<div key={id} className="item">
						<div>
							<h4>Task Name</h4>
							<p>{taskName}</p>
						</div>
						<div>
							<h4>Start Task By</h4>
							<p>{startTask}</p>
						</div>
						<div>
							<h4>end Task by</h4>
							<p>{endTask}</p>
						</div>
					</div>
					// <div className="item">
					// 	<div>
					// 		<h4>Task Name</h4>
					// 		<h4>Start Task By</h4>
					// 		<h4>end Task by</h4>
					// 	</div>
					// 	<div>
					// 		<p>{taskName}</p>
					// 		<p>{startTask}</p>
					// 		<p>{endTask}</p>
					// 	</div>
					// </div>
				);
			})}
		</div>
	);
};

export default Todolist;

// const Todolist = () => {
// 	const [taskName, setTaskName] = useState("");
// 	const [startTaskBy, setStartTaskBy] = useState("");
// 	const [endTaskBy, setEndTaskBy] = useState("");
// 	const submitForm = (e) => {
// 		e.preventDefault();
// 	};
// 	return (
// 		<>
// 			<form className="form" onSubmit={submitForm}>
// 				<div className="form-control">
// 					<label htmlFor="task">Task Name:</label>
// 					<input
// 						type="text"
// 						id="task"
// 						name="task"
// 						value={taskName}
// 						onChange={(e) => {
// 							setTaskName(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div className="form-control">
// 					<label htmlFor="start">Start Task By:</label>
// 					<input
// 						type="text"
// 						id="start"
// 						name="start"
// 						value={startTaskBy}
// 						onChange={(e) => {
// 							setStartTaskBy(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div className="form-control">
// 					<label htmlFor="end">End Task By:</label>
// 					<input
// 						type="text"
// 						id="end"
// 						name="end"
// 						value={endTaskBy}
// 						onChange={(e) => {
// 							setEndTaskBy(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<button className="btn">Add Task</button>
// 			</form>
// 		</>
// 	);
// };
