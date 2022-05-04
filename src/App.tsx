import React from 'react';
import Card from './components/card';
import styled from 'styled-components';
import Header from './components/header';

const AppGlobalPadding = styled.div`
  position: relative;
  padding: 0 32% 0 32%;
`;

function App() {
  return (
    <AppGlobalPadding>
      <Header />
      <Card />
    </AppGlobalPadding>
  );
}

export default App;
