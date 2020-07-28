import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./CSS/Home.css"

import RedirectButton from "Components/RedirectButton"

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.App.setState({username: event.target.value});
	}
	
	render() {
		return (
			<div>
				<h3>Current Username:
				<input type="text" value={this.props.App.state.username} onChange={this.handleChange} />
				</h3>
				<RedirectButton location="Test" value="Go To Time Display"/>
			</div>
		);
	}
};
export default Home;