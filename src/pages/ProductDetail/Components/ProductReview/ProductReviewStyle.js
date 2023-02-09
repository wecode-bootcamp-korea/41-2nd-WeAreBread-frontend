import styled from 'styled-components';

export const ProductReviewWrap = styled.div`
  width: 700px;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #ffc16b;
  border-radius: 15px;
  box-shadow: 2px 3px 5px 0 gray;
`;

export const ProductReviewTitle = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: ${props => props.theme.fontSizes.xxl};
    }

    button {
      height: 40px;
      padding: 10px;
      border: none;
      border-radius: 15px;
      background-color: #fff;
      font-size: 15px;
    }

    button:hover {
      background-color: #a8d38b;
      color: #fff;
      transition: all 0.5s;
    }
  }

  p span:first-child {
    margin-right: 10px;
  }
`;

export const NoReviewText = styled.span`
  color: #1e5858;
`;
