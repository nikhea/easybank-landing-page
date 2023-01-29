import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';

export const MainTitle = tw.h1`
  text-3xl
  text-center
  md:text-6xl
  md:text-left
  my-20
`;

export const ImageContent = tw.div`
flex
h-full

`;
export const ArticleTitle = tw.h1`
font-bold
text-2xl
md:text-xl
hover:text-lime-green
cursor-pointer

`;
export const Articledescription = tw.p``;
export const ArticleAuthor = tw.p`
my-3`;
export const ImageArticle = styled(Image)(tw`flex object-cover w-full h-full`);
