import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SbyButton from './components/button';
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
        <OutlinedInput placeholder="Bare" variant="outlined" />
        <OutlinedInput defaultValue="Type" disabled={true} placeholder="Bare" variant="outlined" />
      </Box>

      <Box m={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              value="checkedB"
              color="primary"
            />
          }
          label="Active"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              value="checkedB"
              color="primary"
            />
          }
          label="Normal"
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
