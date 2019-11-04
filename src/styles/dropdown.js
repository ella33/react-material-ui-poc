import colors from './colors';

const width = 180;

const styles = {
  root: {
    width,
    padding: 10,
  },
  icon: {
    color: colors.primary,
    borderColor: colors.secondary,
    borderWidth: '0 0 0 1px',
    borderStyle: 'solid',
  },
  iconOpen: {
    borderWidth: '0 1px 0 0'
  },
  iconOutlined: {
    right: 3,
  },
};

export default styles;
