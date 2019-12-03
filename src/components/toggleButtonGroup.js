import React, { useCallback, useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const SbyToggleButtonGroup = ({ items, value, ...rest }) => {
  const [selected, setSelected] = useState(value);
  const onChange = useCallback((_, value) => {
    setSelected(value);
  }, []);

  return (
    <ToggleButtonGroup value={selected} onChange={onChange} {...rest}>
      {items.map((item, index) => (
        <ToggleButton key={index} value={index}>{item}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SbyToggleButtonGroup;