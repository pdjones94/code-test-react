export const createBeer = (beer) => {
	return {
		type: 'CREATE_BEER',
		beer: beer
	}
};