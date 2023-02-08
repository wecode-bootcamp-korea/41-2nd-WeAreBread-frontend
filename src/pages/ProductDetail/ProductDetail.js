import React, { useEffect, useState } from 'react';
import * as detail from './ProductDetailStyle';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import ProductDesc from './Components/ProductDesc';
import ProductReview from './Components/ProductReview/ProductReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readReviewListAsync } from '../../redux/modules/review';

const ProductDetail = () => {
  const [shopContent, setShopContent] = useState({});
  const dispatch = useDispatch();
  const reviewList = useSelector(state => state.review);
  const { isLoaded, data } = reviewList;
  const params = useParams();
  const shopId = params.id;

  useEffect(() => {
    !isLoaded && dispatch(readReviewListAsync());
  }, [dispatch, isLoaded]);

  useEffect(() => {
    fetch(`http://138.2.112.49:3000/shops/shop_id/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setShopContent(data.list[0]);
      });
  }, []);

  return (
    <detail.ProductDetailWrap>
      <ProductInfo shopContent={shopContent} />
      <ProductDesc shopContent={shopContent} />
      <ProductReview reviewList={data} shopId={shopId} />
    </detail.ProductDetailWrap>
  );
};
export default ProductDetail;
