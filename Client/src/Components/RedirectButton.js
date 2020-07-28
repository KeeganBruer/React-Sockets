import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./CSS/RedirectButton.css"
class RedirectButton extends Component {
	render() {
		return (
			<div className="Button"><Link to={this.props.location} className="Redirect">{this.props.value}</Link></div>
		);
	}
}
export default RedirectButton;