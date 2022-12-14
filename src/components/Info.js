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
      <div className="flex place-content-evenly p-6 print:p-0">
        <div>
          <input className="text-3xl border border-slate-200 border-solid" type='text' name='name' placeholder='Name' id='name' onChange={this.handleInputChange}></input>
        </div>
        <div className='grid grid-cols-2 gap-4 place-content-center print:place-content-start'>
          <input type='text' name='location' className="border border-slate-200 border-solid" placeholder='Location' id='location' onChange={this.handleInputChange}></input>
          <input type='email' name='email' className="border border-slate-200 border-solid" placeholder='your@email.com' id='email' onChange={this.handleInputChange}></input>
          <input type='tel' name='phone' className="border border-slate-200 border-solid" placeholder='555-555-5555' id='phone' onChange={this.handleInputChange}></input>
          <input type='url' name='website' className="border border-slate-200 border-solid" placeholder='https://example.com/' id='website' onChange={this.handleInputChange}></input>
        </div>
      </div>
    );
  };
}

export default InfoContainer;