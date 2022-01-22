import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Mainbox from './components/Mainbox';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mainbox />
      </div>
    );
  }
}

