import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';
export const MainTitle = tw.h1`
  text-3xl
  text-center
//   md:text-6xl
  md:text-left
`;

export const MainDescription = tw.p`
  text-xl
  lg:w-[50%]
  text-center
//   md:text-6xl
  md:text-left
`;
export const Title = tw.h1`
font-light
text-2xl
md:text-xl
cursor-pointer
// text-center
// lg:text-left

`;
export const Description = tw.p`
text-center
w-[90%]
lg:w-full
lg:text-left
`;
export const Icon = tw.p`
  w-[52px]
  h-[100px] 
`;
export const GridItems = tw.div`
w-full
h-full
flex
flex-col
items-center
lg:items-start
// my-10

`;
