import React from 'react';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
	backgroundColor: '#F4F4F4',
  flex: 1,
  margin: `0 ${theme.spacing(4)}px`
}));

const SbyPaper = ({ children }) => (
  <StyledPaper square={true}>
    {children}
  </StyledPaper>
);

export default SbyPaper;