import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';

const CardItem = ({ el }) => {
  const { id, imgUrl, name, address, bread, review, score, like } = el;

  return (
    <CardWrapper key={id}>
      <LinkToDetail to={'/productList/' + id}>
        <Photo src={imgUrl} alt="사진" />
        <StoreInfoSection className="hovered">
          <InfoTitle>{name}</InfoTitle>
          <StoreInfo>
            <span>{address}</span>|<span>{bread}</span>
          </StoreInfo>
          <StoreInfoLine />
          <StoreReviewSection>"{review}"</StoreReviewSection>
          <StoreRating>
            <Star>
              <StarIcon />
            </Star>
            <Rating>{score}</Rating>
            <Heart>
              <HeartIcon />
            </Heart>
            <Rating>{like}</Rating>
          </StoreRating>
        </StoreInfoSection>
        <RatingSection className="notHovered">
          <Star>
            <StarIcon />
          </Star>
          <Rating>{score}</Rating>
          <Heart>
            <HeartIcon />
          </Heart>
          <Rating>{like}</Rating>
        </RatingSection>
      </LinkToDetail>
      <StoreName>{name}</StoreName>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  width: 278px;
  padding: 30px 15px 0 15px;
`;

const LinkToDetail = styled(Link)`
  position: relative;
  height: 240px;

  &:hover {
    .hovered {
      visibility: visible;
    }

    .notHovered {
      visibility: hidden;
      display: flex;
      align-items: center;
    }
  }
`;

const StoreName = styled.h2`
  width: 100%;
  margin-top: 20px;
  margin-left: 30px;
  text-align: left;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  font-weight: 700;
`;

const Photo = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 15px;
`;

const RatingSection = styled.div`
  visibility: visible;
  position: relative;
  bottom: 30px;
  right: -100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 140px;
  height: 30px;
  padding-right: 20px;
  background-color: rgb(0, 0, 0, 0.5);
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  border-bottom-right-radius: 15px;
  border-top-left-radius: 30px;
`;

const Star = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  color: orange;
`;

const StarIcon = styled(AiFillStar)`
  position: relative;
  top: 1px;
`;

const Rating = styled.span`
  margin-left: 5px;
  color: white;
`;

const Heart = styled.span`
  margin-left: 10px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
`;

const HeartIcon = styled(BsHeartFill)`
  position: relative;
  top: 2px;
  color: red;
`;

const StoreInfoSection = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 180px;
  padding: 20px 20px 10px 20px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const StoreInfo = styled.div`
  font-size: 18px;
`;

const StoreInfoLine = styled.hr`
  width: 200px;
  margin: 8px 0;
`;

const StoreRating = styled.div`
  margin-top: 20px;
`;
const StoreReviewSection = styled.div``;
export default CardItem;
