import { configureStore, createSlice } from "@reduxjs/toolkit";

// // always put your global state in your redux store
// const initialState = { value: { username: "" } };

// // the userSlice takes in the name, initialState (an object), and the reducers - the function where you want to state the actions.
// we can alternatively have export in front of userSlice, then export default userSlice.reducer at the bottom
// export const userSlice = createSlice({
// const userSlice = createSlice({
// 	// name of the slice
// 	name: "user",
// 	// initialState: { value: { username: "" } },
// 	initialState,
// 	// reducers are functions that take in two parameters, the state and the action. the action is something we get to modify the state and it is going to return the new value of the state
// 	reducers: {
// 		login: (state, action) => {
// 			// action will take in a payload which will be the data we will be passing to the action. state.value is the new value which we are passing action.payload to
// 			state.value = action.payload;
// 		},

// 		logout: (state) => {
// 			// this sets the initial state back to its initial state
// 			state.value = initialState.value;
// 		},
// 	},
// });

// when we use export in front of the userSlice above, here, we can say:
// export default userSlice.reducer

// then,
// export const { login, logout } = userSlice.actions;

// when we have added "export default userSlice.reducer" above, in the new file, configureStore will now be:
// import userReducer from "filepath where it was stored"

// export const store = configureStore({
// 	reducer: {
// 		user: userReducer,
// 	},
// });

// export const store = configureStore({
// 	reducer: {
// 		user: userSlice.reducer,
// 	},
// });

const initialState = { value: { username: "" } };
const userSlice = createSlice({
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

export const { login, logout } = userSlice.actions;

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});
