import React, { useState } from 'react';
import styled from 'styled-components';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

const ShopLikeBtn = ({ shopId }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleLikeBtn = () => {
    if (!isClicked) {
      fetch(`http://138.2.112.49:3000/shops/like/${parseInt(shopId)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('AccessToken'),
        },
      })
        .then(res => res.json())
        .then(res => {
          if ((res.message = 'createShopLikeByUser SUCCESS')) {
            alert('좋아요를 눌렀습니다.');
          }
        });
      setIsClicked(prev => !prev);
    } else {
      fetch(`http://138.2.112.49:3000/shops/like/${parseInt(shopId)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('AccessToken'),
        },
      })
        .then(res => res.json())
        .then(res => {
          if ((res.message = 'deleteShopLikeByUser SUCCESS')) {
            alert('좋아요를 취소했습니다.');
          }
        });
      setIsClicked(prev => !prev);
    }
  };

  return (
    <div>
      {isClicked ? (
        <FillHeart onClick={handleLikeBtn} />
      ) : (
        <EmptyHeart onClick={handleLikeBtn} />
      )}
    </div>
  );
};

export default ShopLikeBtn;

const FillHeart = styled(BsHeartFill)`
  color: #ff4c4c;
  cursor: pointer;
  animation-duration: 0.5s;
  animation-name: heartBling;

  @keyframes heartBling {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    66% {
      transform: scale(1.4) 100% {
        transform: scale(0.9);
      }
    }
  }
`;

const EmptyHeart = styled(BsHeart)`
  color: gray;
  cursor: pointer;
`;
