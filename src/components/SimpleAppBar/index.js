import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

export default class SimpleAppBar extends React.Component {

  render () {
    return (
      <AppBar
        position="static"
        color="default"
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React PWA To-Do List
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}