import React, { useEffect, useState } from 'react';
import * as RM from './ProductReviewModalStyle';
import close from '../../../../../assets/images/ProductDetail/close.png';
import ProductReviewBox from './ProductReviewBox/ProductReviewBox';
import ProductReviewStar from './ProductReviewStar/ProductReviewStar';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../redux/modules/modal';
import {
  createReviewAsync,
  resetSelectedReview,
  updateReviewAsync,
} from '../../../../../redux/modules/review';

const ProductReviewModal = () => {
  const dispatch = useDispatch();
  const { selectedReview } = useSelector(state => state.review);

  const [score, setScore] = useState(1);
  const [content, setContent] = useState('');

  const shopId = 1; // TO DO: 고정값이 아닌 shopId 값 동적 바인딩

  useEffect(() => {
    if (selectedReview) {
      setScore(selectedReview.reviewScore);
      setContent(selectedReview.reviewContent);
    }
  }, [selectedReview]);

  useEffect(() => {
    return () => dispatch(resetSelectedReview());
  }, [dispatch]);

  const handleSubmit = () => {
    if (content === '') {
      return alert('리뷰를 입력해주세요🥨');
    } else if (!selectedReview) {
      dispatch(createReviewAsync({ content, score, shopId }));
    } else {
      dispatch(
        updateReviewAsync({ content, score, reviewId: selectedReview.reviewId })
      );
    }
    dispatch(closeModal());
  };

  return (
    <RM.ProductReviewContentWrap
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        dispatch(closeModal());
      }}
    >
      <RM.ProductReviewContent>
        <RM.ProductReviewTitle>
          <span>리뷰</span>
          <RM.Close
            src={close}
            onClick={() => {
              dispatch(closeModal());
            }}
          />
        </RM.ProductReviewTitle>
        <RM.Star>
          <ProductReviewStar value={score} onChange={setScore} />
        </RM.Star>
        <ProductReviewBox
          content={content}
          onChange={setContent}
          onSubmit={handleSubmit}
        />
      </RM.ProductReviewContent>
    </RM.ProductReviewContentWrap>
  );
};

export default ProductReviewModal;
