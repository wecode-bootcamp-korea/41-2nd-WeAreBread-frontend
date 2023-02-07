import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';
import theme from '../../../styles/theme';

const SuggestionLists = ({
  recentSearch,
  setRecentSearch,
  setSearchText,
  setIsFocus,
  suggestionLists,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleRemove = time => {
    setRecentSearch(recentSearch.filter(list => list.time !== time));
  };

  const handleAllRemove = () => {
    setRecentSearch([]);
  };

  const handleSearch = id => {
    navigate(`/productDetail/${id}`);
    setIsFocus(false);
    setSearchText('');
  };

  return (
    <>
      <SuggestionListsHeader>
        <SuggestionListsTitle />
        <SuggestionListsClear />
      </SuggestionListsHeader>
      <SuggestionListsBox>
        {suggestionLists &&
          suggestionLists.map(list => {
            return (
              <RecentQueryWrap
                key={list.shopId}
                onClick={() => handleSearch(list.shopId)}
              >
                <RecentQueryList>
                  <VerticalFocus />
                  <WrapperFaSearch>
                    <ImLocation size={15} />
                  </WrapperFaSearch>
                  <RecentSearchQueryContent>
                    <RecentSearchQuery>
                      <ShopName>{list.shopName}</ShopName>
                      <ShopAddress>{list.shopAddress}</ShopAddress>
                    </RecentSearchQuery>
                    <RecentSearchInfo>
                      <RecentInfoTime>{list.bread.join(',')}</RecentInfoTime>
                    </RecentSearchInfo>
                  </RecentSearchQueryContent>
                </RecentQueryList>
              </RecentQueryWrap>
            );
          })}
      </SuggestionListsBox>
    </>
  );
};

const WrapperFaSearch = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const ShopName = styled.div`
  text-align: left;
  font-size: 0.9375rem;
  letter-spacing: -0.0469rem;
  line-height: 1.3125rem;
  color: rgb(32, 32, 32);
`;

const ShopAddress = styled.div`
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  color: rgb(126, 126, 126);
  overflow: hidden;
  letter-spacing: -0.0406rem;
  white-space: nowrap;
  text-align: left;
`;

const SuggestionListsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-lists: center;
  padding: 20px 20px 10px;
`;

const SuggestionListsTitle = styled.span`
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgb(32, 32, 32);
`;

const SuggestionListsClear = styled.button`
  font-size: 0.875rem;
  color: rgb(158, 158, 158);
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: transparent;
`;

const SuggestionListsBox = styled.div``;

const RecentQueryWrap = styled.div`
  height: 42px;
`;

const RecentQueryList = styled.button`
  display: flex;
  align-lists: center;
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
  align-lists: center;
  width: 100%;
  text-align: left;
  font-size: 0.9375rem;
  color: rgb(32, 32, 32);
`;

const RecentSearchQuery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RecentSearchInfo = styled.div`
  display: flex;
  align-lists: center;
  height: 41px;
  padding-top: 0px;
`;

const RecentInfoTime = styled.span`
  display: flex;
  align-lists: center;
  gap: 13px;
  font-size: 0.875rem;
  color: rgb(158, 158, 158);
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-lists: center;
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

export default SuggestionLists;
