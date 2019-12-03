import { styled } from '@material-ui/core/styles';

import { SbyFieldGroup } from 'styles/form';

export const NewListingFieldGroup = styled(SbyFieldGroup)({
  '& > *:first-child': {
    width: 255,
  },
});

export const NewListingFieldWithValidation= styled('div')({
  alignItems: 'baseline',
  display: 'grid',
  gridAutoColumns: 'auto',
  gridAutoFlow: 'column',
	gridColumnGap: 10,
});