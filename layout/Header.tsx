import { useState } from 'react';
import Link from 'next/link';
import { Container } from '../styles/Home.style';
import AppIcon from '../svg/AppIcon';
import {
  ItemContainer,
  HumbergerMenu,
  HumbergerCloseMenu,
  DeskTopList,
  DeskTopMenu,
  DeskTopListItem,
  MobileMenu,
  MobileList,
  MobileListItem,
  HumbergerContainer,
  NavButton,
} from './Header.style';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navList = ['home', 'about', 'contact', 'blog', 'careers'];
  return (
    <Container>
      <ItemContainer>
        <AppIcon />
        <DeskTopMenu>
          <DeskTopList>
            {navList.map((item, index) => (
              <DeskTopListItem key={index}>
                <Link href={`/`}>{item}</Link>
              </DeskTopListItem>
            ))}
          </DeskTopList>
        </DeskTopMenu>
        <NavButton> Request Invite</NavButton>
        <HumbergerContainer onClick={toggleMenu}>
          <div>{!isMenuOpen ? <HumbergerMenu /> : <HumbergerCloseMenu />}</div>
        </HumbergerContainer>
      </ItemContainer>
      {isMenuOpen ? (
        <MobileMenu>
          <MobileList>
            {navList.map((item, index) => (
              <MobileListItem key={index}>
                <Link href={`/`}>{item}</Link>
              </MobileListItem>
            ))}
          </MobileList>
        </MobileMenu>
      ) : null}
    </Container>
  );
};

export default Header;
