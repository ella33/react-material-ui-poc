import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#0EA937',
  secondary: '#C3C3C3'
};

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
});

export default theme;
