import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Beers extends Component {
	render() {
		return (
			<ul>
				{this.props.beers.map((beer, i) => (
					<li key={i}> {beer.name}</li>
					))}
			</ul>
		)
	}
}

Beers.propTypes = {
	beers: PropTypes.array.isRequired
}