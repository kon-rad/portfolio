import { injectGlobal } from 'styled-components';
import { darkRed } from 'theme/variables'

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Maven+Pro');	
	h1 {
		color: darkRed;
	}
	body {
		font-family: 'Maven Pro', sans-serif;
		font-size: 24px;
	}
	h1,h2,h3 {
		font-weight:400;
	}
`