import React, { useState } from "react";
// short-circuit evaluation
// ternery opeator
//
const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return (
		<>
			<h2>short circuit evaluation</h2>
			{/* <h3>{firstValue}</h3>
            <h4>value: {secondValue}</h4> */}
			<h3>{text || "john doe"}</h3>
			{/* the above returns john doe cos useState is falsey. it will return the value found in the useState(i.e. default value) if the useState contains a value */}
			<button className="btn" onClick={() => setIsError(!isError)}>
				toggle error{" "}
			</button>
			{isError && <h4>Error...</h4>}

			{/* ternery operator */}
			{isError ? (
				<p>There is an error...</p>
			) : (
				<div>
					<h2>There is no error</h2>
				</div>
			)}
			{/* <h3>{text && <h4>hello world</h4>}</h3> */}
			{/* <h3>{!text && <h4>hello world</h4> }</h3> */}
		</>
	);
};

export default ShortCircuit;
