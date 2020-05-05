import styled, { css } from 'styled-components'

import breakpoints from 'common/breakpoints'

export const MenuMobile = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;

  ${(props) => props.opened && css`
    ul {
      max-height: 500px;
    }
  `}

  @media(${breakpoints.LARGE}) {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  svg {
    height: 30px;
    width: 90px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  padding: 12px;

  svg {
    height: 25px;
    width: 20px;
  }
`

export const MenuList = styled.ul`
  background-color: white;
  left: 50%;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);
  transition: max-height .2s ease;
  top: 55px;
  width: 90%;
  z-index: 5;
`

export const MenuListItem = styled.li`
  border-bottom: 1px solid #E2E5E6;
  padding: 15px 25px;

  &:last-of-type {
    border-bottom: none;
  }
`
