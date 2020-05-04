import React from 'react'

import history from 'common/browser-history'

import Logo from 'icons/Logo'
import Button from 'components/Button'

import * as S from './styles'

const HeaderLogout = () => (
  <S.Header>
    <S.HeaderContainer>
      <Logo />

      <Button onClick={() => history.push('/cadastro-profissional')}>
        Sou um profissional da saúde
      </Button>
    </S.HeaderContainer>
  </S.Header>
)

export default HeaderLogout
