/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Field } from 'formik'

import * as S from './styles'

const Checkbox = ({
  id, name, className, label
}) => {
  return (
    <Field
      name={name}
      render={({ field }) => (
        <S.Checkbox>
          <input
            id={id}
            type="checkbox"
            className={className}
            checked={field.value}
            {...field}
          />
          <S.CheckboxLabel>{label}</S.CheckboxLabel>
        </S.Checkbox>
      )}
    />
  )
}

export default Checkbox
