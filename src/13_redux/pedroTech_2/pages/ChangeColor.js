import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/colortheme";

const ChangeColor = () => {
	const [newColor, setNewColor] = useState("");
	// const color = useSelector((state) => state.color.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Change Color</h1>
			<input
				type="text"
				onChange={(e) => {
					setNewColor(e.target.value);
				}}
			/>
			<button
				className="btn"
				onClick={() => dispatch(changeColor({ colortheme: newColor }))}>
				Change Color
			</button>
		</div>
	);
};

export default ChangeColor;
