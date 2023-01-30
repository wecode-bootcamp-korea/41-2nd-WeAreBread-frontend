import styled from 'styled-components';

export const ProductReviewContentWrap = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000050;
`;

export const ProductReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 15px;
`;

export const ProductReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: #9eb2ae;
  border-radius: 15px 15px 0 0;

  span {
    padding: 15px;
    border-radius: 15px 15px 0 0;
    color: #fff;
    text-align: center;
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const Close = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

export const Star = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 50px 0;
  width: 100%;

  p:first-child {
    padding-bottom: 15px;
  }
`;
