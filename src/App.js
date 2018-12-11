import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header.js';
import Featured from './components/featured/Featured.js';
import VenueInfo from './components/venueInfo/index.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'red'}}>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
