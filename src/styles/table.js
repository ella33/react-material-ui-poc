import colors from './colors';

export const tableHead = {
	root: {
		background: colors.darkerPrimary,
	},
};

export const tableCell = {
  root: {
    padding: 10,
  },
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
    },
	},
};

export const tableSortLabel = {
  root: {
    '&.MuiTableSortLabel-active, &:hover': {
      color: 'inherit',
    },
  },
  icon: {
    transition: 'none',
  },
  iconDirectionDesc: {
    transform: 'none',
  },
  iconDirectionAsc: {
    transform: 'none',
  },
};
