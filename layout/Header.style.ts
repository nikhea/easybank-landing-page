import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import Humberger from '../svg/humberger';
import HumbergerClose from '../svg/HumbergerClose';

export interface IconProps {
  className?: string;
}
export const ItemContainer = tw.div`
flex
justify-between
items-center
my-10
`;

export const DeskTopMenu = tw.nav`
hidden
md:flex

`;
export const DeskTopList = tw.ul`
flex
gap-5
items-center
justify-center


`;
// export const DeskTopListItem = tw.li`
// capitalize
// text-xl
// hover:border-b-4
// pb-3
// // rounded-full
// ease-in-out
// duration-100

// // border-gradient-to-r
// from-lime-green
// to-bright-cyan
// `;
export const DeskTopListItem = styled.li`
  padding-bottom: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: capitalize;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #000;
    /* border: 0px ; */
    border-bottom: 1px solid;
    border-image-slice: 1;
    /* border-width: 5px; */
    border-image-source: linear-gradient(to right, #31d35c, #2bb7da);
  }
`;
export const NavButton = tw.button`
capitalize
py-1
hidden
md:flex
text-white
py-3
px-5
rounded-full
ease-in-out
duration-100
relative
z-10
bg-gradient-to-r
from-lime-green
to-bright-cyan
hover:from-bright-cyan
hover:to-lime-green
// bg-linear-gradient(to right, $lime-green, $bright-cyan);


`;
export const MainButton = tw.button`
capitalize
py-1
// hidden
md:flex
text-white
py-3
px-5
rounded-full
ease-in-out
duration-100
relative
z-10
bg-gradient-to-r
from-lime-green
to-bright-cyan
hover:from-bright-cyan
hover:to-lime-green
// bg-linear-gradient(to right, $lime-green, $bright-cyan);


`;
export const MobileMenu = tw.nav`
flex
justify-center
items-center
h-[50%]
w-[90%]
md:hidden
bg-white shadow-2xl
rounded-[24px]
py-1
transition
ease-in-out
duration-100
absolute
mt-5
overflow-y-hidden 
z-[9999999999999999999]
// transform
// translate(50%, 50%)
`;
export const Overlay = styled.div`
  /* display: block; */
  width: 100%;
  /* height: 901.8%; */
  background: linear-gradient(
    to bottom,
    rgba(hsl(233, 26%, 24%), 0.8),
    rgba(hsl(220, 16%, 96%), 0.8)
  );
  background: blue;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  opacity: 0.2;
  transition: all 0.3s;
  backface-visibility: hidden;
  z-index: 99;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileList = tw.ul`
flex
flex-col
items-center
justify-center


`;
export const MobileListItem = tw.li`
capitalize
py-1
// hover:border
hover:text-lime-green
text-lg

`;

export const HumbergerContainer = tw.div` 
cursor-pointer`;
export const HumbergerMenu = styled(Humberger)(
  tw`
  md:hidden
  w-[24px] h-[11px]
    `
);
export const HumbergerCloseMenu = styled(HumbergerClose)(
  tw`
    md:hidden
    w-[18px] h-[19px]
    relative
    z-[999999999999]
      `
);
export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  /* width: 52px;
  height: 52px; */
`;
