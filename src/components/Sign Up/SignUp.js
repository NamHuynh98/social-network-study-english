import React, { Component } from "react"
import "./SignUp.scss"
import { TextField, Checkbox, Button } from "@material-ui/core"
import { connect } from "react-redux"
import * as action from "../../actions/index"

class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		}
	}

	handleOnChange = e => {
		let name = e.target.name
		this.setState({
			[name]: e.target.value
		})
	}

	handleOnSignUp = e => {
		this.props.onRegister(this.state)
		this.props.onChangePage()
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
							name="firstName"
							variant="outlined"
							onChange={this.handleOnChange}
							required
						/>
						<TextField
							className="input"
							name="lastName"
							label="Last Name"
							variant="outlined"
							onChange={this.handleOnChange}
							required
						/>
					</div>

					<TextField
						className="input"
						label="Email"
						name="email"
						variant="outlined"
						onChange={this.handleOnChange}
						required
					/>
					<TextField
						className="input"
						label="Password"
						name="password"
						type="password"
						variant="outlined"
						onChange={this.handleOnChange}
						required
					/>

					<span>
						<Checkbox color="primary" /> Agree later with no regrets
					</span>
					<Button
						className="btn-sign-up"
						variant="contained"
						color="primary"
						onClick={this.handleOnSignUp}
					>
						Sign Up
					</Button>
					<div className="link_wrapper">
						<div
							onClick={() => {
								this.props.onChangePage()
							}}
						>
							Already have an account? Sign in
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onRegister: dataState => dispatch(action.Register(dataState))
	}
}
export default connect(null, mapDispatchToProps)(SignUp)
