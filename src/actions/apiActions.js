import fetch from 'cross-fetch';

export const REQUEST_BEERS = 'REQUEST_BEERS';

export function requestBeers(beer_page) {
	return {
		type: REQUEST_BEERS,
		beer_page
	}
}

export const RECEIVE_BEERS = 'RECEIVE_BEERS';

export function receiveBeers(beer_page, json) {
	return {
		type: RECEIVE_BEERS,
		beer_page,
		beers: json.map(child => child),
		receivedAt: Date.now()
	}
}

export const SELECT_PAGE = 'SELECT_PAGE';

export function selectPage(beer_page) {
	return {
		type: SELECT_PAGE,
		beer_page
	}
}

export function fetchBeers(beer_page) {


	return function(dispatch) {
		dispatch(requestBeers(beer_page));

		return fetch(`https://api.punkapi.com/v2/beers?page=${beer_page}&per_page=10`)
			.then(
				response => response.json(),
				error => console.log('An error occured',error)
			)
			.then(json =>
				
				dispatch(receiveBeers(beer_page, json))
			)
	}
}

export function shouldFetchBeers(state, beer_page) {
	const beers = state.beersByPage[beer_page]
	if (!beers) {
		return true;
	} else {
		return false;
	}
}

export function fetchBeersIfNeeded(beer_page) {
	return (dispatch, getState) => {
		if (shouldFetchBeers(getState(), beer_page)) {
			return dispatch(fetchBeers(beer_page))
		} else {
			return Promise.resolve();
		}
	}
}