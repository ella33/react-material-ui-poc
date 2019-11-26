import colors from './colors';

export const tableHead = {
	root: {
		background: colors.darkerPrimary,
	},
};

export const tableCell = {
	head: {
		color: '#fff',
		textTransform: 'uppercase',
	},
	body: {
		border: '1px solid #DADADA',
	},
	sizeSmall: {
		padding: 3,
		'&:last-child': {
			paddingRight: 3,
		},
		'&.MuiTableCell-head': {
			padding: '10px 0',
		}
	},
};
