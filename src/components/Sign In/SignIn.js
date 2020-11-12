import React, { Component } from "react"
import "./SignIn.scss"
import { TextField, Checkbox, Button } from "@material-ui/core"

export default class SignIn extends Component {
	emitEvent = () => {
		this.props.setSignUp()
	}

	render() {
		return (
			<div className="sign-in__container">
				<h1>Sign In</h1>
				<div className="input__wrapper">
					<TextField className="input" label="Username" variant="outlined" />
					<TextField className="input" label="Password" variant="outlined" />
					<span>
						<Checkbox color="primary" /> Remember me
					</span>
					<Button className="btn-sign-in" variant="contained" color="primary">
						Sign In
					</Button>
					<div className="link_wrapper">
						<div>Forgot password?</div>
						<div onClick={() => this.props.onChangePage()}>
							Don't have an account? Sign Up
						</div>
					</div>
				</div>
			</div>
		)
	}
}
