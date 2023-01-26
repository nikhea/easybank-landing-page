import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import Humberger from '../svg/humberger';
// import Humberger from '../svg/images/icon-hamburger.svg';

export interface IconProps {
  className?: string;
}
export const ItemContainer = tw.div`
flex
justify-between
my-10
`;

export const HumbergerMenu = styled(Humberger)(
  tw`
//   hidden
    `
);
export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 52px;
  height: 52px;
`;
