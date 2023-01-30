import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import CardItem from './CardItem';

const CardWrapper = ({ card }) => {
  const { title, content } = card;

  return (
    <Wrapper>
      <Header>
        <TitleSection>
          <Title>#{title}</Title>
          <CardLength>({content ? content.length : 0})</CardLength>
        </TitleSection>
        <DetailBtn>자세히 보기 {`>`}</DetailBtn>
      </Header>
      <CardSection>
        <StyledSlider {...settings}>
          {content.map(el => {
            return <CardItem key={el.id} el={el} />;
          })}
        </StyledSlider>
      </CardSection>
    </Wrapper>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const StyledSlider = styled(Slider)`
  position: relative;
  .slick-arrow::before {
    font-size: 55px;
    color: lightgray;
  }
  .slick-prev::before {
    position: absolute;
    top: -10px;
    right: 10px;
    color: #9eb2ae;
  }
  .slick-next::before {
    position: absolute;
    top: -10px;
    left: 10px;
    color: #9eb2ae;
  }
  .slick-slide div {
    display: flex;
  }
`;

const Wrapper = styled.div`
  width: 1070px;
  margin-top: 40px;
  padding-top: 26px;
  background-color: #9eb2ae;
  border-radius: 15px;
  box-shadow: 2px 3px 5px 0px gray;
  &:last-child {
    margin-bottom: 50px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleSection = styled.div`
  display: flex;
  padding: 0 32px 26px 32px;
`;

const Title = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  font-weight: 700;
  color: white;
`;

const CardLength = styled.span`
  margin-left: 5px;
  padding-top: 3px;
  color: lightgray;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
`;

const DetailBtn = styled.button`
  width: 114px;
  height: 36px;
  margin-right: 20px;
  padding-top: 3px;
  background-color: white;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
  border: none;
  border-radius: 18px;
  &:hover {
    background-color: #1e5858;
    color: white;
  }
`;

const CardSection = styled.div`
  height: 340px;
  background-color: white;
  border-top: 1px solid #eaeaea;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export default CardWrapper;
