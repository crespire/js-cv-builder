import React, { Component } from 'react';

class EditListItem extends Component {
  render() {
    const { place, title, itemID, handleEditInput, handleEditSubmit, editItem }= this.props;

    return (
      <div className="container print:hidden grid grid-cols-10 grid-rows-3 gap-4 border-solid border-red-500 border p-6">
        <input type="text" name="place" className="border border-slate-200 border-solid col-span-2 col-start-1 row-start-1 row-span-1" value={editItem.place} placeholder={place} onChange={(event) => { handleEditInput(event) }}></input>
        <div className="  col-start-1 row-start-2 row-span-1 col-span-2 text-center">
          <label htmlFor="date_start">Start:</label>
          <input type="date" name="date_start" className="border border-slate-200 border-solid " value={editItem.date_start} onChange={(event) => { handleEditInput(event) }}></input>
        </div>
        <div className="  col-start-1 row-start-3 row-span-1 col-span-2 text-center">
          <label htmlFor="date_end">End:</label>
          <input type="date" name="date_end" className="border border-slate-200 border-solid " value={editItem.date_end} onChange={(event) => { handleEditInput(event) }}></input>
        </div>
        <input type="text" name="entry_title" className="border border-slate-200 border-solid col-span-7 col-start-3 row-start-1 row-span-1" value={editItem.entry_title} placeholder={title} onChange={(event) => { handleEditInput(event) }}></input>
        <textarea name="entry_description" className="border border-slate-200 border-solid col-span-7 col-start-3 row-start-2 row-span-2" value={editItem.entry_description} placeholder='Details...' onChange={(event) => { handleEditInput(event) }}></textarea>
        <button className="print:hidden bg-slate-200 col-span-1 col-start-10 row-span-3 row-start-1" onClick={() => { handleEditSubmit(itemID) }}>Update</button>
      </div>
    );
  }
}

export default EditListItem;