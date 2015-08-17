import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component {
  handleSubmit() {
    var router = this.context.router;
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';
    // Instead of this since we cannot use  mixins on
    // on ES2015 we are going to pass it as a function
    // mixins: [Router.Navigation]
    router.transitionTo('profile', {username: username});
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary"> Search Github </button>
          </div>
        </form>
      </div>
    )
  }
};

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SearchGithub;
