import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

export default class Checkout extends React.Component {
	render() {
		console.log(store.getState());
		return (
			<div>
			  <div>
			    <h1>Checkout page</h1>
			  </div>

			  <h2>Basket</h2>
			  <ul>
					{store.getState().basket.map((item, i) => (
			  		<li key={i}>
		  				<p className="basket-item">{item.name}</p>
			  		</li>
		  		))}
			  </ul>
		  </div>
	  )
	}
	
}

Checkout.propTypes = {
	basket: PropTypes.array
}

// {this.props.map((item, i) => (
// 			  		<li key={i}>
// 			  			<div>
// 			  				<p className="basket-item">{item}</p>
// 			  			</div>
// 			  		</li>
// 		  		))}