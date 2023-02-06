import React, { useState } from 'react';
import styled from 'styled-components';

const RandomImg = () => {
  const [currentImageNum, setCurrentImageNum] = useState(1);
  const imgTitle = [
    '파이',
    '잠봉뵈르',
    '와플',
    '와플',
    '로터스 쿠키',
    '동물쿠키',
    '도넛',
    '도넛',
    '샌드위치',
    '컵케이크',
    '건포도 컵케이크',
    '크로와상',
    '크로와상',
    '마카롱',
    '마카롱',
    '프레첼',
    '도넛',
    '소금빵',
    '통밀빵',
    '당근케이크',
    '치즈케이크',
  ];

  const changeBackground = () => {
    setCurrentImageNum(Math.floor(Math.random() * imgTitle.length));
  };

  const randomGame = setTimeout(() => {
    changeBackground();
  }, 100);

  const stopRandomGame = e => {
    clearTimeout(randomGame);
  };

  return (
    <div className="background">
      <RandomTitle>이거 어때?</RandomTitle>
      <Wrapper
        src={`/images/bread${currentImageNum}.jpg`}
        alt=""
        onClick={stopRandomGame}
      />
      <ImgTitle>{imgTitle[currentImageNum]}</ImgTitle>
    </div>
  );
};

export default RandomImg;

const Wrapper = styled.img`
  width: 1600px;
  height: 570px;
  object-fit: cover;
  animation: fadeIn 0.5s;
`;

const RandomTitle = styled.h1`
  margin: 30px;
  font-size: 30px;
  font-weight: 700;
`;

const ImgTitle = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
`;