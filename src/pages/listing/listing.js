import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import SbyActionBar, { ActionGroup } from 'components/shared/actionBar';
import SbySubheader from 'components/shared/subheader';
import SbyPaper from 'components/paper';
import SbyButton from 'components/button';
import SbyInput from 'components/input';
import SbyDropdown from 'components/dropdown';
import SbyRadio from 'components/radio';
import { SbyTableHead, SbyTableBody, SbyTableRow, SbyTableCell } from 'components/table';
import SbyLabel from 'components/label';
import { SbyRadioGroup } from 'styles/form';

import { SitesTable, ListingFieldGroup, ListingArticleHierarchy } from './style';

const ArticleHierarchy = () => (
	<ListingArticleHierarchy>
		<SbyInput defaultValue="SB" />
		<SbyInput defaultValue="402-02-14-01-011" />
	</ListingArticleHierarchy>
);

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
	        <Grid item xs={6}>
						<div>
							<ListingFieldGroup
								control={<SbyDropdown required values={[{ value: 'single', label: '00-Single article' }]} />}
								label={<SbyLabel text="Article Category" />}
								labelPlacement="start"
							/>
						</div>

						<div>
							<ListingFieldGroup
								control={<SbyInput errorText="We could not validate this UPC. Please try a different number." defaultValue="42-02-17" required />}
								label={<SbyLabel text="Merchandise Category" />}
								labelPlacement="start"
							/>
						</div>

						<div>
							<ListingFieldGroup
								control={<SbyDropdown required inputProps={{placeholder:"Please select"}} values={[{ value: 'single', label: '00-Single article' }]} />}
								label={<SbyLabel text="Valuation Class" />}
								labelPlacement="start"
							/>
						</div>

						<div>
							<ListingFieldGroup
								control={<ArticleHierarchy />}
								label={<SbyLabel text="Article Hierarchy" required={false} />}
								labelPlacement="start"
							/>
						</div>

						<div>
							<ListingFieldGroup
								control={<RetailUnitOptions />}
								label={<SbyLabel text="Retail Selling Unit" />}
								labelPlacement="start"
							/>
						</div>
	        </Grid>
	        <Grid item xs={6}>
	          <ListingFieldGroup
		          control={<SbyInput defaultValue="7518" />}
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
		        			<SbyTableCell><SbyInput defaultValue="01" /></SbyTableCell>
		        			<SbyTableCell><SbyInput defaultValue="017" /></SbyTableCell>
		        			<SbyTableCell><SbyInput defaultValue="007" /></SbyTableCell>
		        		</SbyTableRow>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><SbyInput defaultValue="02" /></SbyTableCell>
		        			<SbyTableCell><SbyInput defaultValue="052" /></SbyTableCell>
		        			<SbyTableCell><SbyInput defaultValue="052" /></SbyTableCell>
		        		</SbyTableRow>
		        		<SbyTableRow>
		        			<SbyTableCell>ADG</SbyTableCell>
		        			<SbyTableCell><SbyInput /></SbyTableCell>
		        			<SbyTableCell><SbyInput /></SbyTableCell>
		        			<SbyTableCell><SbyInput /></SbyTableCell>
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
