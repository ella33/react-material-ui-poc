import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import colors from './colors';
import checkboxStyles from './checkbox';
import inputStyles from './input';
import radioStyles from './radio';
import dropdownStyles from './dropdown';
import { tableHead, tableCell } from './table';

const spacingBaseUnit = 5;

const theme = createMuiTheme({
  spacing: spacingBaseUnit,
  palette: {
    type: 'light',
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
    MuiOutlinedInput: {
      ...inputStyles,
    },
    MuiCheckbox: {
      ...checkboxStyles,
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#FFF',
      },
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
    // MuiFormControlLabel: {
    //   label: {
    //     width: '210px',
    //   },
    // },
  },
});

export default responsiveFontSizes(theme);
