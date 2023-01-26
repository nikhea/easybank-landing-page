import { useState } from 'react';
import { Container } from '../styles/Home.style';
import AppIcon from '../svg/AppIcon';
import HumbergerClose from '../svg/HumbergerClose';
import Humberger from '../svg/humberger';
import { ItemContainer, HumbergerMenu } from './Header.style';
const Header = () => {
  const navList = ['home', 'about', 'contact', 'blog', 'careers'];
  return (
    <Container>
      <ItemContainer>
        <AppIcon />
        <HumbergerMenu />
      </ItemContainer>
    </Container>
  );
};

export default Header;
{
  /* <HumbergerClose /> */
}
