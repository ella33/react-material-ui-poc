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
		          control={<SbyDropdown values={[{ value: 'single', label: '00-Single article' }]} />}
		          label="Article Category"
		          labelPlacement="start"
		          required={true}
		        />
		        <ListingFormFieldGroup
		          control={<OutlinedInput value="42-02-17" />}
		          label="Merchandise Category"
		          labelPlacement="start"
		          required={true}
		        />
		        <ListingFormFieldGroup
		          control={<SbyDropdown inputProps={{placeholder:"Please select"}} values={[{ value: 'single', label: '00-Single article' }]} />}
		          label="Valuation Class"
		          labelPlacement="start"
		          required={true}
		        />
		        <ListingFormFieldGroup
		          control={<RetailUnitOptions />}
		          label="Retail Selling Unit"
		          labelPlacement="start"
		          required={true}
		        />
	        </Grid>
	        <Grid item xs>
	          <ListingFormFieldGroup
		          control={<OutlinedInput value="7518" />}
		          label="Category Merchant Number"
		          labelPlacement="start"
		          required={true}
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
		        			<SbyTableCell><OutlinedInput value="01" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput value="017" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput value="007" /></SbyTableCell>
		        		</SbyTableRow>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><OutlinedInput value="02" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput value="052" /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput value="052" /></SbyTableCell>
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
