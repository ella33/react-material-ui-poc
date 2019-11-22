import React from 'react';
import styled from 'styled-components';
import SbyHeader from './header';

const Main = styled.div`
	display: flex;
  flex: 1;
	flex-direction: column;
	height: 100%;
`;

const Content = styled.div`
  display: flex;
	flex: 1;
`;

const SbyLayout = ({ children }) => (
  <Main>
    <SbyHeader/>
    <Content>
      {children}
    </Content>
  </Main>
);

export default React.memo(SbyLayout);