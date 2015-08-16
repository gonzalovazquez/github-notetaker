import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root, state) => {
  // ES2015 -> Spread attributes
  // Takes properties from state and copies it to Root component properties
  React.render(<Root {...state}/>, document.getElementById('app'));
});

/* OLD ES5
Router.run(routes, function(Root) {
  React.render(<Root />, document.getElementById('app'));
});
*/
