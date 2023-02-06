import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const MoveToTopBtn = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      <MoveToTopIcon onClick={moveToTop} />
    </div>
  );
};

export default MoveToTopBtn;

const MoveToTopIcon = styled(BsArrowUpCircleFill)`
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  color: lightgray;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
