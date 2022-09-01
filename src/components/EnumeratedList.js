import React, { Component } from 'react';
import uniqid from 'uniqid';

class EnumeratedList extends Component {
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
  }

  render() {
    return (
      <div className="container">
      </div>
    )
  }
};

export default EnumeratedList;