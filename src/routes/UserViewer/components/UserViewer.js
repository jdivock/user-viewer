import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserViewer.scss';
import UserNav from './UserNav';
import UserEditor from './UserEditor';

export class UserViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserIdx: null,
    };

    this.setSelectedUser = this.setSelectedUser.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  setSelectedUser(id, cb = () => {}) {
    this.setState({
      selectedUserIdx: this.props.users.findIndex(user => user.id === id),
    }, cb());
  }

  render() {
    const {
      props: {
        users,
        deleteUser,
        createUser,
        updateUser,
      },
      state: {
        selectedUserIdx,
      },
    } = this;

    return (
      <div className='user-viewer'>
        <UserNav
          users={users}
          setSelectedUser={this.setSelectedUser}
          selectedUserIdx={selectedUserIdx}
        />
        <UserEditor
          user={users[selectedUserIdx]}
          clearSelectedUser={cb => this.setSelectedUser(null, cb)}
          onDelete={deleteUser}
          onCreate={createUser}
          onUpdate={updateUser}
        />
      </div>
    );
  }
}

UserViewer.propTypes = {
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
};

export default UserViewer;
