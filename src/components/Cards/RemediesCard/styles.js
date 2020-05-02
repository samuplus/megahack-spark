import styled from 'styled-components'

import colors from 'common/colors';
import CardBase from 'components/Cards'

export const Card = styled(CardBase)`
  padding: 16px 40px;
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
