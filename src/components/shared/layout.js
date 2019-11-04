import React from 'react';
import Container from '@material-ui/core/Container';
import SbyHeader from './header';

const SbyLayout = ({ children }) => (
  <>
    <SbyHeader/>
    <Container>
      {children}
    </Container>
  </>
);

export default React.memo(SbyLayout);