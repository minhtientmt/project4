import React from 'react';

import { List, ListItem, ListItemText, Divider } from '@mui/material';

 

const UserList = ({ users }) => {
  const onUserClick = (userId) => {
      window.location.href = `/users/${userId}`
  }
  return (
    <div className="sidebar">

      <h2>User List</h2>

      <List component="nav" aria-label="user list">

        {users.map(user => (

          <div key={user.id}>

            <ListItem button onClick={() => onUserClick(user.id)}>

              <ListItemText primary={user.name} />

            </ListItem>

            <Divider />

          </div>

        ))}

      </List>

    </div>

  );

};

 

export default UserList;