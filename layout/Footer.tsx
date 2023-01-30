import React from 'react';
import AppIcon from './AppIconLight';
import { Container } from '../styles/Home.style';
import {
  FooterBackground,
  ItemContainer,
  IconContainer,
  Content,
  LinkGrid,
  LinkGridItems,
  RightReserved,
  RightReservedText,
} from './Footer.style';
import FaceBookIcon from '../svg/SocialSVG/FaceBook';
import InstargramIcon from '../svg/SocialSVG/Instargram';
import TiwtterIcon from '../svg/SocialSVG/Tiwtter';
import YoutubeIcon from '../svg/SocialSVG/Youtube';
import PintrestIcon from '../svg/SocialSVG/Pintrest';
import Button from '../components/Button';
const Footer = () => {
  const footerLinks = [
    'About Us',
    'Contact',
    'Blog',
    'Careers',
    'Support',
    'Privacy Policy',
  ];
  const LinksList = footerLinks.map((links, index: number) => (
    <LinkGridItems key={index}>{links}</LinkGridItems>
  ));
  return (
    <FooterBackground>
      <Container>
        <ItemContainer>
          <Content>
            <AppIcon />
            <IconContainer>
              <FaceBookIcon />
              <YoutubeIcon />
              <TiwtterIcon />
              <PintrestIcon />
              <InstargramIcon />
            </IconContainer>
          </Content>
          <LinkGrid>{LinksList}</LinkGrid>
          <RightReserved>
            <Button />
            <RightReservedText>
              © Easybank. All Rights Reserved
            </RightReservedText>
          </RightReserved>
        </ItemContainer>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
