import styled from 'styled-components';

export const ProductInfoWrap = styled.div`
  width: 700px;
  ${props => props.theme.common.flexCenterColumn}
  margin-top: 100px;
  margin-bottom: 30px;
  border-radius: 15px;
  background-color: #fca62f;
  color: #fff;
  box-shadow: 2px 3px 5px 0 gray;
`;

export const Image = styled.img`
  width: 700px;
  height: 400px;
  border-radius: 35px;
  padding: 20px;
  object-fit: cover;
`;

export const ProductInfoContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  border-radius: 0 0 15px 15px;
`;

export const ProductInfoDesc = styled.div`
  p {
    padding-bottom: 15px;
  }
  p:nth-child(2) {
    color: #fcf5e3;
    font-size: 15px;
  }
  p:first-child {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const ProductInfoLike = styled.p`
  display: flex;
  align-items: flex-end;
`;

export const Test = styled.div`
  display: flex;
  justify-content: space-between;
`;
