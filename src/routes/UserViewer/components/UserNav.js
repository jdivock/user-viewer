import React from 'react';

export default ({ users, setSelectedUser, selectedUserIdx }) => (
  <nav className='user-nav pure-menu'>
    <ul className='pure-menu-list'>
      {
        users.map((user, idx) => (
          <li
            key={user.id}
            className={`pure-menu-item ${idx === selectedUserIdx ? 'pure-menu-selected' : ''}`}
          >
            <a
              className='pure-menu-link'
              role='menuitem'
              onClick={() => setSelectedUser(user.id)}
            >
              {user.firstName} {user.lastName}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);
