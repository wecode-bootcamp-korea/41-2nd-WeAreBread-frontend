import styled from 'styled-components';

export const ProductReviewItemWrap = styled.div`
  margin: 25px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
`;

export const ProductReviewText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
`;

export const ReviewDesc = styled.div`
  p:first-child {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: 5px;
  }
`;

export const ReviewScore = styled.p`
  margin-bottom: 20px;

  span:first-child {
    color: #ffd221;
  }

  span:nth-child(2) {
    margin: 0 10px 0 5px;
    font-size: ${props => props.theme.fontSizes.m};
    vertical-align: top;
  }

  span:last-child {
    margin-right: 10px;
    color: #ccc;
    vertical-align: top;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  vertical-align: bottom;
`;

export const Btn = styled.div`
  button {
    margin-right: 10px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    background-color: #ffefd3;
  }
`;
