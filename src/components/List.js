import React, { Component } from 'react';
import uniqid from 'uniqid';
import ListItem from './ListItem';
import EditListItem from './EditListItem';

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
    this.setState({
      listItems: this.state.listItems.concat([this.state.newItem]),
      newItem: {
        place: '',
        date_start: '',
        date_end: '',
        entry_title: '',
        entry_description: '',
        id: uniqid()
      }
    })
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
    const { place = 'Place', title = 'Title' } = this.props;
    const itemList = this.state.listItems;
    const editMode = this.state.editMode;
    const editID = this.state.editID;

    return (
      <div className="container"> 
        <div id="new_item" className="container">
          <input type="text" name="place" value={this.state.newItem.place} placeholder={place} onChange={this.handleInputChange}></input>
          <input type="date" name="date_start" value={this.state.newItem.date_start} onChange={this.handleInputChange}></input>
          <input type="date" name="date_end" value={this.state.newItem.date_end} onChange={this.handleInputChange}></input>
          <input type="text" name="entry_title" value={this.state.newItem.entry_title} placeholder={title} onChange={this.handleInputChange}></input>
          <textarea name="entry_description" value={this.state.newItem.entry_description} placeholder='Details...' onChange={this.handleInputChange}></textarea>
          <button onClick={this.handleNewItem}>Add</button>
        </div>
        <div className="container">
          {itemList.map((item) => {
            if (editMode && editID === item.id) {
              return <EditListItem key={item.id} place={item.place} date_end={item.date_end} date_start={item.date_start} title={item.entry_title} description={item.entry_description} />
            } else {
              return <ListItem key={item.id} place={item.place} date_end={item.date_end} date_start={item.date_start} title={item.entry_title} description={item.entry_description} />
            }            
          })}
        </div>
      </div>
    )
  }
};

export default List;