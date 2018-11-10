import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Beers extends Component {
	render() {
		return (
			<ul>
				{this.props.beers.map((beer, i) => (

					<li key={i}>
						<div class="list-details">
							<img src={beer.image_url}/>
							<a>{beer.name}</a>
						</div>
						<div class="list-button">
							<button>Add To Cart</button>
						</div>
					</li>
					))}
			</ul>
		)
	}
}

Beers.propTypes = {
	beers: PropTypes.array.isRequired
}