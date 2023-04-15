// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import colorReducer from "./features/colortheme";

export const store = configureStore({
	reducer: {
		user: userReducer,
		theme: colorReducer,
	},
});
