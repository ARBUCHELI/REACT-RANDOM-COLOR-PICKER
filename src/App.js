import React, { Component } from 'react';
import './App.css';


import Random from './components/Random.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Random />
        <h1 style={{marginTop: "4em", fontFamily: "Impact", color: "#50394c"}}>CREATED BY: ANDRES R. BUCHELI</h1>
        <h3 style={{fontFamily: "Arial", color: "#deeaee"}}>Bucheli Web Development © 2021</h3>
      </div>
    );
  }
}

export default App;