import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SbyButton from 'components/button';

const SbyHeader = ({ user }) => (
  <AppBar position="fixed" color="inherit">
    <Toolbar>
      <SbyButton color="primary">Login</SbyButton>
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
