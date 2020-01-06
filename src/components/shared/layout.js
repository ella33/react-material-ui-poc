import React from 'react';
import { styled } from '@material-ui/core/styles';
import SbyHeader from './header';
import SbyFooter from './footer';

const Main = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
});

const Content = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minWidth: 1024,
  overflow: 'auto',
});

const SbyLayout = ({ children }) => (
  <Main>
    <SbyHeader/>
    <Content>
      {children}
    </Content>
    <SbyFooter />
  </Main>
);

export default React.memo(SbyLayout);