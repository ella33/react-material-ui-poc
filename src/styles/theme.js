import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';
import radioStyles from './radio';
import dropdownStyles from './dropdown';

const inputColor = colors.lightGrey;

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
    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&$focused': {
          borderColor: colors.primary,
          caretColor: colors.primary,
        },
        '&:hover $notchedOutline': {
          borderColor: inputColor,
        },
      },
      input: {
        color: colors.darkGrey,
        padding: `${2*spacingBaseUnit}px`,
        '&::placeholder': {
          color: inputColor,
        },
        '&:focus': {
          color: colors.primary,
        },
        '&:disabled': {
          backgroundColor: colors.secondary,
        }
      },
    },
    MuiCheckbox: {
      root: {
        color: inputColor,
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: 'transparent',
      },
    },
    MuiContainer: {
      root: {
        paddingTop: 65,
      },
    },
    MuiRadio: {
      ...radioStyles,
    },
    MuiSelect: {
      ...dropdownStyles,
    },
  },
});

export default theme;
