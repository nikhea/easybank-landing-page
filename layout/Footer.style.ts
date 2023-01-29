import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import { Icon } from '../components/features/features.style';

export const FooterBackground = tw.div`
// flex
// justify-between
// items-center
// my-10
bg-dark-blue
py-10
`;
export const ItemContainer = tw.div`
flex
flex-col
lg:flex-row
// bg-red-200
// justify-center
justify-between
// text-center
items-center
w-full
h-full
// bg-red-900

// my-10

`;
export const LinkGrid = tw.div`
lg:grid
grid-cols-2
text-white
mt-5
`;
export const LinkGridItems = tw.div`
lg:grid
text-center
lg:text-left
pt-3
grid-cols-2
cursor-pointer
hover:text-lime-green
`;
export const Content = tw.div`
 flex
 flex-col
 items-center
 lg:items-start
 justify-between
 min-w-[200px]

//  h-[100px]
`;
export const IconContainer = tw.div`
flex
mt-5
justify-between
gap-5
`;
export const RightReserved = tw.div`
text-center
 flex-col
//  justify-between
justify-center
h-full
py-6

`;
export const RightReservedText = tw.div`
// py-6
mt-5
`;
