import React, { Component } from "react"
import "./App.css"
import routes from "./routes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
	routerView = routes => {
		var result = null
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={routes.exact}
						component={route.component}
					/>
				)
			})
		}
		return result
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>{this.routerView(routes)}</Switch>
				</div>
			</Router>
		)
	}
}

export default App
