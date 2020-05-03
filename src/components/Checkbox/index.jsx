import React from 'react'
import { Field } from 'formik'

export const Checkbox = ({ id, name, className }) => (
  <Field
    name={name}
    render={({ field }) => (
      <input
        id={id}
        type="checkbox"
        className={className}
        checked={field.value}
        {...field}
      />
    )}
  />
)
