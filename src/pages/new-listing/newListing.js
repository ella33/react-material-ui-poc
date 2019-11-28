import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import SbyActionBar from 'components/shared/actionBar';
import SbyInput from 'components/input';
import SbyPaper from 'components/paper';
import SbyLabel from 'components/label';
import SbyButton from 'components/button';

import { NewListingFieldGroup, NewListingFieldWithValidation } from './style';

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
          <NewListingFieldGroup
            control={<SbyToggleButtons value={0} exclusive items={['Grocery', 'Fresh']} />}
            label={<SbyLabel text="Article Type" />}
            labelPlacement="start"
          />
          <NewListingFieldGroup
            control={<SbyToggleButtons value={0} exclusive items={['RSC/Warehouse', 'Direct to Store']} />}
            label={<SbyLabel text="Source Type" />}
            labelPlacement="start"
          />
          <NewListingFieldGroup
            control={<SbyToggleButtons value={0} exclusive items={['Single Flavour', 'Multiple Flavours']} />}
            label={<SbyLabel text="Listing Type" />}
            labelPlacement="start"
          />

          <NewListingFieldWithValidation>
            <NewListingFieldGroup
              control={<SbyInput errorText="We could not validate this UPC. Please try a different number." required />}
              label={<SbyLabel text="UPC" />}
              labelPlacement="start"
              />
            <SbyButton variant="outlined">Validate</SbyButton>
            <Link href="#" underline="none">Search in GS1</Link>
          </NewListingFieldWithValidation>

          <NewListingFieldWithValidation>
            <NewListingFieldGroup
              control={<SbyInput errorText="We could not validate this UPC. Please try a different number." required />}
              label={<SbyLabel text="Like Article Number" required={false} />}
              labelPlacement="start"
            />
            <SbyButton variant="outlined">Validate</SbyButton>
            <Link href="#" underline="none">Search For Like Articles</Link>
          </NewListingFieldWithValidation>
        </Grid>
        <Grid container justify="center">
          <SbyButton variant="contained">Continue</SbyButton>
        </Grid>
      </Box>
    </SbyPaper>
  </>
);

export default NewListing;