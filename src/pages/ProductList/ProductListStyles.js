import styled from 'styled-components';

export const Background = styled.div`
  background-color: #f0f0f0;
  ${({ theme }) => theme.common.flexCenterColumn};
  min-height: calc(100vh - 206px);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1070px;
  background-color: white;
  border-radius: 14px;
  margin-top: 10px;
`;

export const SortContents = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

export const SortList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`;

export const Order = styled.button`
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.l};
  border: none;
  border-radius: 6px;
  width: auto;
  height: 40px;
  background-color: #9eb2ae;
  color: white;
  margin-left: 20px;
  --size: 15px;
  padding-right: var(--size);
  padding-left: var(--size);
  transition: all ease 1s;

  &:hover {
    background-color: #1e5858;
  }
  &:focus {
    background-color: #1e5858;
  }
`;

export const CurrentLocation = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  padding-left: 10px;
  padding-right: 30px;
`;
export const HoverButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: #9eb2ae;

  &:hover {
    margin-bottom: -1px;
    border-bottom: 1px solid #1e5858;
    color: #1e5858;
  }
`;

export const CurrentIcon = styled.div`
  margin-top: 3px;
  .location {
    --size: 20px;
    width: var(--size);
    height: var(--size);
  }
`;

export const CurrentName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
  padding-left: 5px;
`;

export const MapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  margin-left: 40px;
  height: 50px;
`;

export const MapTitle = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: 22px;
`;

export const SubTitle = styled.div`
  margin-right: 5px;
`;

export const SubInfo = styled.div`
  display: flex;
`;

export const PlaceCount = styled.div`
  color: ${({ theme }) => theme.color.redBrown};
  font-weight: bold;
`;

export const ShareIcon = styled.button`
  border: none;
  background-color: white;
  color: #9eb2ae;
  .share {
    --size: 20px;
    width: var(--size);
    height: var(--size);
  }
  &:hover {
    color: #1e5858;
  }
`;
