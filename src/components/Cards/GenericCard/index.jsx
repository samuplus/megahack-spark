import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

const GenericCard = ({
  title,
  icon: Icon,
  text,
  buttonText
}) => (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>

      <S.Text>{text}</S.Text>

      <Button text={buttonText} />
    </S.Card>
  )

export default GenericCard
