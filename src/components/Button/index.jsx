import React from 'react'

import * as S from './styles'

const Button = ({ children, onClick = () => { }, theme }, props) => (
  <S.Button onClick={onClick} theme={theme} {...props}>{children}</S.Button>
)

export default Button
