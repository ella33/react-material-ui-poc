import colors from './colors';

const width = 180;

const styles = {
  root: {
    width,
    padding: 10,
  },
  icon: {
    borderLeft: `1px solid ${colors.secondary}`,
    color: colors.primary,
  },
  iconOutlined: {
    right: 3,
  },
};

export default styles;
