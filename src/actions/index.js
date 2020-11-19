import * as types from "../utils/typeReducers"

export const SignIn = (username, password) => ({
	type: types.SIGN_IN,
	username,
	password
})
