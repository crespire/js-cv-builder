import React, { Component } from 'react';
import uniqid from 'uniqid';

class List extends Component {
  constructor(props) {
    super (props);

    this.state = {
      editMode: false,
      editID: '',
      listItems: [],
      newItem: {
        place: '',
        date_start: '',
        date_end: '',
        entry_title: '',
        entry_description: '',
        id: uniqid()
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
  }

  handleNewItem() {
    // on click to add a new item.
    // we want to save the item into the state array
    // then reset the 'newItem' so that it is ready to receive new info
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let itemUpdate = this.state.newItem;
  
    this.setState({
      newItem: { ...itemUpdate, [name]: value}
    });
  }

  render() {
    return (
      <div className="container"> 
        <div className="container">
          <input type="text" name="place" placeholder='Place' onChange={this.handleInputChange}></input>
          <input type="date" name="date_start" onChange={this.handleInputChange}></input>
          <input type="date" name="date_end" onChange={this.handleInputChange}></input>
          <input type="text" name="entry_title" placeholder='Title' onChange={this.handleInputChange}></input>
          <textarea name="entry_description" placeholder='Details...' onChange={this.handleInputChange}></textarea>
          <button>Add</button>
        </div>

      </div>
    )
  }
};

export default List;