import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

 

const TopBar = ({ title }) => {

  return (

    <AppBar position="static">

      <Toolbar>

        {/* Left side */}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          Your Name

        </Typography>

        

        {/* Right side */}

        <Typography variant="h6" component="div">

          {title}

        </Typography>

      </Toolbar>

    </AppBar>

  );

};

 

export default TopBar;