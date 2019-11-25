import React from 'react';
import Box from '@material-ui/core/Box';
import ReplayIcon from '@material-ui/icons/Replay';

import SbyActionBar, { ActionGroup } from '../components/shared/actionBar';
import SbySubheader from '../components/shared/subheader';
import { SbyTable, SbyTableHead, SbyTableBody, SbyTableRow, SbyTableCell } from '../components/table';
import SbyPaper from '../components/paper';
import SbyButton from '../components/button';

const Home = ({ listings }) => {
  return (
    <>
      <SbyActionBar>
        <div>Hello, John!</div>
        <ActionGroup>
          <SbyButton variant="contained">Work on your next listing</SbyButton>
        </ActionGroup>
      </SbyActionBar>
      <SbySubheader>
        Your dashboard
      </SbySubheader>
      <SbyPaper>
        <Box m={4}>
          <SbyTable aria-label="Listings table">
            <SbyTableHead>
              <SbyTableRow>
                <SbyTableCell>Upc</SbyTableCell>
                <SbyTableCell>Description</SbyTableCell>
                <SbyTableCell>Cm#</SbyTableCell>
                <SbyTableCell>Time</SbyTableCell>
                <SbyTableCell>Status</SbyTableCell>
                <SbyTableCell>Reason</SbyTableCell>
                <SbyTableCell>Action</SbyTableCell>
              </SbyTableRow>
            </SbyTableHead>

            <SbyTableBody>
              {listings.map(listing => (
                <SbyTableRow key={listing.id}>
                  <SbyTableCell>{listing.upc}</SbyTableCell>
                  <SbyTableCell>{listing.description}</SbyTableCell>
                  <SbyTableCell>{listing.cm}</SbyTableCell>
                  <SbyTableCell>{listing.time}</SbyTableCell>
                  <SbyTableCell>{listing.status}</SbyTableCell>
                  <SbyTableCell>{listing.reason}</SbyTableCell>
                  <SbyTableCell><ReplayIcon />RESUME</SbyTableCell>
                </SbyTableRow>
              ))}
            </SbyTableBody>
          </SbyTable>
        </Box>
      </SbyPaper>
    </>
  );
};

Home.defaultProps = {
  listings: Array(5).fill(null).map((_, index) => ({
    id: index,
    upc: '10882875096107',
    description: 'ClubHous Gravy Mix Org Lorem ipsum dolor sit amet',
    cm: 4489,
    time: '2018-11-29',
    status: (index === 3) ? 'REJECTED' : 'ON HOLD',
    reason: 'Reason provided by the clerk lorem ipsum',
  })),
};

export default React.memo(Home);
