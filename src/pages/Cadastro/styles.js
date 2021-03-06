import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

import Container from 'components/Container'

export const Content = styled.section`
  background-color: ${colors.backgroundContent};
`

export const CadastroContainer = styled(Container)`
  padding-bottom: 30px;
  padding-top: 30px;

  @media(${breakpoints.LARGE}) {
    padding: 80px 0;
  }
`

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
  padding: 30px 15px;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;

  @media(${breakpoints.LARGE}) {
    padding: 50px 150px;
  }
`

export const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;

  button {
    max-width: 300px;
    width: 100%;
  }
`
