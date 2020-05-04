import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const Content = styled.div`
  align-items: flex-start;
  background-color: #75AFDE;
  border-radius: 5px;
  display: flex;
  padding: 16px;
  position: relative;

  svg {
    color: white;
    display: none;
    margin-right: 15px;
    margin-top: 8px;

    @media (${breakpoints.LARGE}) {
      display: block;
    }
  }
`

export const Title = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Subtitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding-right: 20px;
`

export const CloseButton = styled.div`
  cursor: pointer;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0%;

  svg {
    margin: 0;
  }
`
