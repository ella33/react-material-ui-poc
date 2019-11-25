import React from 'react';
import { styled } from '@material-ui/core/styles';
import SbyHeader from './header';

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
});

const SbyLayout = ({ children }) => (
  <Main>
    <SbyHeader/>
    <Content>
      {children}
    </Content>
  </Main>
);

export default React.memo(SbyLayout);