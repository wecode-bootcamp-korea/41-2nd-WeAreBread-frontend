import React from 'react';
import * as RB from './ProductReviewBoxStyle';

const ProductReviewBox = ({ onChange, onSubmit, content }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const handleUserReview = e => {
    onChange(e.target.value);
  };

  return (
    <RB.ProductReviewBoxWrap>
      <RB.Input
        type="text"
        placeholder="리뷰를 입력해주세요."
        defaultValue={content}
        onChange={handleUserReview}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSubmit}>작성</button>
    </RB.ProductReviewBoxWrap>
  );
};

export default ProductReviewBox;
