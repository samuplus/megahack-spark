import React from 'react'

import RemedyIcon from 'icons/Remedy'

import * as S from './styles'

const RemediesCard = () => (
  <S.Card>
    <S.Title>Medicamentos</S.Title>
    <S.IconWrapper>
      <RemedyIcon />
    </S.IconWrapper>

    <S.Text>
      Você ainda não possui médicamentos
      receitados
    </S.Text>
  </S.Card>
)

export default RemediesCard
