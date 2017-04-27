import React from 'react';

export default ({user}) => {
  return (
    <div className='user-editor'>
      <form className='pure-form pure-form-stacked'>
        <legend>User Editor</legend>
        { user ?
          <fieldset>
            <div>
              <div>
                <label>
                  First Name
                  <input value={user.firstName} />
                </label>

                <label>
                  Last Name
                  <input value={user.lastName} />
                </label>

                <label>
                  Email
                  <input type='email' value={user.email} />
                </label>

                <label>
                  Phone
                  <input value={user.phone} />
                </label>
              </div>

              <div>
                <label>
                  Address
                  <input value={user.address1} />
                </label>

                <label>
                  Address
                  <input value={user.address2} />
                </label>
              </div>
            </div>
          </fieldset> : null
        }
      </form>
    </div>
  );
};
