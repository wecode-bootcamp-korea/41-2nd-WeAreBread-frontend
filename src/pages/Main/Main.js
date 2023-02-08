import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardWrapper from './components/CardWrapper';
const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/cardList.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <MainContainer>
      <TitleSection>
        <MainTitle>무엇을 먹을지 고민된다면?</MainTitle>
        <MoveToRandom to="/random">클릭😛</MoveToRandom>
      </TitleSection>
      <ImgBox src="/images/bread3.jpg" />
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
  padding-top: 60px;
  min-height: calc(100vh - 206px);
  background-color: #f0f0f0;
`;

const ImgBox = styled.img`
  width: 1600px;
  height: 500px;
  object-fit: cover;
`;

const TitleSection = styled.div`
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  width: 380px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgb(0, 0, 0, 0.4);
  color: white;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 8px 5px 5px rgb(0, 0, 0, 0.3);
  -webkit-text-stroke: 1px #1e5858;
`;

const MoveToRandom = styled(Link)`
  ${({ theme }) => theme.common.flexCenter}
  width: 100px;
  height: 50px;
  margin-top: 20px;
  background-color: #1e5858;
  color: white;
  font-size: 25px;
  border-radius: 15px;
  box-shadow: 8px 5px 5px rgb(0, 0, 0, 0.8);
`;
