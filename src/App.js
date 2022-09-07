import './App.css';
import React, { Component } from 'react';
import InfoContainer from './components/Info';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = {}
  }

  render() {

    return (
      <div className="App container mx-auto p-12 flex flex-col justify-center align-center place-content-center">
        <InfoContainer />
        <List place='School' title='Degree' />
        <List place='Company' title='Job Title' />
      </div>
    );
  };
}

export default App;