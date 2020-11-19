import * as types from "../utils/typeReducers"

export const SignIn = (email, password) => ({
	type: types.SIGN_IN,
	email,
	password
})

export const Register = dataRegister => ({
	type: types.REGISTER,
	dataRegister
})
