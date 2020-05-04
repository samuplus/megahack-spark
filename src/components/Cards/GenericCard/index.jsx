import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

const GenericCard = ({
  customClass,
  title,
  icon: Icon,
  text,
  buttonText,
  content: Content
}) => {
  return (
    <S.Card className={customClass} hasContent={Content}>
      <S.Title>{title}</S.Title>

      {Content && (
        <Content />
      )}

      {!Content && (
        <>
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
          <S.Text>{text}</S.Text>
          <Button>{buttonText}</Button>
        </>
      )}

    </S.Card>
  )
}

export default GenericCard
