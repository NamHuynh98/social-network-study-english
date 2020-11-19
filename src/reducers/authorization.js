import * as types from "../utils/typeReducers"

const initialState = {
	email: "",
	password: "",
	firstName: "",
	lastName: ""
}

const authorization = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGN_IN:
			state.email = action.email
			state.password = action.password
			return state
		case types.REGISTER:
			state.email = action.dataRegister.email
			state.password = action.dataRegister.password
			state.firstName = action.dataRegister.firstName
			state.lastName = action.dataRegister.lastName
			console.log(state)
			return state
		default:
			return state
	}
}

export default authorization
