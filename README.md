# Installation
The whole setup is well tested in node >= 8.9.4. Make sure you're using correct version. If you need to switch between versions use NVM (https://github.com/creationix/nvm).

```
nvm use 8.9.4
npm install
```

# Development
To run development server:
```
npm start
```

# Code test
1. Please create a fork of this repository.
2. For all requests use https://punkapi.com/documentation/v2.
3. Homepage should render 10 beers via API and store them in redux store.
4. Implement `Load more` button in beers list to fetch more beers.
5. Display spinner while fetching data.
6. Each product in products list should have `add to cart` button, which appears on `:hover`.
7. `/checkout` page should render list of products in cart.
8. Add unit tests if possible.
