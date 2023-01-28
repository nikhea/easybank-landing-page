import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';

// export const HeroImage = styled()
export const HeroIntro = tw.div`
    flex
    flex-col-reverse
    items-center
    md:flex-row
    bg-very-light-gray
    relative
    z-10
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
export const HeroImageContainer = tw.div`
 relative
 block
 w-full
 h-full
`;

export const HeroImageMobile = styled(Image)(
  tw`
//    absolute
//   right-0
//   top-[-6rem]
  `
);
// bg-[url('../svg/images/bg-intro-mobile.svg')]
// padding-bottom: 8rem;
// background-image: url(../images/bg-intro-desktop.svg);
// background-position: 3rem -15rem
// bg-cover
// bg-center bg-no-repeat
// relative bg-fixed object-cover
// bg-[url('../svg/images/bg-intro-mobile.svg')]
