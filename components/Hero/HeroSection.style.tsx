import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';
import IntroMobile from '../../svg/images/bg-intro-mobile.svg';

// export const HeroImage = styled()
export const HeroIntro = tw.div`
    flex
    flex-col-reverse
    items-center
    md:flex-row
 
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
md:text-[3.2rem]
`;

export const SubText = tw.p`
mb-[3rem]
`;
export const HeroImageContainer = styled.div`
  /* relative
 block
 w-full
 h-full
 bg-[url('../svg/images/bg-intro-mobile.svg')] */
`;

export const HeroImageMobile = styled(Image)(
  tw` md:hidden
  //  absolute
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
