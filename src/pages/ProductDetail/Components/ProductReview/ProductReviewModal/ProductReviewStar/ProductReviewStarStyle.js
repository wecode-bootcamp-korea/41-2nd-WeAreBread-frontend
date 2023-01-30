import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const ProductReviewStarWrap = styled.div`
  display: flex;
  text-align: center;
  margin: 13px 0px;

  .inactive {
    color: #ccc;
  }
`;

export const RatingStar = styled(AiFillStar)`
  color: #ffd221;
  cursor: pointer;
`;

export const StarDesc = styled.p`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;
