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
    </Router>
  );
}

export default App;
