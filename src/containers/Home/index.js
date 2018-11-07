import React from 'react';

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <div className='button_container'>
    	<button className='button' onClick={props.onClick}>Load More</button>
    </div>
  </div>
);

export default Home;
