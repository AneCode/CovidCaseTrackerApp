import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Covid from './MyComponent/Covid';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Covid></Covid> 
      </div>
    )
  }
}

