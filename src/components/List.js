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
      editItem: {
        place: '',
        date_start: '',
        date_end: '',
        entry_title: '',
        entry_description: '',
        id: uniqid()
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
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

  deleteItem(itemID) {
    const deleteIndex = this.state.listItems.findIndex((item) => item.id === itemID);
    let updatedItems = this.state.listItems
    updatedItems.splice(deleteIndex, 1);

    this.setState({
      listItems: updatedItems
    })
  }

  toggleEdit(itemID) {
    this.setState({
      editMode: true,
      editID: itemID,
      editItem: this.state.listItems.find((item) => { return item.id === itemID})
    })
  }

  handleEditInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let itemUpdate = this.state.editItem;
  
    this.setState({
      editItem: { ...itemUpdate, [name]: value}
    });
  }

  handleEditSubmit(itemID) {
    const updatedItem = this.state.editItem;
    let updatedState = this.state.listItems;
    const updateIndex = updatedState.findIndex((item) => item.id === itemID);
    updatedState.splice(updateIndex, 1, updatedItem);

    this.setState({
      listItems: updatedState,
      editItem: {
        place: '',
        date_start: '',
        date_end: '',
        entry_title: '',
        entry_description: '',
        id: ''
      },
      editMode: false,
      editID: ''
    })
  }

  render() {
    const { place = 'Place', title = 'Title' } = this.props;
    const itemList = this.state.listItems;
    const editItem = this.state.editItem;
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
              return <EditListItem key={item.id} place={place} title={title} itemID={item.id} handleEditInput={this.handleEditInput} handleEditSubmit={this.handleEditSubmit} editItem={editItem} />
            } else {
              return <ListItem key={item.id} itemID={item.id} toggleEdit={this.toggleEdit} deleteItem={this.deleteItem} place={item.place} date_end={item.date_end} date_start={item.date_start} title={item.entry_title} description={item.entry_description} />
            }            
          })}
        </div>
      </div>
    )
  }
};

export default List;