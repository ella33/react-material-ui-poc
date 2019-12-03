import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
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

const UserToolbar = styled(Grid)({
  alignItems: 'center',
  display: 'flex',
});

const SbyHeader = ({ user }) => (
  <AppBar position="sticky" color="inherit">
    <Toolbar>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Link to="/"><img src="logo.png" alt="sobeys" /></Link>
        <UserToolbar item>
          <Typography mr={1}>{`Welcome, ${user.name}`}</Typography>
          |
          <SignOut color="primary">
            <Typography>Sign Out</Typography>
          </SignOut>
        </UserToolbar>
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
