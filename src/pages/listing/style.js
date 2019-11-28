import { styled } from '@material-ui/core/styles';

import { SbyTable } from 'components/table';
import { SbyFieldGroup } from 'styles/form';

export const SitesTable = styled(SbyTable)({
	width: 'auto',
	'& .MuiTableCell-body': {
		width: 130,
	},
	'& .MuiTableCell-body:first-child': {
		textAlign: 'center',
		width: 70,
	},
	'& .MuiOutlinedInput-notchedOutline': {
		borderStyle: 'dotted',
	},
});

export const ListingFieldGroup = styled(SbyFieldGroup)({
  '& .MuiInputBase-root': {
    width: 210,
  },
});

export const ListingArticleHierarchy = styled('div')({
	display: 'grid',
	gridTemplateColumns: '50px 153px',
	gridColumnGap: 7,
	'& .MuiInputBase-root': {
		width: 'inherit',
	},
});
