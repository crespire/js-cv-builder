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
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div className="information">
        <div className="information-name">
          <input type='text' name='name' placeholder='Name' id='name'></input>
        </div>
        <div className='information-details'>
          <input type='text' name='location' placeholder='Location' id='location'></input>
          <input type='email' name='email' placeholder='your@email.com' id='email'></input>
          <input type='tel' name='phone' placeholder='555-555-5555' id='phone'></input>
          <input type='url' name='website' placeholder='https://example.com/' id='website'></input>
        </div>
      </div>
    );
  };
}

export default InfoContainer;