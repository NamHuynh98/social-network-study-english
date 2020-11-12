import React, { Component } from "react"
import "./SignIn.scss"
import { TextField, Checkbox, Button } from "@material-ui/core"

export default class SignIn extends Component {
	Constructor(props) {
		super(props)
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
						<a>Forgot password?</a>
						<a>Don't have an account? Sign Up</a>
					</div>
					<div className="footer">Copyright © NamHuynh Dev.</div>
				</div>
			</div>
		)
	}
}
