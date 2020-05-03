import React from 'react'

import * as S from './styles'

const Button = ({ text, onClick = () => { } }) => (
  <S.Button onClick={onClick}>{text}</S.Button>
)

export default Button
