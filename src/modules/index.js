import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import beers from '../reducers/beerReducers.js';
// import requests from '../reducers/apiReducers.js';

import {
	REQUEST_BEERS,
	RECEIVE_BEERS,
	SELECT_PAGE
} from '../actions/apiActions'

const initialState = 1

function selectedPage(state=initialState, action) {
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

const rootReducer = combineReducers({
	beersByPage,
	selectedPage
});


export default rootReducer;