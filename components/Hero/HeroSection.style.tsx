import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';
import IntroMobile from '../../svg/images/bg-intro-desktop.svg';

// export const HeroImage = styled()
export const HeroIntro = tw.div`
    flex
    flex-col-reverse
    items-center
    md:flex-row
    // overflow-hidden
 
`;
export const HeroTextContainer = tw.div`
// py-[8rem]
py-[2rem]
w-full
md:w-[66%]
text-center
md:text-left

`;

export const HeroTitle = tw.h1`
md:mt-[4rem]
lg:mt-[0]
md:text-[3.2rem]
`;

export const SubText = tw.p`
mb-[3rem]
`;
export const HeroImageContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-image: url('/images/bg-intro-desktop.svg');
  background-position: 8rem -8rem;
  background-repeat: no-repeat;
  height: 100vh;
  left: 0;
  left: 5rem;
  margin: 0;
  background-size: cover;
  /* overflow: ; */
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    background-image: url('/images/bg-intro-mobile.svg');
    background-position: 0rem 0rem;
    left: 0;
  }
`;
/* background-position: 3rem -15rem; */

export const HeroImageDesktop = styled(Image)(
  tw` 
  hidden
  md:flex
   absolute
  right-10
  left-0
  overflow-hidden
  top-[-2rem]
  left-[10rem]
  w-[90%]
  // w-full
  `
);
export const HeroImageMobile = styled(Image)(
  tw` md:hidden
   absolute
  right-0
  // top-[-6rem]
  `
);
// bg-[url('/img/hero-pattern.svg')]
// bg-[url('../svg/images/bg-intro-mobile.svg')]
// padding-bottom: 8rem;
// background-image: url(../images/bg-intro-desktop.svg);
// background-position: 3rem -15rem
// bg-cover
// bg-center bg-no-repeat
// relative bg-fixed object-cover
// bg-[url('../svg/images/bg-intro-mobile.svg')]
