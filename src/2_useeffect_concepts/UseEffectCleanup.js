import React, { useState, useEffect } from "react";

// Cleanup Function
// The example we want to use here is getting the size of the browser window at resize. we can do this by setting up an event listener on the window object.

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		//1. we want to add an eventlistener which collects 2 parameters, (i) the event we are listening for, (ii) a callback function(which will run each and everytime we run the event will take place)
		window.addEventListener("resize", checkSize);

		// cleanup function
		return () => {
			window.removeEventListener("resize", checkSize);
		};
		// });
	}, []); // either this(empty array dependency or the cleanup function works)

	// 2. The problem with this is that in the element > event Listeners in the browser window, we have a load of data every time we resize the window. This causes a memory leak. This is because the setSize(window.innerWidth); triggering the rerender bcos the moment we invoke setSize, we update the state value, size. The useState was preserving the values and was triggering the rerender. This is where the cleanup function comes into play (passing the empty array dependency works great too in this situation. won't work everytime though). The cleanup function is important for when we start dealing with components appearing and disappearing(meaning conditional rendering).

	console.log(size);
	return (
		<>
			<h2>useEffect cleanup</h2>
			<h3>window</h3>
			<h4>{size} px</h4>
		</>
	);
};

export default UseEffectCleanup;
