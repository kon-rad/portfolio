import styled from 'styled-components';
import {Flex, Div} from 'theme/grid';
import {blue, yellow, red} from 'theme/variables';
import {NavLink} from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 1em;
	top: 1.8em;
`;

export const NavItem = styled(NavLink)`
	margin-right: 30px;
	font-size: 1.5em;
	cursor: pointer;
	color: ${blue};
	position: relative;

	&:hover {
		color: ${yellow};
		&:after {
			content: ' ';
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			background-color: ${red};
			z-index: -1;
			transform: scale(1.3, 1.5);
		}
	}
`;