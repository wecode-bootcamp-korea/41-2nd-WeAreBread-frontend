import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { KAKAO_AUTH_URL } from '../../../socialLogin/KakaoConfig';

const Modal = ({ setIsLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const popupOpen = () => {
    const url = KAKAO_AUTH_URL;
    const name = '팝업';
    const width = 400;
    const height = 700;
    const top = Math.ceil((window.outerHeight - height) / 2);
    const left = Math.ceil((window.outerWidth - width) / 2);
    const specs = `width=${width}, height=${height}, top=${top}, left=${left}`;

    window.open(url, name, specs);

    return false;
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <LoginBtn onClick={() => setIsOpen(true)}>로그인/회원가입</LoginBtn>
      {isOpen && (
        <ModalBackground>
          <ModalWindow ref={modalRef}>
            <TfiClose className="close" onClick={() => setIsOpen(false)} />
            <ContentBox>
              <ContentRow as="header">
                <ContentAnimationBox>
                  <Emoji>👋</Emoji>
                </ContentAnimationBox>
                <Title>반갑습니다!</Title>
                <Greeting>We Are Bread!!</Greeting>
                <LoginButton onClick={popupOpen}>
                  <img
                    src="/images/kakao_login_large_wide.png"
                    alt="카카오 로그인"
                  />
                </LoginButton>
              </ContentRow>
            </ContentBox>
          </ModalWindow>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;

const showPopup = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const sayHelloAnimation = keyframes`
  from {
    transform: rotate(-20deg);
  }to{
    transform: rotate(10deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginBtn = styled.button`
  background: none;
  padding: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  color: rgb(102, 102, 102);
  width: 95px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s;
  animation-fill-mode: both;
`;

const ModalWindow = styled.div`
  position: relative;
  background-color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: ${showPopup} 0.5s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 24px;

  .close {
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 25px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  padding: 60px;
  background-color: #fff;
  border-radius: 30px;
`;

const ContentRow = styled.div`
  text-align: center;
`;

const ContentAnimationBox = styled(ContentRow)`
  animation: ${sayHelloAnimation} 1s linear infinite alternate;
`;

const Emoji = styled.p`
  font-size: 60px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Greeting = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

const LoginButton = styled.a`
  display: block;
  width: 100%;
  margin: 0 auto;
  border: 0;
  background-color: #fff;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    transition: box-shadow 0.2s;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
    }
  }
`;
