import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {userType} from './types';

export default class UserEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      createMode: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user});
  }

  render() {
    const {
      state: {
        user,
        createMode,
      },
      props: {
        clearSelectedUser,
        onUpdate,
        onDelete,
        onCreate,
      },
    } = this;

    return (
      <div className='user-editor'>
        <form
          className='pure-form pure-form-stacked'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <legend>
            User Editor
            <button
              className='pure-button button-secondary'
              onClick={() => {
                clearSelectedUser(
                  () => this.setState({user: {}}),
                );
              }}
            >
              Add User
            </button>
          </legend>
          { user || createMode ?
            <fieldset>
              <div>
                <div>
                  <label>
                    First Name
                    <input
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            firstName: target.value,
                          },
                        })}
                      value={user.firstName || ''}
                    />
                  </label>

                  <label>
                    Last Name
                    <input
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            lastName: target.value,
                          },
                        })}
                      value={user.lastName || ''}
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type='email'
                      value={user.email || ''}
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            email: target.value,
                          },
                        })}
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      value={user.phone || ''}
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            phone: target.value,
                          },
                        })}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Address
                    <input
                      value={user.address1 || ''}
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            address1: target.value,
                          },
                        })}
                    />
                  </label>

                  <label>
                    Address
                    <input
                      value={user.address2 || ''}
                      onChange={({target}) =>
                        this.setState({
                          user: {
                            ...user,
                            address2: target.value,
                          },
                        })}
                    />
                  </label>
                </div>
              </div>
              <div className='form-controls'>
                <span>
                  { !this.state.createMode ?
                    <button
                      className='pure-button pure-button-primary'
                      onClick={() => onUpdate(user)}
                    >
                      Update
                    </button> :
                    <button
                      className='pure-button pure-button-primary'
                      onClick={() => {
                        onCreate(user);
                        this.setState({
                          createMode: false,
                          user,
                        });
                      }}
                    >
                      Create
                    </button>
                  }
                  <button
                    className='pure-button'
                    onClick={() => {
                      this.setState({createMode: false, user: null});
                      clearSelectedUser();
                    }}
                  >
                    Cancel
                  </button>
                </span>
                {
                  !createMode &&
                  <button
                    className='pure-button button-error'
                    onClick={() => {
                      const tmpId = user.id;
                      clearSelectedUser(() => onDelete(tmpId));
                    }}
                  >
                    Delete
                  </button>
                }

              </div>
            </fieldset> : null
          }

        </form>
      </div>
    );
  }
}

UserEditor.propTypes = {
  clearSelectedUser: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  user: userType.isRequired,
};
