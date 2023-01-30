import React from 'react';
import styled from 'styled-components';
import { showModal } from '../../../../../../redux/modules/modal';
import { useDispatch } from 'react-redux';

const ProductReviewUpdateBtn = ({ review }) => {
  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(showModal());
  };

  return <ReviewUpdate onClick={updateHandler}>수정</ReviewUpdate>;
};

export default ProductReviewUpdateBtn;

const ReviewUpdate = styled.button`
  margin-right: 10px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
`;
