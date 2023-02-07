import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import theme from '../../../styles/theme';

const RecentList = ({
  recentSearch,
  setRecentSearch,
  setSearchText,
  setIsFocus,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleRemove = time => {
    setRecentSearch(recentSearch.filter(item => item.time !== time));
  };

  const handleAllRemove = () => {
    setRecentSearch([]);
  };

  const handleSearch = searchText => {
    searchParams.set('search', searchText);
    setSearchParams(searchParams);
    navigate(`/productList?${searchParams.toString()}`);
    setIsFocus(false);
    setSearchText('');
  };

  return (
    <>
      <RecentListHeader>
        <RecentListTitle>최근 검색어</RecentListTitle>
        <RecentListClear onClick={handleAllRemove}>모두 지우기</RecentListClear>
      </RecentListHeader>
      <RecentListBox>
        {recentSearch.map(item => {
          return (
            <RecentQueryWrap
              key={item.time}
              onClick={() => handleSearch(item.content)}
            >
              <RecentQueryItem>
                <VerticalFocus />
                <FaSearch />
                <RecentSearchQueryContent>
                  <RecentSearchQuery>{item.content}</RecentSearchQuery>
                  <RecentSearchInfo>
                    <RecentInfoTime>
                      2.6
                      <Wrapper
                        onClick={e => {
                          e.stopPropagation();
                          handleRemove(item.time);
                        }}
                      >
                        <RecentInfoRemoveImg src="images/close.png" />
                      </Wrapper>
                    </RecentInfoTime>
                  </RecentSearchInfo>
                </RecentSearchQueryContent>
              </RecentQueryItem>
            </RecentQueryWrap>
          );
        })}
      </RecentListBox>
    </>
  );
};

const RecentListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px;
`;

const RecentListTitle = styled.span`
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgb(32, 32, 32);
`;

const RecentListClear = styled.button`
  font-size: 0.875rem;
  color: rgb(158, 158, 158);
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: transparent;
`;

const RecentListBox = styled.div``;

const RecentQueryWrap = styled.div`
  height: 42px;
`;

const RecentQueryItem = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  background-color: transparent;
  border: transparent;
  :hover {
    background-color: ${theme.color.gray};
  }
`;

const VerticalFocus = styled.div`
  position: absolute;
  left: 0px;
  width: 3px;
  height: 42px;
`;

const RecentSearchQueryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  font-size: 0.9375rem;
  color: rgb(32, 32, 32);
`;

const RecentSearchQuery = styled.div``;

const RecentSearchInfo = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
  padding-top: 0px;
`;

const RecentInfoTime = styled.span`
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 0.875rem;
  color: rgb(158, 158, 158);
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20px;
`;

const RecentInfoRemoveImg = styled.img`
  position: relative;
  top: 1px;
  width: 10px;
  height: 10px;
`;

export default RecentList;
