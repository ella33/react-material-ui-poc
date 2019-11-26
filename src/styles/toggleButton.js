import colors from './colors';

const styles = {
  root: {
    '& .MuiToggleButtonGroup-grouped': {
      flex: 1,
      textTransform: 'none',
      '&.Mui-selected': {
        backgroundColor: colors.primary,
        color: '#FFF',
      },
    },
  },
};

export default styles;