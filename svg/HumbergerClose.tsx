import React from 'react';
import Svg, { IconProps } from '../layout/Header.style';

const HumbergerClose = (props: IconProps) => {
  const { className } = props;
  return (
    <Svg className={className}>
      <g fill="#2D314D" fillRule="evenodd">
        <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
        <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
      </g>
    </Svg>
  );
};

export default HumbergerClose;
//  width="18"
// xmlns="http://www.w3.org/2000/svg"
//   height="19"
