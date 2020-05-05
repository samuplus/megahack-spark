import styled from 'styled-components'

import Container from 'components/Container'
import breakpoints from 'common/breakpoints'

export const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid #E2E5E6;
  padding: 10px 0;

  svg {
    height: 30px;
    width: 80px;

    @media (${breakpoints.LARGE}) {
      height: 60px;
      width: 130px;
    }
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`
