import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SbyRadio = props => {
  const { label, value, ...rest } = props;

  return (
    <FormControlLabel
      label={label}
      value={value}
      control={<Radio color="primary" {...rest} />}
    />
  )
};

SbyRadio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default React.memo(SbyRadio);
