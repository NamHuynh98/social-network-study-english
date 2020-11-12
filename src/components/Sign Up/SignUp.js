import React, { Component } from "react"
import "./SignUp.scss"
import { TextField, Checkbox, Button } from "@material-ui/core"

export default class SignUp extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="sign-up__container">
				<h1>Sign Up</h1>
				<div className="input__wrapper">
					<div className="input-inline">
						<TextField
							className="input"
							label="First Name"
							variant="outlined"
							required
						/>
						<TextField
							className="input"
							label="Last Name"
							variant="outlined"
							required
						/>
					</div>

					<TextField
						className="input"
						label="Email"
						variant="outlined"
						required
					/>
					<TextField
						className="input"
						label="Password"
						variant="outlined"
						required
					/>

					<span>
						<Checkbox color="primary" /> Agree later with no regrets
					</span>
					<Button className="btn-sign-up" variant="contained" color="primary">
						Sign Up
					</Button>
					<div className="link_wrapper">
						<a>Already have an account? Sign in</a>
					</div>
					<div className="footer">Copyright © NamHuynh Dev.</div>
				</div>
			</div>
		)
	}
}
