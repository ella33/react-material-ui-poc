import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SbyLayout from 'components/shared/layout';
import Home from 'pages/home/home';
import Listing from 'pages/listing/listing';
import NewListing from 'pages/new-listing/newListing';
import theme from 'styles/theme';

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SbyLayout>
          <Switch>
            <Route path="/listing">
              <Listing />
            </Route>

            <Route path="/new-listing">
              <NewListing />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SbyLayout>
      </ThemeProvider>
      {/* <Box m={2}>
        <SbyButton variant="contained" size="xs">xs</SbyButton>
        <SbyButton variant="contained" size="sm">sm</SbyButton>
        <SbyButton variant="contained">normal</SbyButton>
        <SbyButton variant="contained" size="lg">lg</SbyButton>
        <SbyButton variant="contained">work on your next listing</SbyButton>
      </Box>

      <Box m={2}>
        <SbyButton variant="outlined" size="xs">xs</SbyButton>
        <SbyButton variant="outlined" size="sm">sm</SbyButton>
        <SbyButton variant="outlined">normal</SbyButton>
        <SbyButton variant="outlined" size="lg">lg</SbyButton>
        <SbyButton variant="outlined">work on your next listing</SbyButton>
      </Box>

      <Box m={2}>
        <SbyButton variant="contained" color="secondary" size="xs">xs</SbyButton>
        <SbyButton variant="contained" color="secondary" size="sm">sm</SbyButton>
        <SbyButton variant="contained" color="secondary">normal</SbyButton>
        <SbyButton variant="contained" color="secondary" size="lg">lg</SbyButton>
        <SbyButton variant="contained" color="secondary">work on your next listing</SbyButton>
      </Box>

      <Box m={2}>
        <SbyRadio label="Active" value="active" checked />
        <SbyRadio label="Normal" value="normal" />
      </Box>

      <Box m={2}>
        <SbyDropdown id="sby-multiple-dropdown" multiple={true} values={[{ value: 10, label: 'Ten' }, { value: 20, label: 'Twenty' }]} />
        <SbyDropdown id="sby-simple-dropdown" values={[{ value: 10, label: 'Ten' }, { value: 20, label: 'Twenty' }]} />
      </Box> */}
    </Router>
  );
}

export default App;
