import React from 'react';
import Box from '@material-ui/core/box';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/outlinedInput';

import SbyActionBar, { ActionGroup } from 'components/shared/actionBar';
import SbySubheader from 'components/shared/subheader';
import SbyPaper from 'components/paper';
import SbyButton from 'components/button';
import SbyDropdown from 'components/dropdown';
import SbyRadio from 'components/radio';
import { SbyTableHead, SbyTableBody, SbyTableRow, SbyTableCell } from 'components/table';
import SbyLabel from 'components/label';
import { SbyRadioGroup } from 'styles/form';

import { SitesTable, ListingFormFieldGroup } from './style';

const RetailUnitOptions = () => (
	<SbyRadioGroup defaultValue="each" aria-label="gender" name="customized-radios">
		<SbyRadio label="Each" value="each" />
		<SbyRadio label="KG (Weighted)" value="kg" />
  </SbyRadioGroup>
);

const Listing = () => (
	<>
		<SbyActionBar>
			<div>90064445100384 - Emma Chees Asiago Mezzano Wedges 25X200G (Like Article: 487382) - RSC / Warehouse - Fresh</div>
			<ActionGroup>
				<SbyButton variant="outlined">Put on hold</SbyButton>
				<SbyButton variant="contained">Submit</SbyButton>
			</ActionGroup>
		</SbyActionBar>

		<SbySubheader>BASIC DATA</SbySubheader>

		<SbyPaper>
			<Box m={4}>
				<Grid container spacing={3} justify="center">
	        <Grid item xs>
	          <ListingFormFieldGroup
		          control={<SbyDropdown required={true} values={[{ value: 'single', label: '00-Single article' }]} />}
              label={<SbyLabel text="Article Category" />}
		          labelPlacement="start"
            />
		        <ListingFormFieldGroup
		          control={<OutlinedInput error defaultValue="42-02-17" required={true} />}
              label={<SbyLabel text="Merchandise Category" />}
		          labelPlacement="start"
            />
		        <ListingFormFieldGroup
		          control={<SbyDropdown required={true} inputProps={{placeholder:"Please select"}} values={[{ value: 'single', label: '00-Single article' }]} />}
              label={<SbyLabel text="Article Category" />}
		          labelPlacement="start"
		          required={true}
              />
		        <ListingFormFieldGroup
		          control={<RetailUnitOptions />}
              label={<SbyLabel text="Retail Selling Unit" />}
		          labelPlacement="start"
              />
	        </Grid>
	        <Grid item xs>
	          <ListingFormFieldGroup
		          control={<OutlinedInput defaultValue="7518" />}
              label={<SbyLabel text="Category Merchant Number" />}
		          labelPlacement="start"
		        />
		        <SitesTable size="small">
		        	<SbyTableHead>
		        		<SbyTableRow>
		        			<SbyTableCell></SbyTableCell>
		        			<SbyTableCell>Site group</SbyTableCell>
		        			<SbyTableCell>Profit center</SbyTableCell>
		        			<SbyTableCell>Department</SbyTableCell>
		        		</SbyTableRow>
		        	</SbyTableHead>
		        	<SbyTableBody>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="01" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="017" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="007" /></SbyTableCell>
		        		</SbyTableRow>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="02" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="052" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput defaultValue="052" /></SbyTableCell>
		        		</SbyTableRow>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        		</SbyTableRow>
		        	</SbyTableBody>
		        </SitesTable>
	        </Grid>
	      </Grid>
      </Box>
		</SbyPaper>
	</>
);

export default Listing;
