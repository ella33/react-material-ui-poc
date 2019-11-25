import React from 'react';
import Box from '@material-ui/core/box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import OutlinedInput from '@material-ui/core/outlinedInput';
import { styled } from '@material-ui/core/styles';

import SbyActionBar, { ActionGroup } from '../components/shared/actionBar';
import SbySubheader from '../components/shared/subheader';
import SbyPaper from '../components/paper';
import SbyButton from '../components/button';
import SbyDropdown from '../components/dropdown';
import SbyRadio from '../components/radio';
import { SbyTable, SbyTableHead, SbyTableBody, SbyTableRow, SbyTableCell } from '../components/table';

const FormFieldGroup = styled(FormControlLabel)({
	marginBottom: '16px',
	'& > .MuiFormControlLabel-label': {
		width: '210px',
	}
});

const DenseRadioGroup = styled(RadioGroup)({
	flexDirection: 'row',
});

const RetailUnitOptions = () => (
	<DenseRadioGroup defaultValue="each" aria-label="gender" name="customized-radios">
		<SbyRadio label="Each" value="each" />
		<SbyRadio label="KG (Weighted)" value="kg" />
  </DenseRadioGroup>
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
				<Grid container spacing={3}>
	        <Grid item xs>
	          <FormFieldGroup
		          control={<SbyDropdown values={[{ value: 'single', label: '00-Single article' }]} />}
		          label="Article Category"
		          labelPlacement="start"
		        />
		        <FormFieldGroup
		          control={<OutlinedInput value="42-02-17" />}
		          label="Merchandise Category"
		          labelPlacement="start"
		        />
		        <FormFieldGroup
		          control={<SbyDropdown inputProps={{placeholder:"Please select"}} values={[{ value: 'single', label: '00-Single article' }]} />}
		          label="Valuation Class"
		          labelPlacement="start"
		        />
		        <FormFieldGroup
		          control={<RetailUnitOptions />}
		          label="Retail Selling Unit"
		          labelPlacement="start"
		        />
	        </Grid>
	        <Grid item xs>
	          <FormFieldGroup
		          control={<OutlinedInput value="7518" />}
		          label="Category Merchant Number"
		          labelPlacement="start"
		        />
		        <SbyTable size="small">
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
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        			<SbyTableCell><OutlinedInput /></SbyTableCell>
		        		</SbyTableRow>
		        	</SbyTableBody>
		        </SbyTable>
	        </Grid>
	      </Grid>
      </Box>
		</SbyPaper>
	</>
);

export default Listing;