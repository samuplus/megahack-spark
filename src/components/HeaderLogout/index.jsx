import React from 'react'

import Logo from 'icons/Logo'
import Button from 'components/Button'

import * as S from './styles'

const HeaderLogout = () => (
  <S.Header>
    <S.HeaderContainer>
      <Logo />

      <Button>Sou um profissional da saúde</Button>
    </S.HeaderContainer>
  </S.Header>
)

export default HeaderLogout
