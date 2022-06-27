import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Items from './desktop/items';
import Program from './program/program';
import * as ProgramHelpers from './program/helpers';
import {DropdownItem} from './program/helpers';
import { findDOMNode } from 'react-dom';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
        apps: [
            {
                name: "Notepad",
                pageName: "notepad",
                icon_url: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/notepad-icon.png",
                body: (
                  <div>
                    <textarea className='notepad-input' style={{
                      resize: "none"
                    }}>

                    </textarea>
                  </div>
                ),

                actions: (
                  <div>
                    <div info="File">
                      <div className='dropdown-wrapper'>
                        <div className='dropdown-title'>File</div>

                        <div className="dropdown-menu">

                          <DropdownItem name="Save" click={() => {}} />
                          <DropdownItem name="Save as" click={() => {}} />
                          <DropdownItem name="Clear" click={() => document.querySelector('.notepad-input').value = ""} />
                          <DropdownItem name="Close" click={() => document.querySelector('.close-program').click()} />

                        </div>
                      </div>
                    </div>

                    <div info="Font size container">

                      <div className="dropdown-wrapper">
                        <div className="dropdown-title">Size</div>

                        <div className="dropdown-menu">
                          {ProgramHelpers.mapRng([1, 30], e => <DropdownItem name={e} click={() => document.querySelector('.notepad-input').style.fontSize = `${e}em`}/>)}
                        </div>
                      </div>
                    </div>

                    <div info="Styles container">
                      <div className='dropdown-wrapper'>
                        <div className='dropdown-title'>Styles</div>

                        <div className="dropdown-menu">

                          <DropdownItem name={
                          <div style={{display: "flex", justifyContent: "space-evenly"}}>
                            <strong>Bold</strong>
                            <input type="checkbox" className='input-checkbox' />
                          </div>
                          } />

                          <DropdownItem name={
                          <div style={{display: "flex", justifyContent: "space-evenly"}}>
                            <ins>Italic</ins>
                            <input type="checkbox" className='input-checkbox' />
                          </div>
                          } />

                          <DropdownItem name={
                          <div style={{display: "flex", justifyContent: "space-evenly"}}>
                            <u>Underlined</u>
                            <input type="checkbox" className='input-checkbox' />
                          </div>
                          } />

                          <DropdownItem name={
                          <div style={{display: "flex", justifyContent: "space-evenly"}}>
                            <del>Strikethrough</del>
                            <input type="checkbox" className='input-checkbox' />
                          </div>
                          } />

                        </div>
                      </div>
                    </div>


                  </div>
                )
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
