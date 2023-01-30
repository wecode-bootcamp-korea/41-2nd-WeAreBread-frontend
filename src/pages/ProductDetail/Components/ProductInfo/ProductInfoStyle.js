import styled from 'styled-components';

export const ProductInfoWrap = styled.div`
  width: 700px;
  ${props => props.theme.common.flexCenterColumn}
  margin-bottom: 30px;
  border-radius: 15px;
  background-color: #9eb2ae;
  color: #fff;
  box-shadow: 2px 3px 5px 0 gray;
`;

export const Image = styled.img`
  width: 700px;
  height: 400px;
  border-radius: 35px;
  padding: 20px;
`;

export const ProductInfoContent = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;
  border-radius: 0 0 15px 15px;
`;

export const ProductInfoDesc = styled.div`
  p {
    padding-bottom: 15px;
  }
  p:nth-child(2) {
    color: gray;
    font-size: 15px;
  }
  p:first-child {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;
