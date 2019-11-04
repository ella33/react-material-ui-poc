import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#0EA937',
  secondary: '#C3C3C3',
  lightGrey: 'rgba(0, 0, 0, 0.33)',
  darkGrey: '#616161',
};

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
      focused: {
        borderColor: colors.primary,
        caretColor: colors.primary,
      },
      root: {
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
  },
});

export default theme;
