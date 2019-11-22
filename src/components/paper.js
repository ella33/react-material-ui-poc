import React from 'react';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  flex: 1,
  margin: theme.spacing(2)
}));

const SbyPaper = ({ children }) => (
  <StyledPaper square={true}>
    {children}
  </StyledPaper>
);

export default SbyPaper;