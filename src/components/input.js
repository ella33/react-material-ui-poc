import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import WarningIcon from '@material-ui/icons/Warning';
import { styled } from '@material-ui/core/styles';

import colors from 'styles/colors';

const InputContainer = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column'
});

const ErrorMessage = styled('div')({
  color: colors.error,
  display: 'grid',
  gridColumnGap: 3,
  gridTemplateColumns: 'auto auto',
  padding: '5px 0',
});

const SbyInput = (props) => {
  const { children, errorText, ...rest } = props;
  const [error, setError] = useState(false);

  const onBlur = useCallback(({ target: { value } }) => {
    setError(props.required && !value);
  }, [props.required]);

  return (
    <InputContainer>
      <TextField variant="outlined" error={error} onBlur={onBlur} {...rest}>
        {children}
      </TextField>
      {error && errorText &&
        <ErrorMessage>
          <WarningIcon />
          <span>{errorText}</span>
        </ErrorMessage>
      }
    </InputContainer>
  );
}

export default SbyInput;