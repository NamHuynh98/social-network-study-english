import React, { Component } from "react"
import "./SignIn.scss"
import { TextField, Checkbox, Button } from "@material-ui/core"
import { connect } from "react-redux"
import * as action from "../../actions/index"

class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: ""
		}
	}

	emitEvent = () => {
		this.props.setSignUp()
	}

	render() {
		return (
			<div className="sign-in__container">
				<h1>Sign In</h1>
				<div className="input__wrapper">
					<TextField
						className="input"
						label="Email"
						variant="outlined"
						onChange={e => {
							this.setState({ email: e.target.value })
						}}
					/>
					<TextField
						className="input"
						label="Password"
						variant="outlined"
						type="password"
						autoComplete="current-password"
						onChange={e => {
							this.setState({ password: e.target.value })
						}}
					/>
					<span>
						<Checkbox color="primary" /> Remember me
					</span>
					<Button
						onClick={() =>
							this.props.onSignIn(this.state.email, this.state.password)
						}
						className="btn-sign-in"
						variant="contained"
						color="primary"
					>
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
const mapDispatchToProps = dispatch => {
	return {
		onSignIn: (email, password) => dispatch(action.SignIn(email, password))
	}
}

export default connect(null, mapDispatchToProps)(SignIn)
