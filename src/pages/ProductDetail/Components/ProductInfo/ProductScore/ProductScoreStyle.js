import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

export const ProductScoreWrap = styled.div`
  display: flex;

  .starBox {
    z-index: 100;
    margin-right: 10px;
    height: 19px;
    overflow: hidden;
    position: absolute;

    .pointOfStar {
      z-index: 10;
      height: 19px;
      width: 100px;
    }
  }

  .backgroundStar {
    width: 100px;
    height: 19px;
  }

  span {
    margin-left: 5px;
  }
`;
