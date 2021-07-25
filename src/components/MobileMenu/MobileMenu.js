/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { COLORS, QUERIES } from "../../constants";

import MainNav from "../MainNav";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <SlideOutMenu>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={1} />
        </CloseButton>
        <StyledMainNav />
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </SlideOutMenu>
    </DialogOverlay>
  );
};

const SlideOutMenu = styled(DialogContent)`
  &[data-reach-dialog-content] {
    height: 100%;
    margin: 0 0 0 auto;
    padding: 32px;
    width: min(90vw, 300px);
  }
  animation: slide 200ms ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes slide {
    from {
      width: 0px;
    }
    to {
      width: min(90vw, 300px);
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`;

const StyledMainNav = styled(MainNav)`
  flex-direction: column;
  gap: 22px;
  margin: 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: 1rem;
  text-decoration: none;
`;

export default MobileMenu;
