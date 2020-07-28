import React, { Component } from "react";
import {Link} from "react-router-dom";

class Test extends Component {
	render() {
		return (
			<div>
				<h3>Username: {this.props.App.state.username}</h3>
				<Link to="/" >Go to Home</Link>
				<h1>
				Current Time: |
				<time dateTime={this.props.App.state.timestamp}>{this.props.App.state.timestamp}</time>
				|
				</h1>
			</div>
		);
	}
};
export default Test;