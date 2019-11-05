import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';

const SignOut = withStyles({
  label: {
    textTransform: 'none',
  },
})(Button);

const SbyHeader = ({ user }) => (
  <AppBar position="fixed" color="inherit">
    <Toolbar>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <img src="logo.png" alt="sobeys" />
        <Grid container item>
          <Typography>{`Welcome, ${user.name}`}</Typography>
          <SignOut color="primary">
            <Typography>Sign Out</Typography>
          </SignOut>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

SbyHeader.defaultProps = {
  user: {
    id: '123',
    name: 'John',
  },
};

export default React.memo(SbyHeader);
