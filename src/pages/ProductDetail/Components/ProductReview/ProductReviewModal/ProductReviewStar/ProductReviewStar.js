import React from 'react';
import * as RS from './ProductReviewStarStyle.js';

const ArrayIndexes = [1, 2, 3, 4, 5];

const ProductReviewStar = ({ value, onChange }) => {
  return (
    <RS.ProductReviewStarWrap>
      {ArrayIndexes.map((arrIndex, idx) => (
        <RS.RatingStar
          size={35}
          key={`rating_${idx}`}
          className={arrIndex <= value ? 'active' : 'inactive'}
          onClick={() => {
            onChange(arrIndex);
          }}
        />
      ))}
      <RS.StarDesc>
        {value === 5
          ? '5'
          : value === 4
          ? '4'
          : value === 3
          ? '3'
          : value === 2
          ? '2'
          : '1'}
      </RS.StarDesc>
    </RS.ProductReviewStarWrap>
  );
};

export default ProductReviewStar;
