import React, { useState } from 'react'

import items from 'components/Header/items'

import Logo from 'icons/Logo'
import BurguerMenuIcon from 'icons/BurguerMenu'
import CloseIcon from 'icons/Close'

import * as S from './styles'

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    return setIsMenuOpen(true)
  }

  const closeMenu = () => {
    return setIsMenuOpen(false)
  }

  return (
    <S.MenuMobile opened={isMenuOpen}>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      {!isMenuOpen && (
        <S.Button onClick={openMenu}>
          <BurguerMenuIcon />
        </S.Button>
      )}

      {isMenuOpen && (
        <S.Button onClick={closeMenu}>
          <CloseIcon />
        </S.Button>
      )}

      <S.MenuList>
        {items.map((item) => (
          <S.MenuListItem key={item.name}>{item.name}</S.MenuListItem>
        ))}
      </S.MenuList>
    </S.MenuMobile>
  )
}

export default MenuMobile
