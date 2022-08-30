import './App.css';
import React, { Component } from 'react';
import InfoContainer from './components/Info';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = {}
  }

  render() {

    return (
    <div className="App">
      <InfoContainer />
    </div>
    );
  };
}

export default App;