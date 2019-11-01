import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';
import radioStyles from './radio';
import dropdownStyles from './dropdown';

const theme = createMuiTheme({
  spacing: 5,
  palette: {
    type: 'light',
    primary: {
      main: colors.primary,
      contrastText: '#FFF',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#616161',
    }
  },
  overrides: {
    MuiRadio: {
      ...radioStyles,
    },
    MuiSelect: {
      ...dropdownStyles,
    },
  },
});

export default theme;
