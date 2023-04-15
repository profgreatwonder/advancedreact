import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "", email: "", age: 0 } };

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},

		logout: (state) => {
			state.value = initialState.value;
		},
	},
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
