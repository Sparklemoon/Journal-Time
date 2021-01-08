import React, { Component } from 'react';
import ViewPage from '../components/view-journal-entry'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
       <ViewPage/>
      </div>
    );
  }
}
