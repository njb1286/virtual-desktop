import React, { Component } from 'react';
import Items from './desktop/items';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Program from './program/program';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
        apps: [
            {
                name: "Notepad",
                pageName: "notepad",
                icon_url: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/notepad-icon.png"
            }
        ]
    }

    this.comparePage = this.comparePage.bind(this);
}

  comparePage(currentPage) {
    for (let i of this.state.apps) if (currentPage === i.pageName) return i;
  }

  render() {
    return (
      <div className='app'>
        <img src="https://unsplash.it/1920/1200" alt="" className="bg-img" />

        <Router>
        <Items apps={this.state.apps} />

          <Switch>
            <Route exact path="/:slug" render={(data) => <Program pageData={data} programData={this.comparePage(data.match.params.slug)} />} />
          </Switch>
          
        </Router>
      </div>
    );
  }
}
