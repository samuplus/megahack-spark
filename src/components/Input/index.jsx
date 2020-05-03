/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { ErrorMessage } from 'formik'

import * as S from './styles'

const Input = ({ name, type, label }) => (
  <S.InputWrapper>
    <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
    <S.InputField type={type} name={name} />
    <ErrorMessage name={name} component="div" />
  </S.InputWrapper>
)

export default Input
