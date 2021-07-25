import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

const MainNav = ({ className }) => {
  return (
    <Wrapper className={className}>
      <NavLink href="/sale">Sale</NavLink>
      <NavLink href="/new">New&nbsp;Releases</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/kids">Kids</NavLink>
      <NavLink href="/collections">Collections</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
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

export default MainNav;
