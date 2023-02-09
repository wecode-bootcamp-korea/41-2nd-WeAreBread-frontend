import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import * as Styled from './ProductItemStyles';

const ProductItem = ({ store }) => {
  const {
    shopName,
    shopAddress,
    bread,
    reviewContent,
    reviewCount,
    shopAverageRating,
    likeCount,
    reviewByUser,
    review_image,
  } = store;

  console.log(bread);

  return (
    <Styled.ItemContainer>
      <Styled.BreadContainer to="/productDetail">
        <Styled.BreadContents>
          <Styled.BreadImg src={review_image} />
          <Styled.BreadInfo>
            <Styled.BreadTitle>{shopName}</Styled.BreadTitle>
            <Styled.MidInfo>
              <Styled.Category>{shopAddress}</Styled.Category>
              <Styled.Tag>{bread}</Styled.Tag>
            </Styled.MidInfo>
            <Styled.Rating>
              <Styled.UserScore>
                <Styled.StarIcon>
                  <FaStar className="star" />
                </Styled.StarIcon>
                {shopAverageRating} ({reviewCount})
              </Styled.UserScore>
              <Styled.Slash>|</Styled.Slash>
              <Styled.HeartIcon>
                <FiHeart className="heart" />
              </Styled.HeartIcon>
              {likeCount}
            </Styled.Rating>
          </Styled.BreadInfo>
        </Styled.BreadContents>
        <Styled.ReviewContainer>
          <Styled.Review>"{reviewContent}"</Styled.Review>
          <Styled.ReviewInfo>
            <Styled.WhoLiked>
              <Styled.LikedNum>{likeCount}</Styled.LikedNum>명이 추천했습니다.
            </Styled.WhoLiked>
            <Styled.Reviewer>
              by.{reviewByUser ? reviewByUser[0] : '없음'}
            </Styled.Reviewer>
          </Styled.ReviewInfo>
        </Styled.ReviewContainer>
      </Styled.BreadContainer>
    </Styled.ItemContainer>
  );
};

export default ProductItem;
