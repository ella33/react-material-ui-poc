import { styled } from '@material-ui/core/styles';

import { SbyTable } from 'components/table';
import { SbyFormFieldGroup } from 'styles/form';

export const SitesTable = styled(SbyTable)({
	width: 'auto',
	'& .MuiTableCell-body': {
		width: 130,
	},
	'& .MuiTableCell-body:first-child': {
		textAlign: 'center',
		width: 70,
	},
});

export const ListingFormFieldGroup = styled(SbyFormFieldGroup)({
  '& .MuiOutlinedInput-root': {
    width: 180,
  },
});
