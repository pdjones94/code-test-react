import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/App';
import { selectPage, fetchBeers } from './actions/apiActions';

// import routes from './'

import './index.css';



store.dispatch(selectPage('default'));
store.dispatch(fetchBeers(1)).then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
