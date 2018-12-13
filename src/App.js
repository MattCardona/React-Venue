import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header.js';
import Featured from './components/featured/Featured.js';
import VenueInfo from './components/venueInfo/index.js';
import Highlights from './components/highlights/index.js';
import Pricing from './components/pricing/index.js';
import Location from './components/location/index.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" }}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
      </div>
    );
  }
}

export default App;
