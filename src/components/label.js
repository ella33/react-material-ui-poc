import React from 'react';
import { styled } from '@material-ui/core/styles';

const Label = styled('div')(({ required }) => ({
  position: 'relative',
  '&:before': {
    alignItems: 'center',
    color: '#D12436',
    content: '\'\\2605\'',
    display: 'inline-flex',
    fontSize: 10,
    height: '100%',
    left: -15,
    position: 'absolute',
    top: 0,
    width: 10,
    opacity: required ? 1 : 0,
  },
}));

const SbyLabel = ({ text, ...rest }) => (
  <Label {...rest}>{text}</Label>
);

SbyLabel.defaultProps = {
  required: true,
};

export default SbyLabel;