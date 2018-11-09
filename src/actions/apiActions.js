import fetch from 'cross-fetch';

export const REQUEST_BEERS = 'REQUEST_BEERS';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const SELECT_PAGE = 'SELECT_PAGE';

export function requestBeers(beer_page) {
	console.log(beer_page);
	return {
		type: REQUEST_BEERS,
		beer_page
	}
}


export function receiveBeers(beer_page, json, state) {
	const newBeers = json.map(child => child);
	console.log('New beers: ', newBeers);
	return {
		type: RECEIVE_BEERS,
		beer_page,
		beers: newBeers,
		receivedAt: Date.now()
	}
}


export function selectPage() {
	return {
		type: SELECT_PAGE
	}
}

export function fetchBeers(beer_page) {

	return function(dispatch, getState) {
		dispatch(requestBeers(beer_page));
		return fetch(`https://api.punkapi.com/v2/beers?page=${beer_page}&per_page=10`)
			.then(
				response => response.json(),
				console.log('Fetched beers'),
				error => console.log('An error occured',error)
			)
			.then(json =>
				dispatch(receiveBeers(beer_page, json, getState()))
			)
	}
}

export function shouldFetchBeers(state, beer_page) {
	const beers = state.beersByPage[0]
	// const numberOfBeers = state.beersByPage.length
	if (!beers) {
		console.log('Need to fetch beers')
		return true;
	} else {
		console.log(beers.length, state);
		console.log('No need to fetch beers')
		return false;
	}
}

export function fetchBeersIfNeeded(beer_page) {
	return (dispatch, getState) => {
		if (shouldFetchBeers(getState(), beer_page)) {
			return dispatch(fetchBeers(beer_page))
		}
		//  else {
		// 	return Promise.resolve();
		// }
	}
}