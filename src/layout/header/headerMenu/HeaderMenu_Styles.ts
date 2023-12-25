import styled, {css} from 'styled-components';
import {theme } from "../../../styles/Theme";
import { Link } from 'react-scroll';


//Menu

const MenuItem = styled.li`
`

const NavLink = styled(Link)`
  font-size: 20px;
  padding: 20px;

  @media ${theme.media.mobile} {
    font-size: 36px;
  }

  &:hover,
  &.active {
    color: ${theme.colors.accent};
  }
`

//MobileMenu
const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: ${theme.colors.primaryBg};
  display: none;

  ${props => props.isOpen && css <{isOpen: boolean}> `
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 25px;
  right: 20px;
  background-color: ${theme.colors.primaryBg};
  z-index: 9999999;
  border: none;
  cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      box-shadow: 0 8px 0 0 ${theme.colors.font}, 0 16px 0 0 ${theme.colors.font};

      ${props => props.isOpen && css <{isOpen: boolean}> `
        transform: rotate(45deg);
        box-shadow: none;
      `}
    }

      &::after {
        ${props => props.isOpen && css <{isOpen: boolean}> `
          transform: rotate(-45deg);
        `}
      }
`

//Desktop
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

`

export const S = {
  DesktopMenu,
  MenuItem,
  NavLink,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton
}
