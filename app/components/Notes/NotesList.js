import React from 'react';

class NoteList extends React.Component {
  render() {
    var notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}> {note} </li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
};
export default NodeList;
