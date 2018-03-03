import React, { Component } from'react';
import {NavigationContainer, NavItem} from './NavigationBar.style';

class NavigatinBar extends Component {
	render() {
		return (
			<NavigationContainer>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/about-me">About Me</NavItem>
				<NavItem to="/resume">Resume</NavItem>
			</NavigationContainer>
		)
	}
}

export default NavigatinBar;