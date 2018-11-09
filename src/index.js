import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Root from './containers/Root';
import { selectPage, /*fetchBeers,*/ fetchBeersIfNeeded } from './actions/apiActions';
import store from './store'

// import routes from './'

import './index.css';



// store.dispatch(selectPage(1));
// store
// 	.dispatch(fetchBeersIfNeeded(1))
// 	.then(() => console.log(store.getState())
// 	)



render(
  <Root />,
  document.getElementById('root')
);
