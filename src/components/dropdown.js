import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
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

const SbyDropdown = ({ values, multiple, ...rest }) => {
  const [selected, setSelected] = useState(multiple ? [] : '');
  const handleChange = ({ target: { value } }) => {
    if (multiple) {
      const index = selected.indexOf(value);
      if (index > -1) {
        setSelected(selected.filter(v => v !== value));
      } else {
        setSelected([...selected, value]);
      }
    } else {
      setSelected(value);
    }
  };

  return (
    <FormControl variant="outlined">
      <Select
        value={selected}
        IconComponent={ExpandMoreIcon}
        MenuProps={MenuProps}
        onChange={handleChange}
        renderValue={() => multiple ? selected.join(', ') : selected}
        {...rest}
      >
        {multiple
          ? values.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              <Checkbox color="primary" checked={selected.indexOf(value) !== -1} />
              <ListItemText primary={label} />
            </MenuItem>
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
