import React, { Component } from 'react';

class EditListItem extends Component {
  render() {
    const { place, date_end, date_start, title, description }= this.props;

    return (
      <div>
        <h3>{place}</h3>
        <sub>{date_start} - {date_end}</sub>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    );
  }
}

export default EditListItem;