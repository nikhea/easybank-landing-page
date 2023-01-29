import React from 'react';
import Svg, { IconProps } from '../SVG';
import styled from 'styled-components';

const StyledSvg = styled(Svg)`
  cursor: pointer;
  width: 20 !important;
  height: 20 !important;
  transition: fill 0.25s ease-in-out;

  &:hover path {
    fill: hsl(136, 65%, 51%);
  }
`;
const FaceBookIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <StyledSvg width="20" height="20" className={`${className}`}>
      <path
        fill="#FFFF"
        d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
      />
    </StyledSvg>
  );
};
export default FaceBookIcon;
// hover:text-blue-500 transition-colors duration-150
