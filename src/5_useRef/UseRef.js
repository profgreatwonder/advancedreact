import React, { useEffect, useRef } from "react";

// in forms, we have the options of doing uncontrolled inputs, this is where useRef comes in. The most popular use is targeting the dom element essentially in a way that allows us to set up uncontrolled input (similar to how we will have it in JS).

// preserves value(just like useState)
// does not trigger re-render(this is where it is different from useState)
// target DOM nodes/elements

const UseRef = () => {
	const refContainer = useRef(null);
	const divContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};

	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();
	}); // since useRef doesn't trigger rerender, we can do without the empty dependency array
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input type="text" ref={refContainer} />
					<button type="submit">submit</button>
				</div>
			</form>

			<div ref={divContainer}>Hello World</div>
		</>
	);
};

export default UseRef;
