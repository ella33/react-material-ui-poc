import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import SbyLogo from './logo';

const StyledFooter = styled(Box)({
  color: '#9B9C9C',
  '& img': {
    opacity: .18,
  },
});

const SbyFooter = () => (
  <StyledFooter my={2} mx={4}>
    <Grid container alignItems="center" justify="space-between">
      <SbyLogo />
      <span>&copy; 2020 Lorm Ipsum Inc.</span>
    </Grid>
  </StyledFooter>
);

export default SbyFooter;