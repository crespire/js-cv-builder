import React, { Component } from 'react';

class InfoContainer extends Component {
  constructor(props) {
    super (props);

    this.state = {
      name: '',
      location: '',
      email: '',
      phone: '',
      website: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  };

  render() {

    return (
      <div className="flex place-content-between px-12 py-6">
        <div className="container place-content-center">
          <input className="text-3xl" type='text' name='name' placeholder='Name' id='name' onChange={this.handleInputChange}></input>
        </div>
        <div className='container grid grid-cols-2 gap-4 place-content-center'>
          <input type='text' name='location' placeholder='Location' id='location' onChange={this.handleInputChange}></input>
          <input type='email' name='email' placeholder='your@email.com' id='email' onChange={this.handleInputChange}></input>
          <input type='tel' name='phone' placeholder='555-555-5555' id='phone' onChange={this.handleInputChange}></input>
          <input type='url' name='website' placeholder='https://example.com/' id='website' onChange={this.handleInputChange}></input>
        </div>
      </div>
    );
  };
}

export default InfoContainer;