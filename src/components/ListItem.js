import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { itemID, toggleEdit, deleteItem, place, date_end, date_start, title, description }= this.props;

    return (
      <div>
        <h3>{place}</h3>
        <sub>{date_start} - {date_end}</sub>
        <h6>{title}</h6>
        <p>{description}</p>
        <button onClick={() => { toggleEdit(itemID)} }>Edit</button>
        <button onClick={() => { deleteItem(itemID)} }>Delete</button>
      </div>
    );
  }
}

export default ListItem;