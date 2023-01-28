import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

export const Container = tw.div`
w-[90%]
m-auto
// bg-regal-blue
`;

export const Grid = tw.div`
  grid
 lg:grid-cols-4
 md:grid-cols-2
  gap-10
  w-full
  my-10
`;
export const GridItems = tw.div`
w-full
h-full
flex
flex-col
// my-10
`;
