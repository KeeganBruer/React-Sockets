import React, { Component } from "react";
import {Link} from "react-router-dom";

class Test extends Component {
	render() {
		return (
			<div>
				<h3>Products</h3>
				<Link to="/" >Go to Home</Link>
				<time dateTime={this.props.timestamp}>{this.props.timestamp}</time>
			</div>
		);
	}
};
export default Test;