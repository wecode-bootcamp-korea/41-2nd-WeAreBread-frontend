import React from 'react';
import * as Info from './ProductInfoStyle';
import test from '../../../../assets/images/ProductDetail/KakaoTalk_Photo_2023-01-31-11-16-59.jpeg';
import ProductScore from './ProductScore/ProductScore';

const ProductInfo = ({ shopContent }) => {
  return (
    <Info.ProductInfoWrap>
      <Info.Image src={test} />
      <Info.ProductInfoContent>
        <Info.ProductInfoDesc>
          <p>{shopContent.name}</p>
          <p>
            <span>{shopContent.address?.toString().slice(5, 14)} | </span>
            <span>{shopContent.breadTypes}</span>
          </p>
          <ProductScore shopContent={shopContent} />
        </Info.ProductInfoDesc>
      </Info.ProductInfoContent>
    </Info.ProductInfoWrap>
  );
};

export default ProductInfo;
