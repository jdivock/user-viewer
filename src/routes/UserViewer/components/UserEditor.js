import React, {Component} from 'react';

export default class UserEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {user: props.user};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user});
  }

  render() {
    const {
      state: {
        user,
      },
      props: {
        onUpdate,
        onDelete,
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
          <legend>User Editor</legend>
          { user ?
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
                      value={user.firstName}
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
                      value={user.lastName}
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type='email'
                      value={user.email}
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
                      value={user.phone}
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
                      value={user.address1}
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
                      value={user.address2}
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
                <button onClick={() => onUpdate(user)}>Update</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </div>
            </fieldset> : null
          }

        </form>
      </div>
    );
  }
}
