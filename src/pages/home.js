import React from 'react';
import Box from '@material-ui/core/Box';

const Home = (props) => {
  return (
    <Box>
    </Box>
  );
};

Home.defaultProps = {
  user: {
    name: 'John',
  },
};

export default React.memo(Home);
