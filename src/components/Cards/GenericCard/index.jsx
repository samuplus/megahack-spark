import React from 'react'

import * as S from './styles'

const GenericCard = ({ title, icon: Icon, text }) => (
  <S.Card>
    <S.Title>{title}</S.Title>
    <S.IconWrapper>
      <Icon />
    </S.IconWrapper>

    <S.Text>{text}</S.Text>
  </S.Card>
)

export default GenericCard
