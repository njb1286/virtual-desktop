import React, { Component } from 'react';
import Items from './desktop/items';
import Program from './program';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <img src="https://unsplash.it/1920/1200" alt="" className="bg-img" />

        <Program />

        <Items />
      </div>
    );
  }
}
