import React from 'react';
import * as desc from './ProductDescStyle.js';
import phonebook from '../../../assets/images/ProductDetail/phone-book.png';
import { CiTimer } from 'react-icons/ci';

const ProductDesc = ({ shopContent }) => {
  return (
    <desc.ProductDescWrap>
      <p>
        <desc.Location />
        <span>{shopContent.address}</span>
      </p>
      <p>
        <desc.Phone src={phonebook} />
        <span>
          {shopContent.shop_number == null
            ? '전화번호가 없습니다 🥺'
            : shopContent.shop_number}
        </span>
      </p>
      <p>
        <desc.Time src={CiTimer} />
        <span>{shopContent.business_hours}</span>
      </p>
    </desc.ProductDescWrap>
  );
};

export default ProductDesc;
