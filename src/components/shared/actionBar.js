import React from 'react';
import { styled } from '@material-ui/core/styles';

import colors from '../../styles/colors';

const ActionBar = styled('div')(({ theme }) => ({
	alignItems: 'center',
	backgroundColor: colors.darkerPrimary,
	borderBottom: `2px solid ${theme.palette.primary.main}`,
	display: 'flex',
	color: '#fff',
	height: `${theme.spacing(12)}px`,
	justifyContent: 'space-between',
	padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
}));

export const ActionGroup = styled('div')(({ theme }) => ({
	display: 'grid',
	gridAutoColumns: 'auto',
	gridAutoFlow: 'column',
	gridTemplateColumns: '1fr',
	gridColumnGap: `${theme.spacing(1)}px`,
}));

const SbyActionBar = ({ children }) => (
	<ActionBar>
		{children}
	</ActionBar>
);

export default SbyActionBar;