// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: "" };

// export const colorThemeSlice = createSlice({
// 	name: "colorTheme",
// 	initialState,
// 	reducers: {
// 		changeColor: (state, action) => {
// 			state.value = action.payload;
// 		},
// 	},
// });

// export default colorThemeSlice.reducer;

// export const { changeColor } = colorThemeSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { colortheme: "" } };

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeColor: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default themeSlice.reducer;

export const { changeColor } = themeSlice.actions;
