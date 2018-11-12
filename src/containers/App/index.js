import React from 'react';
import Home from '../Home';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectPage,
  fetchBeersIfNeeded,
  fetchBeers,
  addToBasket,
  removeFromBasket
} from '../../actions/apiActions'

import Beers from '../Beers/Beers'
import Picker from '../Home/Picker'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.increment = this.increment.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedPage } = this.props;
    dispatch(fetchBeersIfNeeded(selectedPage));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPage !== prevProps.selectedPage) {
      const { dispatch, selectedPage } = this.props;
      dispatch(fetchBeersIfNeeded(selectedPage));
    }
  }

  handleChange(nextPage) {
    console.log('Handling change:',nextPage);
    this.props.dispatch(selectPage());
    this.props.dispatch(fetchBeersIfNeeded(nextPage));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedPage } = this.props;
    dispatch(fetchBeersIfNeeded(selectedPage));
  }

  increment() {
    this.props.dispatch(selectPage())
  }

  addToCart(event) {
    // console.log(event.target.getAttribute('data-key'));
    console.log(event.target);
    const itemId = event.target.getAttribute('data-key');
    console.log('Adding beer to basket:',this.props.beers[itemId]);
    this.props.dispatch(addToBasket(this.props.basket, this.props.beers[itemId]));
  }

  render() {
    const { selectedPage, beers, isFetching } = this.props;
    return (

      <div>
        <Home />
        {!isFetching && beers.length === 0 && <h2>Empty.</h2>}
        {beers.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Beers 
              beers={beers}
              onClick={this.addToCart}
            />
          </div>
        )}
        <p>          
          {!isFetching && (
            // <LoadBeer 
            //   value={selectedPage}
            //   onClick={this.handleLoad}
            // />
            <button onClick={this.increment}>Load Stuff</button>
          )}
        </p>
        {isFetching && beers.length / selectedPage < 10 && <h2>Loading...</h2>}

      </div>
    )
  }

}

App.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  beers: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  basket: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedPage, beersByPage } = state;
  console.log('SelectedPage:',selectedPage)

  let allBeers = [];
  let fetching = true;
  if (beersByPage[selectedPage]) {
    for (let i=1;i<selectedPage+1;i++) {
      console.log(`Beer Page ${i}: ${beersByPage[i].items}`);
      allBeers = allBeers.concat(beersByPage[i].items);
    }    
    fetching = beersByPage[selectedPage].isFetching;
  }

  const basket = state.basket || [];

  console.log('BASKET:',state.basket)

  console.log('All Beers:',allBeers);

  const { isFetching, items:beers } = {
    isFetching: fetching,
    items: allBeers
  } 
  // || {
  //   isFetching: true,
  //   items: []
  // }

  return {
    selectedPage,
    beers,
    isFetching,
    basket
  }
}

export default connect(mapStateToProps)(App)

// const App = () => (
//   <div>
//     <header>
//       <Link to="/">Home</Link>
//       <Link to="/checkout">Checkout</Link>
//     </header>

//     <main>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/checkout" component={Checkout} />
//     </main>
//   </div>
// <Picker
        //   value={selectedPage}
        //   onChange={this.handleChange}
        //   options={[1,2]}
        // />
// );

// export default App;
