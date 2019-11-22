import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SbyPaper from '../components/paper';

const Home = ({ listings }) => {
  return (
    <SbyPaper>
      <Table aria-label="Listings table">
        <TableHead>
          <TableRow>
            <TableCell>Upc</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Cm#</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map(listing => (
            <TableRow key={listing.id}>
              <TableCell>{listing.upc}</TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.cm}</TableCell>
              <TableCell>{listing.time}</TableCell>
              <TableCell>{listing.status}</TableCell>
              <TableCell>{listing.reason}</TableCell>
              <TableCell>RESUME</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SbyPaper>
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
