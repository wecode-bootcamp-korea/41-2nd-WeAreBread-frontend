import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Nav/SearchBar/SearchBar';
import styled, { keyframes } from 'styled-components';
import LoginModal from './Login/LoginModal';
import { KAKAO_LOGOUT } from '../../socialLogin/KakaoConfig';
import theme from '../../styles/theme';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));
  const [profileOpened, setProfileOpened] = useState(false);
  const userNickname = useMemo(() => localStorage.getItem('userNickname'), []);
  const profile = useRef();

  const handleOutsideClick = e => {
    if (profile && profile.current && !profile.current.contains(e.target)) {
      setProfileOpened(false);
    }
  };

  const openProfile = () => {
    setProfileOpened(true);
  };

  const popupOpen = () => {
    const url = KAKAO_LOGOUT;
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
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('recentSearch') === 'null')
      localStorage.setItem('recentSearch', '[]');
  }, []);

  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo>WeAreBread</Logo>
        </Link>
        <SearchBar />
        {isLogin ? (
          <ProfileBtn>
            <img
              src="images/cat.jpg"
              alt="profile"
              onClick={openProfile}
              ref={profile}
            />
            {profileOpened && (
              <Dropdown>
                <DropdownText>{userNickname} 님</DropdownText>
                <DropdownText>마이페이지</DropdownText>
                <DropdownText onClick={popupOpen}>로그아웃</DropdownText>
              </Dropdown>
            )}
          </ProfileBtn>
        ) : (
          <LoginModal setIsLogin={setIsLogin} />
        )}
      </Wrapper>
    </Header>
  );
};

export default Nav;

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

const Header = styled.header`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: fixed;
  ${theme.common.flexCenter}
  width: 100%;
  height: 90px;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  z-index: 990;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  height: 120px;
  padding: 20px;
  z-index: 99;
`;

const Logo = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.color.brown};
  cursor: pointer;
`;

const ProfileBtn = styled.button`
  position: relative;
  padding: 0px;
  background: none;
  border: none;
  cursor: default;
  width: 95px;

  & > img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  left: -30px;
  bottom: -140px;
  width: 150px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
  animation: ${showPopup} 0.5s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
`;

const DropdownText = styled.div`
  color: rgb(80, 80, 80);
  line-height: 45px;
  font-size: 0.875rem;
  font-weight: 400;
  color: rgb(102, 102, 102);
  border-top: 1px solid #e0e0e0;

  + div {
    cursor: pointer;

    :hover {
      background: #f5f5f5;
    }
  }

  /* &:hover {
    background: #f5f5f5;
  } */
`;
