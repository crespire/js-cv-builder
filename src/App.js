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
      <div className="App container mx-auto max-w-7xl print:p-0 p-12 flex flex-col justify-center align-center place-content-center space-y-4">
        <InfoContainer />
        <List heading='Education' place='School' title='Degree' />
        <List heading='Work Experience' place='Company' title='Job Title' />
      </div>
    );
  };
}

export default App;