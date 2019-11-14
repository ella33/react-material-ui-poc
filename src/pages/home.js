import React from 'react';
import Box from '@material-ui/core/Box';
import SbyButton from 'components/button';

const Home = (props) => {
  return (
    <Box>
      <SbyButton variant="contained" size="xs">xs</SbyButton>
      <SbyButton variant="contained" size="sm">sm</SbyButton>
      <SbyButton variant="contained">normal</SbyButton>
      <SbyButton variant="contained" size="lg">lg</SbyButton>
      <SbyButton variant="contained">work on your next listing</SbyButton>
    </Box>

  );
};

Home.defaultProps = {
  user: {
    name: 'John',
  },
};

export default React.memo(Home);
