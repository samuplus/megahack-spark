import styled, { css } from 'styled-components'

import colors from 'common/colors';
import CardBase from 'components/Cards'

export const Card = styled(CardBase)`
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: 20px 40px;

  ${(props) => props.hasContent && css`
    justify-content: flex-start !important;
  `}

  button {
    width: 260px;
  }
`

export const Title = styled.h2`
  color: ${colors.blueDark};
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    color: ${colors.blueDark};
    height: 60px;
    width: 60px;
  }
`

export const Text = styled.p`
  color: #454444;
  font-weight: 600;
  margin-bottom: 35px;
  padding: 0 35px;
  text-align: center;
`
