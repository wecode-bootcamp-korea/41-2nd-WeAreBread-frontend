import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AgreementSection>
          <Link to="/">개인정보처리방침</Link>
          <Bar>|</Bar>
          <Link to="/">이용약관</Link>
          <Bar>|</Bar>
          <Link to="/">개인정보처리방침</Link>
        </AgreementSection>
        <div>
          <CompanyName>(주)위아브레드</CompanyName> <Bar>|</Bar>
          <span>대표이사 : 김 승</span> <Bar>|</Bar>
          <span>소재지 : 서울특별시 강남구 테헤란로 427 10층</span>
        </div>
        <AskSection>이메일 문의 : contack@wearebread.com</AskSection>
        <AskSection>
          <p>전화문의 : 02-123-4567 (평일 : 10:00~19:00, 주말/공휴일 제외)</p>
          <p>Copyright Ⓒ 2023 WeAreBread</p>
        </AskSection>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 670px;
  height: 206px;
  padding: 40px;
  font-size: 14px;
`;

const Wrapper = styled.div`
  width: 1070px;
`;

const AgreementSection = styled.div`
  margin-bottom: 20px;
`;

const Bar = styled.span`
  margin: 0 10px;
  color: lightgray;
`;

const AskSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 20px;
  }
`;

const CompanyName = styled.span`
  font-weight: 800;
`;
