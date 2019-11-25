import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Subheader = styled(Box)({
	color: '#fff',
});

const SbySubheader = ({ children }) => (
	<Subheader fontSize="h5.fontSize" mt={2} mb={1} mx={4}>
    {children}
  </Subheader>
);

export default SbySubheader;