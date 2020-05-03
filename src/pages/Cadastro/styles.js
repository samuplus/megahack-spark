import styled from 'styled-components'

import colors from 'common/colors'

import Container from 'components/Container'

export const Content = styled.section`
  background-color: ${colors.backgroundContent};
  padding: 80px 0;
`

export const CadastroContainer = styled(Container)``

export const Title = styled.h1`
  color: ${colors.blue};
  font-size: 28px;
  margin-bottom: 22px;
  text-align: center;
`

export const FormWrapper = styled.article`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 50px 150px;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`

export const FormField = styled.div`
  display: flex;
  flex-flow: column;
  
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }

  label {
    color: ${colors.blueDark};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid #D3DCE6;
    border-radius: 8px;
    height: 35px;
    padding: 4px 12px;
    outline: none;
  }
`
