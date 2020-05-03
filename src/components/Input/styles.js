import styled from 'styled-components'
import { Field } from 'formik'

import colors from 'common/colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
`

export const InputLabel = styled.label`
  color: ${colors.blueDark};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const InputField = styled(Field)`
  border: 1px solid #D3DCE6;
  border-radius: 8px;
  height: 35px;
  padding: 4px 12px;
  outline: none;
`
