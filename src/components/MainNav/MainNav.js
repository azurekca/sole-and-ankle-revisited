import React from "react";
import styled from "styled-components/macro";

const MainNav = ({ className }) => {
  return (
    <Wrapper className={className}>
      <NavLink href="/sale">Sale</NavLink>
      <NavLink href="/new">New&nbsp;Releases</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/kids">Kids</NavLink>
      <NavLink href="/collections">Collections</NavLink>
      <NavLink href="/gevurkenfleurken">Gevurkenfleurken</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.5vw - 4.25rem, 48px);
  margin: 0px 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--medium);

  &:first-of-type {
    color: var(--secondary-color);
  }
`;

export default MainNav;
