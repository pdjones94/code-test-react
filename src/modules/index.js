import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import beers from '../reducers/beerReducers.js';
// import requests from '../reducers/apiReducers.js';

import {
	REQUEST_BEERS,
	RECEIVE_BEERS,
	SELECT_PAGE,
	ADD_TO_BASKET,
	REMOVE_FROM_BASKET
} from '../actions/apiActions'

const initialState = 1

function selectedPage(state=initialState, action) {
	console.log(state);
	switch(action.type) {
		case SELECT_PAGE:
			return state + 1;
		default:
			return state;
	}
}


function beers(
	state={
		isFetching: false,
		items: [],
	},
	action
) {
	switch(action.type) {
		case REQUEST_BEERS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_BEERS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.beers,
			})
		default:
			return state;
	}
}

function beersByPage(state = {}, action) {
	switch(action.type) {
		case RECEIVE_BEERS:
		case REQUEST_BEERS:
			return Object.assign({}, state, {
				[action.beer_page]: beers(state[action.beer_page], action)
			});
		default:
			return state;
	}
}

function basket(state=[], action) {
	// state.push(action.item);
	switch(action.type) {
		case ADD_TO_BASKET:
			console.log(`Current basket: ${state}; Adding: ${action.item}`);
			state.push(action.item);
			window.alert(`Added ${action.item.name} to basket`);
			return state;
		case REMOVE_FROM_BASKET:
			// console.log(state.basket);
			return state;
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	beersByPage,
	selectedPage,
	basket
});


export default rootReducer;