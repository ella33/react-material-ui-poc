import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import colors from './colors';
import checkboxStyles from './checkbox';
import inputStyles from './input';
import radioStyles from './radio';
import dropdownStyles from './dropdown';
import toggleButtonStyles from './toggleButton';
import linkStyles from './link';
import { tableHead, tableCell } from './table';

const spacingBaseUnit = 5;

const theme = createMuiTheme({
  spacing: spacingBaseUnit,
  typography: {
    fontSize: 13,
  },
  palette: {
    type: 'light',
    text: {
      primary: '#505151',
    },
    primary: {
      main: colors.primary,
      contrastText: '#FFF',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#616161',
    },
    background: {
      default: '#505151',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: '#FFF',
      },
    },
    MuiFormControl: {
      root: {
        flex: 1,
      },
    },
    MuiOutlinedInput: {
      ...inputStyles,
    },
    MuiCheckbox: {
      ...checkboxStyles,
    },
    MuiRadio: {
      ...radioStyles,
    },
    MuiSelect: {
      ...dropdownStyles,
    },
    MuiTableHead: {
      ...tableHead,
    },
    MuiTableCell: {
      ...tableCell,
    },
    MuiToggleButtonGroup: {
      ...toggleButtonStyles,
    },
    MuiLink: {
      ...linkStyles,
    },
  },
});

export default responsiveFontSizes(theme);
