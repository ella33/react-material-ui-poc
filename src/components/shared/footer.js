import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const StyledFooter = styled(Box)({
  color: '#9B9C9C',
});

const SbyFooter = () => (
  <StyledFooter my={2} mx={4}>
    <Grid container alignItems="center" justify="space-between">
      <img src="footer-logo.png" alt="Sobeys footer logo" />
      <span>&copy; 2018 Sobeys Inc.</span>
    </Grid>
  </StyledFooter>
);

export default SbyFooter;