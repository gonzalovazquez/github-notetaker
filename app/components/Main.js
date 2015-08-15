var React = require('react');

// Creates a new React component
var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    )
  }
});

React.render(<Main />, document.getElementById('app'));
