import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { itemID, toggleEdit, deleteItem, place, date_end, date_start, title, description }= this.props;

    return (
      <div className="container grid grid-cols-10 grid-rows-4 gap-4 border-solid border-black border p-6">
        <h3 className="col-start-1 row-start-1 col-span-2 row-span-1">{place}</h3>
        <small className="col-start-1 row-start-2 col-span-2 row-span-1">{date_start} - {date_end}</small>
        <h6 className="col-start-3 row-start-1 col-span-7 row-span-1">{title}</h6>
        <div className="col-start-3 row-start-2 col-span-7 row-span-3">{description}</div>
        <button className="bg-slate-200 col-start-10 row-start-1 col-span-1 row-span-2" onClick={() => { toggleEdit(itemID)} }>Edit</button>
        <button className="bg-slate-200 col-start-10 row-start-3 col-span-1 row-span-2" onClick={() => { deleteItem(itemID)} }>Delete</button>
      </div>
    );
  }
}

export default ListItem;