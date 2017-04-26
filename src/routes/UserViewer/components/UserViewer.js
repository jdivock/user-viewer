import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserViewer.scss';

export class UserViewer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h4>Welcome!</h4>
      </div>
    );
  }
}

UserViewer.propTypes = {
  getUsers     : PropTypes.func.isRequired,
};

export default UserViewer;
