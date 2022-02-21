import React, { useState } from "react";

// Here we essentially want to learn to use numbers and how we can set up a functional update form. all this time, we have been using the value update form which means that where we have the set function that we get back from useState, we just call the function and pass in the new value(which sets our state equal to the new value).

// However, there is a method of passing in the function(this is important)
const UseStateCounterEg = () => {
	const [value, setValue] = useState(0);

	const reset = () => {
		setValue(0);
	};

	// here we want to work with complex counter where we will be woring with setTimeout(which takes 2 parameter, (i) a callback function which is going to run in a certain amount of time and (ii). the amount of time to delay)
	const complexIncrease = () => {
		setTimeout(() => {
			// here we call our setValue
			// setValue(value + 1);

			// the problem here[setValue(value + 1);] is that when you click multiple times, the counter only increases once. This is because every time it is clicked, it thinks that the state value is the old value(0, 1 or whatever the counter had been before).
			// Basically, the set functions(in this case, setValue) are asynchronous. So we need to get the previous value clicked before increasing the counter using the functional approach.
			// Instead of passing in that new value that we would want, we pass in that new function. what happens is that as a parameter it gets that old state value(prevState[conventional method] or preValue if you like) right before the update. The most important thing is that it gets the current value(prevState), which is the one right before the update not the one called 2secs ago(value).
			// this method can be used in all our previous examples(useStateEg, useStateArrays) but not necessarily but in this case, it is a must.
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};
	return (
		<>
			<section style={styleMargin}>
				<h3>Regular Counter</h3>
				<h1>{value}</h1>

				{/* we will use the inline method here */}
				<button className="btn" onClick={() => setValue(value - 1)}>
					decrease
				</button>

				{/* we will use the reference method here */}
				<button className="btn" onClick={reset}>
					reset
				</button>

				{/* we will use the inline method here */}
				<button className="btn" onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>

			<section style={styleMargin}>
				<h3>More Complex Counter</h3>
				<h1>{value}</h1>
				<button className="btn" onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	);
};

const styleMargin = {
	margin: "4rem 0",
};

export default UseStateCounterEg;
