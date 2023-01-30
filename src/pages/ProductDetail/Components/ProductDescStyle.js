import styled from 'styled-components';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { CiTimer } from 'react-icons/ci';

export const ProductDescWrap = styled.div`
  width: 700px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 3px 5px 0 gray;

  p {
    font-size: ${props => props.theme.fontSizes.m};
    vertical-align: middle;
    margin: 10px 0;
    padding: 5px 0;
  }
  p:nth-child(2) {
    margin: 15px 0;
  }
`;

export const Location = styled(CiLocationOn)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  vertical-align: bottom;
`;

export const Phone = styled(BsTelephoneOutbound)`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  vertical-align: bottom;
`;

export const Time = styled(CiTimer)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  vertical-align: bottom;
`;
