import React, { useState } from 'react';
import * as RI from './ProductReviewItemStyle';
import { useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { showModal } from '../../../../../../redux/modules/modal';
import {
  deleteReviewAsync,
  selectReview,
} from '../../../../../../redux/modules/review';
import ReviewLikeBtn from '../../../../../../components/ReviewLikeBtn/ReviewLikeBtn';

const ProductReviewItem = ({ review }) => {
  const dispatch = useDispatch();

  const handleDeleteReview = review => {
    if (window.confirm('정말 삭제하실건가요🥺')) {
      dispatch(deleteReviewAsync(review.reviewId));
    } else return;
  };

  const handleEdit = () => {
    dispatch(selectReview(review));
    dispatch(showModal());
  };

  return (
    <RI.ProductReviewItemWrap>
      <RI.ProductReviewText>
        <RI.ReviewDesc>
          <p>{review.nickname}</p>
          <RI.ReviewScore>
            <span>
              {Array(review.reviewScore)
                .fill('')
                .map((_, idx) => (
                  <AiFillStar key={idx} />
                ))}
            </span>
            <span>{review.reviewScore}</span>
            <span>{review.created_at.slice(0, 10)}</span>
          </RI.ReviewScore>
        </RI.ReviewDesc>
        <span>{review.reviewContent}</span>
      </RI.ProductReviewText>
      <RI.BtnWrap>
        <ReviewLikeBtn
          reviewId={review.reviewId}
          recommendCount={review.recommendCount}
        />
        <RI.Btn>
          <button onClick={handleEdit}>수정</button>
          <button onClick={e => handleDeleteReview(review)}>삭제</button>
        </RI.Btn>
      </RI.BtnWrap>
    </RI.ProductReviewItemWrap>
  );
};
export default ProductReviewItem;
