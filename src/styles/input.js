import colors from './colors';

const styles = {
  root: {
    width: '100%',
    '&$focused': {
      borderColor: colors.primary,
      caretColor: colors.primary,
    },
    '&:hover $notchedOutline': {
      borderColor: colors.lightGrey,
    },
  },
  input: {
    color: colors.darkGrey,
    padding: 10,
    '&::placeholder': {
      color: colors.lightGrey,
    },
    '&:focus': {
      color: colors.primary,
    },
    '&:disabled': {
      backgroundColor: colors.secondary,
    }
  },
};

export default styles;
