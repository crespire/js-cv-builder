import React, { Component } from 'react';

class EditListItem extends Component {
  render() {
    const { place, title, itemID, handleEditInput, handleEditSubmit, editItem }= this.props;

    return (
      <div className="container print:hidden grid grid-cols-10 grid-rows-3 gap-4 bg-red-50 border-dashed border-slate-600 border p-6">
        <input type="text" name="place" className="bg-inherit col-span-2 col-start-1 row-start-1 row-span-1" value={editItem.place} placeholder={place} onChange={(event) => { handleEditInput(event) }}></input>
        <div className="bg-inherit col-start-1 row-start-2 row-span-1 col-span-2 text-center">
          <label htmlFor="date_start">Start:</label>
          <input type="date" name="date_start" className="bg-inherit" value={editItem.date_start} onChange={(event) => { handleEditInput(event) }}></input>
        </div>
        <div className="bg-inherit col-start-1 row-start-3 row-span-1 col-span-2 text-center">
          <label htmlFor="date_end">End:</label>
          <input type="date" name="date_end" className="bg-inherit" value={editItem.date_end} onChange={(event) => { handleEditInput(event) }}></input>
        </div>
        <input type="text" name="entry_title" className="bg-inherit col-span-7 col-start-3 row-start-1 row-span-1" value={editItem.entry_title} placeholder={title} onChange={(event) => { handleEditInput(event) }}></input>
        <textarea name="entry_description" className="bg-inherit col-span-7 col-start-3 row-start-2 row-span-2" value={editItem.entry_description} placeholder='Details...' onChange={(event) => { handleEditInput(event) }}></textarea>
        <button className="bg-slate-200 col-span-1 col-start-10 row-span-3 row-start-1" onClick={() => { handleEditSubmit(itemID) }}>Update</button>
      </div>
    );
  }
}

export default EditListItem;