import styled from 'styled-components';
import ProductReviewItem from './ProductReviewItem/ProductReviewItem';

const ProductReviewList = ({ reviewList }) => {
  return (
    <ProductReviewListWrap>
      {reviewList?.map((review, idx) => (
        <ProductReviewItem key={idx} review={review} />
      ))}
    </ProductReviewListWrap>
  );
};
export default ProductReviewList;

const ProductReviewListWrap = styled.div``;
