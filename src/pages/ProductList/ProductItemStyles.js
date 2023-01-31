import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  --size: 20px;
  padding-top: var(--size);
  padding-bottom: var(--size);
`;

export const BreadContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 1000px;
  border: none;
  border-radius: 14px;
  padding: 0;
  background-color: #9eb2ae;
  transition: all ease 1s;

  &:hover {
    background-color: #1e5858;
    transform: scale(1.03, 1.03);
  }
`;

export const BreadContents = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 824px;
  height: 170px;
  padding-top: 2px;
  padding-right: 0px;
  padding-bottom: 2px;
  padding-left: 6px;
`;

export const BreadImg = styled.img`
  border: none;
  --size: 150px;
  width: var(--size);
  height: var(--size);
  background-color: white;
  margin: 10px;
`;

export const BreadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  color: white;
`;

export const BreadTitle = styled.div`
  display: flex;
  align-items: flex-start;
  ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;

export const MidInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Category = styled.div``;

export const Tag = styled.div``;

export const Rating = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

export const UserScore = styled.div``;

export const StarIcon = styled.span`
  path {
    color: #ffa300;
  }
  margin-right: 3px;
  .star {
    --size: 15px;
    width: var(--size);
    height: var(--size);
  }
`;
export const Slash = styled.div`
  --size: 3px;
  margin-left: var(--size);
  margin-right: var(--size);
`;

export const HeartIcon = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  margin-right: 3px;
  margin-top: 2px;
  .heart {
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  padding-right: 20px;
  width: 1000px;
`;

export const Review = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: -0.75px;
  text-overflow: ellipsis;
  padding-bottom: 3px;
`;

export const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: -0.7px;
  color: white;
`;

export const WhoLiked = styled.div``;

export const LikedNum = styled.span``;

export const Reviewer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
`;
