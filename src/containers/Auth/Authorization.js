import React, { Component } from "react"
import Banner from "../../assets/banner.png"
import "./Authorization.scss"
import SignUp from "../../components/Sign Up/SignUp"
import SignIn from "../../components/Sign In/SignIn"

export default class Authorization extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSignIn: true
		}
	}
	onChangePage = () => {
		this.setState({
			isSignIn: !this.state.isSignIn
		})
	}
	render() {
		return (
			<div className="Authorization__container">
				<div className="background"></div>
				<div className="content-form__wrapper">
					<img alt="logo" className="logo" src={Banner} />
					{this.state.isSignIn ? (
						<SignIn onChangePage={this.onChangePage} />
					) : (
						<SignUp onChangePage={this.onChangePage} />
					)}
					<div className="footer">Copyright © NamHuynh Dev.</div>
				</div>
			</div>
		)
	}
}
