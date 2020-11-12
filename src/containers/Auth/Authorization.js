import React, { Component } from "react"
import Banner from "../../assets/banner.png"
import "./Authorization.scss"
import SignUp from "../../components/Sign Up/SignUp"
import SignIn from "../../components/Sign In/SignIn"

export default class Authorization extends Component {
	Constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Authorization__container">
				<div className="background"></div>
				<div className="content-form__wrapper">
					<img className="logo" src={Banner} />
					<SignIn />
				</div>
			</div>
		)
	}
}
