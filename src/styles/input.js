import colors from './colors';

const width = 180;

const styles = {
  root: {
    width,
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
