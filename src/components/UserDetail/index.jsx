import React from 'react';

import { Typography, Button } from '@mui/material';

 

const UserDetail = ({ user, onViewPhotosClick }) => {

  return (

    <div className="user-detail">

      <Typography variant="h4">User Detail</Typography>

      <Typography variant="body1">Name: {user.name}</Typography>

      <Typography variant="body1">Email: {user.email}</Typography>

      <Typography variant="body1">Address: {user.address}</Typography>

      {/* Other user details */}

      <Button variant="contained" onClick={onViewPhotosClick}>View Photos</Button>

    </div>

  );

};

 

export default UserDetail;