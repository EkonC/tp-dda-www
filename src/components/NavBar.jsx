import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const NavLinkStyled = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.textSoft};
  &.active {
    background: ${({ theme }) => theme.colors.accent};
    color: #0a1226;
    border-color: transparent;
  }
  &:hover { filter: brightness(1.08); text-decoration: none; }
`;

export default function NavBar() {
    return (
        <Nav>
            <NavLinkStyled to="/">Domov</NavLinkStyled>
            <NavLinkStyled to="/docs">Dokumentácia</NavLinkStyled>
            <NavLinkStyled to="/minutes">Zápisnice</NavLinkStyled>
        </Nav>
    );
}