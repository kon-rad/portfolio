import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from 'containers/Home/Home';

export default (

	<BrowserRouter>
		<App>
			<Route exact path='/' component={Home} />
		</App>
	</BrowserRouter>

)

