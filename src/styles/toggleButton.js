import colors from './colors';

const styles = {
  root: {
    backgroundColor: 'transparent',
    '& .MuiToggleButtonGroup-grouped': {
      flex: 1,
      height: 40,
      padding: 0,
      textTransform: 'none',
      '&.Mui-selected': {
        backgroundColor: colors.primary,
        color: '#FFF',
      },
    },
    '& .MuiButtonBase-root': {
      color: 'inherit',
      fontWeight: 400,
    }
  },
};

export default styles;