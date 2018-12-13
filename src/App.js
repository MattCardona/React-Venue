import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header.js';
import Featured from './components/featured/Featured.js';
import VenueInfo from './components/venueInfo/index.js';
import Highlights from './components/highlights/index.js';
import Pricing from './components/pricing/index.js';
import Location from './components/location/index.js';
import Footer from './components/header_footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" }}>
        <Header />

        <Element name="countdown">
          <Featured />  
        </Element>
        
        <Element name="venueinfo">
          <VenueInfo />
        </Element>
        
        <Element name="highlights">
          <Highlights />
        </Element>
        
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
