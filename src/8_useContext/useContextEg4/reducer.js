export const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	NEW_USER_INPUT: "updateUser",
};

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case ACTIONS.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case ACTIONS.NEW_USER_INPUT:
			return { ...state, username: action.payload };
	}
};
