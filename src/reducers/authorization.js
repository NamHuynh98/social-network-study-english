const initialState = {
	username: "",
	password: ""
}

export function reducer(state = initialState, action) {
	switch (action.type) {
		case "getData":
			return { ...state, oke: "oke" }
		default:
			return state
	}
}
