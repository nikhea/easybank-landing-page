import React from 'react';

const s = () => {
  return <div>s</div>;
};

export default s;

// import type { NextPage } from 'next';
// import Image from 'next/image';

// import {
//   Container,
//   Main,
//   Title,
//   TitleLink,
//   Description,
//   DescriptionCodeHighlight,
//   Cards,
//   Card,
//   CardTitle,
//   Footer,
//   FooterCopyRight,
//   Button,
//   ButtonGroup,
//   Section,
//   SubTitle,
// } from './Home.style

// const HomePage: NextPage = () => {
//   return (
//     <Container>
//       <Main>
//         <Title>
//           Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
//         </Title>

//         <Description>
//           Get started by editing{' '}
//           <DescriptionCodeHighlight>pages/index.tsx</DescriptionCodeHighlight>
//         </Description>

//         <Cards>
//           <Card href="https://nextjs.org/docs">
//             <CardTitle>Documentation &rarr;</CardTitle>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </Card>
//           <Card href="https://nextjs.org/learn">
//             <CardTitle>Learn &rarr;</CardTitle>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </Card>

//           <Card href="https://github.com/vercel/next.js/tree/canary/examples">
//             <CardTitle>Examples &rarr;</CardTitle>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </Card>

//           <Card
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </Card>
//         </Cards>
//         <Section>
//           <SubTitle>Conditional Button</SubTitle>
//           <ButtonGroup>
//             <Button>Primary</Button>
//             <Button outline>Primary Outline</Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button disabled>Primary Disabled</Button>
//             <Button outline disabled>
//               Primary Outline Disabled
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button danger>Danger</Button>
//             <Button danger outline>
//               Danger Outline
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button danger disabled>
//               Danger Disabled
//             </Button>
//             <Button danger outline disabled>
//               Danger Outline Disabled
//             </Button>
//           </ButtonGroup>
//         </Section>
//       </Main>

//       <Footer>
//         <FooterCopyRight
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//         </FooterCopyRight>
//       </Footer>
//     </Container>
//   );
// };

// export default HomePage;

// import styled from 'styled-components';
// import tw from 'twin.macro';
// import Link from 'next/link';

// // types
// type ButtonProps = {
//   danger?: boolean;
//   outline?: boolean;
//   disabled?: boolean;
// };

// export const Container = tw.div`
//   flex
//   min-h-screen
//   flex-col
//   items-center
//   justify-center
//   py-2
// `;

// export const Main = tw.main`
//   flex
//   w-full
//   flex-1
//   flex-col
//   items-center
//   justify-center
//   px-20
//   text-center
// `;

// export const Section = tw.section`
//   flex
//   flex-col
//   items-center
//   justify-center
//   w-full
//   p-3
// `;

// export const Title = tw.h1`
//   text-6xl
//   font-bold
// `;

// export const TitleLink = styled(Link)(
//   tw`
//   text-blue-500
//   hover:text-blue-700
//   focus:text-blue-700
//   `
// );

// export const Description = tw.p`
//   mt-3
//   text-2xl
// `;

// export const DescriptionCodeHighlight = tw.code`
//   rounded-md
//   bg-gray-100
//   p-3
//   font-mono
//   text-lg
// `;

// export const Cards = tw.div`
//   mt-6 flex
//   max-w-4xl
//   flex-wrap
//   items-center
//   justify-around
//   sm:w-full
// `;

// export const Card = styled(Link)(
//   tw`
//   mt-6
//   w-96
//   rounded-xl
//   border
//   p-6
//   text-left
//   hover:text-blue-600
//   focus:text-blue-600
//   `
// );

// export const CardTitle = tw.h3`
//   text-2xl
//   font-bold
// `;

// export const CardDescription = tw.p`
//   mt-4
//   text-xl
// `;

// export const SubTitle = tw.h2`
//   text-4xl
//   font-bold
// `;

// export const ButtonGroup = tw.div`
//   flex
//   gap-2
//   flex-wrap
//   justify-center
//   p-1
// `;

// export const Button = styled.button<ButtonProps>(
//   ({ danger = false, outline = false, disabled = false }) => [
//     danger
//       ? tw`
//         bg-red-500
//         hover:bg-red-700
//         text-white
//       `
//       : tw`
//         bg-blue-500
//         hover:bg-blue-700
//         text-white
//       `,
//     outline
//       ? danger
//         ? tw`
//           bg-transparent
//           border
//           border-red-500
//           hover:border-transparent
//           hover:bg-red-500
//           text-red-700
//           hover:text-white
//         `
//         : tw`
//           bg-transparent
//           border
//           border-blue-500
//           hover:border-transparent
//           hover:bg-blue-500
//           text-blue-700
//           hover:text-white
//         `
//       : tw``,
//     disabled ? tw`opacity-50 cursor-not-allowed` : tw`cursor-pointer`,
//     tw`
//       font-bold
//       py-2
//       px-4
//       rounded
//     `,
//   ]
// );

// export const Footer = tw.footer`
//   flex
//   h-24
//   w-full
//   items-center
//   justify-center
//   border-t
// `;

// export const FooterCopyRight = tw.a`
//   flex
//   items-center
//   justify-center
//   gap-2
// `;
