import React, { useEffect, useState } from 'react';
import CardWrapper from './components/CardWrapper';
import styled from 'styled-components';
const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/cardList.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <MainContainer>
      {data.map(card => {
        return <CardWrapper key={card.id} card={card} />;
      })}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  width: 100%;
  min-height: calc(100vh - 206px);
  background-color: #f0f0f0;
`;
