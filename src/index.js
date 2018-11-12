import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Root from './containers/Root';
import store, { history } from './store'

// import routes from './'

import './index.css';


render(
	<Provider store={store}>
		<ConnectedRouter history = {history}>
			<Root />
		</ConnectedRouter>
	</Provider>,
  document.getElementById('root')
);
