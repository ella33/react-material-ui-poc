import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import OutlinedInput from '@material-ui/core/outlinedInput';

import SbyActionBar from 'components/shared/actionBar';
import SbyPaper from 'components/paper';

import { NewListingFormFieldGroup } from './style';

const SbyToggleButtons = ({ items, ...rest }) => (
  <ToggleButtonGroup {...rest}>
    {items.map((item, index) => (
      <ToggleButton key={index} value={index}>{item}</ToggleButton>
    ))}
  </ToggleButtonGroup>
);

const NewListing = () => (
  <>
    <SbyActionBar>
			<div>REQUEST NEW LISTING: STEP 1 of 3</div>
		</SbyActionBar>

    <SbyPaper>
      <Box m={4}>
        <Grid container spacing={3} alignItems="flex-start" direction="column">
          <NewListingFormFieldGroup
            control={<SbyToggleButtons size="small" value={0} exclusive items={['Grocery', 'Fresh']} />}
            label="Article Type"
            labelPlacement="start"
            required={true}
          />
          <NewListingFormFieldGroup
            control={<SbyToggleButtons size="small" value={0} exclusive items={['RSC/Warehouse', 'Direct to Store']} />}
            label="Source Type"
            labelPlacement="start"
            required={true}
          />
          <NewListingFormFieldGroup
            control={<SbyToggleButtons size="small" value={0} exclusive items={['Single Flavour', 'Multiple Flavours']} />}
            label="Listing Type"
            labelPlacement="start"
            required={true}
          />
          <NewListingFormFieldGroup
            control={<OutlinedInput />}
            label="UPC"
            labelPlacement="start"
            required={true}
          />
          <NewListingFormFieldGroup
            control={<OutlinedInput />}
            label="Like Article Number"
            labelPlacement="start"
          />
        </Grid>
      </Box>
    </SbyPaper>
  </>
);

export default NewListing;