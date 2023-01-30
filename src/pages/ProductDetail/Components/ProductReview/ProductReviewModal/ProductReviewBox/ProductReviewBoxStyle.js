import styled from 'styled-components';

export const ProductReviewBoxWrap = styled.div`
  width: 90%;
  background-color: #f0f0f0;

  button {
    height: 80px;
    width: 15%;
    border: none;
    border-radius: 0 15px 15px 0;
    background-color: #fff;
    font-size: ${props => props.theme.fontSizes.m};
  }

  button:hover {
    background-color: #1e5858;
    color: #fff;
    transition: all 0.5s;
  }
`;

export const Input = styled.input`
  width: 85%;
  height: 80px;
  padding-left: 10px;
  border: none;
  border-radius: 15px 0 0 15px;

  &:active,
  &:focus {
    border: none;
    outline: none !important;
    box-shadow: none !important;
  }
`;
