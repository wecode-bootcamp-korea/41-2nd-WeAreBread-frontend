import React from 'react';
import * as PS from './ProductScoreStyle';
import ScoreBg from '../../../../../assets/images/ProductDetail/ScoreBg.png';
import ScoreActive from '../../../../../assets/images/ProductDetail/ScoreActive.png';

const PrductScore = ({ shopContent }) => {
  const starView = shopContent.average_rating * 20;

  return (
    <PS.ProductScoreWrap>
      <div className="starBox" style={{ width: starView }}>
        <img className="pointOfStar" alt="별" src={ScoreActive} />
      </div>
      <img className="backgroundStar" alt="별" src={ScoreBg} />
      <span>{shopContent.average_rating}</span>
    </PS.ProductScoreWrap>
  );
};

export default PrductScore;
