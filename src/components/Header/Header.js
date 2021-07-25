import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MainNav from "../MainNav";
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
        <LaptopNav className="laptop-nav" />
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
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

const LaptopNav = styled(MainNav)`
  &.laptop-nav {
    @media ${QUERIES.tabletAndSmaller} {
      display: none;
    }
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

export default Header;
