import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


// For class based components remove everything from app.js except imports
// using es7 snippet 'rcc' we import react class based component 
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

