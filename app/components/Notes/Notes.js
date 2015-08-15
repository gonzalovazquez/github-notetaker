var React = require('react');
var NoteList = require('./NotesList');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
        <div>
          <h3> Notes for {this.props.username} </h3>
          <NoteList notes={this.props.notes} />
        </div>
    )
  }
});

module.exports = Notes;
