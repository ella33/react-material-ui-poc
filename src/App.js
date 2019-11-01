import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import SbyButton from './components/button';
import SbyRadio from './components/radio';
import SbyDropdown from './components/dropdown';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m={2}>
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
        <SbyDropdown multiple={true} values={[{ value: 10, label: 'Ten' }, { value: 20, label: 'Twenty' }]} />
        <SbyDropdown values={[{ value: 10, label: 'Ten' }, { value: 20, label: 'Twenty' }]} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
