import styled from 'styled-components'

import colors from 'common/colors';
import CardBase from 'components/Cards'

export const Card = styled(CardBase)`
  
`

export const CardMessage = styled.h2`
  background-color: ${colors.blue};
  color: white;
  font-size: 18px;
  font-weight: normal;
  padding: 10px;
`

export const CardTop = styled.div``

export const CardBottom = styled.div`
  padding: 20px 18px;

  p {
    color: #454444;
    font-weight: 600;
  }
`
