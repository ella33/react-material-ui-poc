import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
  marginThreshold: 0,
};

const SbyDropdown = ({ values, multiple }) => {
  return (
    <FormControl variant="outlined">
      <Select
        id="demo-simple-select-outlined"
        value={10}
        IconComponent={ExpandMoreIcon}
        MenuProps={MenuProps}
      >
        {multiple
          ? values.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))
          : values.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
};

SbyDropdown.propTypes = {
  values: PropTypes.array.isRequired,
};

export default React.memo(SbyDropdown);
