import React, { Component } from 'react';

class EditListItem extends Component {
  render() {
    const { place, title, itemID, handleEditInput, handleEditSubmit, editItem }= this.props;

    return (
      <div className="container">
        <input type="text" name="place" value={editItem.place} placeholder={place} onChange={(event) => { handleEditInput(event, itemID) }}></input>
        <input type="date" name="date_start" value={editItem.date_start} onChange={(event) => { handleEditInput(event, itemID) }}></input>
        <input type="date" name="date_end" value={editItem.date_end} onChange={(event) => { handleEditInput(event, itemID) }}></input>
        <input type="text" name="entry_title" value={editItem.entry_title} placeholder={title} onChange={(event) => { handleEditInput(event, itemID) }}></input>
        <textarea name="entry_description" value={editItem.entry_description} placeholder='Details...' onChange={(event) => { handleEditInput(event, itemID) }}></textarea>
        <button onClick={(event) => { handleEditSubmit(event, itemID) }}>Update</button>
      </div>
    );
  }
}

export default EditListItem;