import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const buttonHeight = {
  xs: 24,
  sm: 32,
  normal: 40,
  lg: 48,
};

const buttonSize = {
 xs: 10,
 sm: 12,
 normal: 14,
 lg: 16,
};

const styled = props => withStyles({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    height: `${buttonHeight[props.size]}px`,
  },
  label: {
    fontSize: `${buttonSize[props.size]}px`,
    textTransform: 'uppercase',
  },
})(Button);

const SbyButton = ({ size, children, ...rest }) => {
  const StyledButton = styled({ size });
  return (
    <StyledButton {...rest}>{
      children}
    </StyledButton>
  );
};

SbyButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

SbyButton.defaultProps = {
  color: 'primary',
  size: 'normal',
};

export default SbyButton;