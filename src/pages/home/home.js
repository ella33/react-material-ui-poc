import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import SbyActionBar, { ActionGroup } from 'components/shared/actionBar';
import SbySubheader from 'components/shared/subheader';
import { SbyTable, SbyTableHead, SbyTableBody, SbyTableRow, SbyTableCell, SbyTabelSortIcon } from 'components/table';
import SbyPaper from 'components/paper';
import SbyButton from 'components/button';

const Home = ({ listings, history }) => {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const goToNewListing = useCallback(() => {
    history.push('/new-listing');
  }, [history]);

  const resumeListing = useCallback(() => {
    history.push('/listing');
  }, [history]);

  const requestSorting = useCallback((id) => {
    setOrder(o => ((o === 'asc') ? 'desc' : 'asc'));
    setOrderBy(id);
  }, []);

  const tableHeaders = [
    { id: 'upc', label: 'Upc' },
    { id: 'description', label: 'Description' },
    { id: 'cm', label: 'Cm#' },
    { id: 'time', label: 'Time' },
    { id: 'status', label: 'Status' },
    { id: 'reason', label: 'Reason' },
    { id: 'action', label: 'Action' },
  ];

  return (
    <>
      <SbyActionBar>
        <div>Hello, John!</div>
        <ActionGroup>
          <SbyButton variant="contained" onClick={goToNewListing}>Work on your next listing</SbyButton>
        </ActionGroup>
      </SbyActionBar>

      <SbySubheader>Your dashboard</SbySubheader>

      <SbyPaper>
        <Box m={4}>
          <SbyTable aria-label="Listings table">
            <SbyTableHead>
              <SbyTableRow>
                {tableHeaders.map(({ id, label }) => (
                  <SbyTableCell
                    key={id}
                    sortDirection={orderBy === id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === id}
                      direction={order}
                      onClick={() => requestSorting(id)}
                      IconComponent={SbyTabelSortIcon}
                    >
                      {label}
                    </TableSortLabel>
                  </SbyTableCell>
                ))}
              </SbyTableRow>
            </SbyTableHead>

            <SbyTableBody>
              {listings.sort((a, b) => ((order === 'asc') ?  (a[orderBy] < b[orderBy] ? 1 : -1) : (a[orderBy] > b[orderBy] ? 1: -1)))
                .map(listing => (
                  <SbyTableRow key={listing.id}>
                    <SbyTableCell>{listing.upc}</SbyTableCell>
                    <SbyTableCell>{listing.description}</SbyTableCell>
                    <SbyTableCell>{listing.cm}</SbyTableCell>
                    <SbyTableCell>{listing.time}</SbyTableCell>
                    <SbyTableCell>{listing.status}</SbyTableCell>
                    <SbyTableCell>{listing.reason}</SbyTableCell>
                    <SbyTableCell><Button color="primary" onClick={resumeListing}><ReplayIcon />RESUME</Button></SbyTableCell>
                  </SbyTableRow>
                ))
              }
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

export default withRouter(React.memo(Home));
