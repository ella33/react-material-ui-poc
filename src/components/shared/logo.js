import React from 'react';
import { styled } from '@material-ui/core/styles';

const StyledLogo = styled('img')({
  width: 250,
});

const SbyLogo = () => (
  <StyledLogo src="logo.png" alt="Lorem ipsum footer logo" />
);

export default SbyLogo;
