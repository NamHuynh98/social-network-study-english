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
	changePage = () => {
		return this.state.isSignIn ? { marginLeft: "0%" } : { marginLeft: "-100%" }
	}

	render() {
		return (
			<div className="Authorization__container">
				<div className="background"></div>
				<div className="content-form__wrapper">
					<img alt="logo" className="logo" src={Banner} />
					<div className="inner">
						<div
							className="slide-page"
							style={
								this.state.isSignIn
									? { marginLeft: "0%" }
									: { marginLeft: "-100%" }
							}
						>
							<SignIn onChangePage={this.onChangePage} />
							<SignUp onChangePage={this.onChangePage} />
						</div>
					</div>
					<div className="footer">Copyright © NamHuynh Dev.</div>
				</div>
			</div>
		)
	}
}
