import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <LaptopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </LaptopNav>
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="menu" strokeWidth={1} />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  align-items: baseline;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 18px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 18px 16px;
  }
`;

const LaptopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: clamp(1rem, 8.5vw - 2.25rem, 2rem);
    justify-content: flex-end;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
