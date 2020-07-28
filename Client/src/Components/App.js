import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "Pages/Home"
import Test from "Pages/Test"

import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timestamp: 0,
			username: ""
		};
	}
	componentDidMount() {
		const socket = socketIOClient(ENDPOINT);
		socket.on("FromAPI", data => {
		  this.setState({ timestamp: data });
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
	}
	render() {
		
		return (
			<Router>
			  <Switch>
				<Route exact path="/" ><Home App={this}/></Route>
				<Route path="/Test"><Test App={this}/></Route>
			  </Switch>
			</Router>
		);
	}
}

export default App;