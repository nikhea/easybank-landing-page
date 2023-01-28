import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

export interface IconProps {
  className?: string;
}

export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  /* width: 52px;
    height: 52px; */
`;
