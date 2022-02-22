import React, { useState, useEffect } from "react";
// 1. by default, useEffect runs after every re-render of components
// 2. second parameter

// the useeffect allows us to work with side-effects. Side-effect point to work outside the component,which includes: changing document title, signing up for subscription, fetching data, or setting up eventlistener, and stuffs along this line.
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	// useEffect takes in a callback function
	//1. useEffect(() => {
	//     console.log('call effect');
	//     // document.title = `${value} New Messages`

	//     // to call useEffect conditionally, i.e to render messages only when value = 0, we put the condition inside the useEffect cos hooks can't be placed inside conditions
	//     if (value >= 1) {
	//         document.title = `${value} New Message`
	//     }

	// });

	// 2. The second parameter can be passed as an array(or list) of dependencies. If we leave the array empty, it will only run on the initial run. In this case, there won't be an update to the title of the page.
	// If we want to run it each and every time we update the value (i.e. when we click on it), we can add "value" to the array.
	useEffect(() => {
		console.log("call effect");
		if (value >= 1) {
			document.title = `${value} New Message`;
		}
		// }, []); here we have an empty array
	}, [value]); // here we pass into the dependency array.

	// we can have as many useEffects as possible. e.g,
	useEffect(() => {
		console.log("hello world");
	}, []); // this will only run on the initial render(which can also happen when we reload). this is so because no value is passed into the dependency array. we see it re-render everytime if we pass in a value into the dependency array

	console.log("render component");
	return (
		<div>
			<h2>UseEffect Basics</h2>
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				click me
			</button>
		</div>
	);
};

export default UseEffectBasics;
