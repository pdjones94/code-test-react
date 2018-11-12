import React from 'react'
import { Provider } from 'react-redux'
import store, { history } from '../store'
import App from './App/'
import Checkout from './Checkout'
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


export default class Root extends React.Component {

	render() {
		console.log('State of basket: ',store.getState().basket);
		return (
			<div>
				<header>
					<Link to="/">Home</Link>
					<Link to="/checkout">Checkout</Link>
				</header>

				<main>
					<Route exact path="/" component={App} />
					<Route exact path="/checkout" component={Checkout} />
				</main>
			</div>
		)
	}
}


//     <header>
//       <Link to="/">Home</Link>
//       <Link to="/checkout">Checkout</Link>
//     </header>

//     <main>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/checkout" component={Checkout} />
//     </main>

// <Provider store={store}>
// 	<ConnectedRouter history={history}>
// 		<App />
// 	</ConnectedRouter>
// </Provider>