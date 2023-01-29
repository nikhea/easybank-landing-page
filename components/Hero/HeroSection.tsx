import React from 'react';
import ImageMockups from '../../svg/images/image-mockups.png';
import { Container } from '../../styles/Home.style';
import {
  HeroImageContainer,
  HeroImageMobile,
  HeroIntro,
  HeroTextContainer,
  HeroTitle,
  SubText,
} from './HeroSection.style';
import Button from '../Button';
import IntroMobile from '../../svg/images/bg-intro-mobile.svg';

const HeroSection = () => {
  return (
    <div className="relative z-10 bg-very-light-gray">
      <Container>
        <HeroIntro>
          <HeroTextContainer>
            <HeroTitle> Next generation digital banking</HeroTitle>
            <SubText>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </SubText>
            <Button />
          </HeroTextContainer>
          <HeroImageContainer>
            <HeroImageMobile alt="ImageMockups" src={ImageMockups} />
          </HeroImageContainer>
        </HeroIntro>
      </Container>
    </div>
  );
};

export default HeroSection;

// http://192.168.8.1/html/home.html
