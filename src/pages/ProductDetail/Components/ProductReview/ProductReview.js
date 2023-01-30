import React from 'react';
import * as R from './ProductReviewStyle.js';
import ProductReviewModal from './ProductReviewModal/ProductReviewModal';
import ProductReviewList from './ProductReviewList/ProductReviewList';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../../redux/modules/modal';

const ProductReview = ({ reviewList, shopId }) => {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <R.ProductReviewWrap>
      <R.ProductReviewTitle>
        <div>
          <h1>방문자 평가</h1>
          <button
            onClick={() => {
              dispatch(showModal());
            }}
          >
            리뷰 작성
          </button>
        </div>
      </R.ProductReviewTitle>
      {modal && <ProductReviewModal />}
      {reviewList.length ? (
        <ProductReviewList reviewList={reviewList} />
      ) : (
        <R.NoReviewText>리뷰가 존재하지 않습니다..😭</R.NoReviewText>
      )}
    </R.ProductReviewWrap>
  );
};

export default ProductReview;
