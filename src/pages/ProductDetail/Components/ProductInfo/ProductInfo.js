import React from 'react';
import ShopLikeBtn from '../../../../components/ShopLikeBtn/ShopLikeBtn';
import * as Info from './ProductInfoStyle';
import ProductMap from './ProductMap/ProductMap';
import ProductScore from './ProductScore/ProductScore';

const ProductInfo = ({ shopContent }) => {
  return (
    <Info.ProductInfoWrap>
      <Info.Image src={shopContent.review_image} />
      <Info.ProductInfoContent>
        <Info.ProductInfoDesc>
          <p>{shopContent.name}</p>
          <p>
            <span>{shopContent.address?.toString().slice(5, 14)} | </span>
            <span>{shopContent.bread}</span>
          </p>
          <ProductScore shopContent={shopContent} />
        </Info.ProductInfoDesc>
        <Info.Test>
          <Info.ProductInfoLike>
            <ShopLikeBtn
              shopId={shopContent.id}
              likeCount={shopContent.likeCount}
            />
          </Info.ProductInfoLike>
          <ProductMap shopContent={shopContent} />
        </Info.Test>
      </Info.ProductInfoContent>
    </Info.ProductInfoWrap>
  );
};

export default ProductInfo;
