import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Beers extends Component {
	render() {
		const onClick = this.props.onClick;

		return (
			<ul>
				{this.props.beers.map((beer, i) => (

					<li key={i} className="beer-list">

						<div className="list-details" data-key={i}  onClick={onClick}>
							<a>
								<img src={beer.image_url} data-key={i}/>
								<p data-key={i}>{beer.name}</p>
							</a>
						</div>
						<div className="list-button">
							<button>Add To Cart</button>
						</div>
						
					</li>
					))}
			</ul>
		)
	}
}

Beers.propTypes = {
	beers: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
}

// <div class="list-button">
// </div>