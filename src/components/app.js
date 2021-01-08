import React, { Component } from 'react';

// import ViewPage from '../components/view-journal-entry'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./homepage"
import AddEntry from "./input-page"
import ViewEntry from "./view-journal-entry"


export default class App extends Component {
  render() {
    return (
      <div className='app'>

//        <ViewPage/>

        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-entry" component={AddEntry} />
              <Route path="/view-entries" component={ViewEntry} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
