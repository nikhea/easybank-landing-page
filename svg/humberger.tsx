import React from 'react';
import Svg, { IconProps } from '../layout/Header.style';
const humberger = (props: IconProps) => {
  const { className } = props;
  return (
    <Svg className={className}>
      <g fill="#2D314D" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
      </g>
    </Svg>
  );
};

export default humberger;

// xmlns="http://www.w3.org/2000/svg" width="24" height="11"
